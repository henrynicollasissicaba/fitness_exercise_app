"use client";

import BorderedContainer from "@/app/components/BorderedContainer";
import { useEffect, useState } from "react";

export default function YoutubeVideos({
  exerciseName,
}: {
  exerciseName: string;
}) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(`/api/youtube?q=${exerciseName}`);
      const data = await response.json();

      setVideos(data.items);
    };

    if (exerciseName) fetchVideos();
  }, [exerciseName]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {videos.length === 0 ? (
        <p>Nenhum vídeo encontrado</p>
      ) : (
        videos.map((video) => (
          <BorderedContainer key={video.id.videoId}>
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
          </BorderedContainer>
        ))
      )}
    </div>
  );
}
