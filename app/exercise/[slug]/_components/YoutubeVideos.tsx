"use client";

import { useEffect, useState } from "react";

function fakeFetch(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Item A", "Item B", "Item C"]);
    }, 8000);
  });
}

// "Recurso" que Suspense entende
function wrapPromise<T>(promise: Promise<T>) {
  let status = "pending";
  let result: T;

  const suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender; // Suspense "pausa" aqui
      } else if (status === "error") {
        throw result;
      } else {
        return result!;
      }
    },
  };
}

const resource = wrapPromise(fakeFetch());

export default function YoutubeVideos({
  exerciseName,
}: {
  exerciseName: string;
}) {
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     const response = await fetch(`/api/youtube?q=${exerciseName}`);
  //     const data = await response.json();

  //     setVideos(data.items);
  //   };

  //   fetchVideos();
  // }, [exerciseName]);

  const data = resource.read();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {videos.map((video) => (
        <div
          key={video.id.videoId}
          className="border-2 border-primary-950 rounded p-2 shadow-sm bg-white"
        >
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h3 className="font-bold mt-2">{video.snippet.title}</h3>
          <p className="text-sm text-gray-600 mt-1 italic">
            {video.snippet.channelTitle}
          </p>
        </div>
      ))}
    </div>
  );
}
