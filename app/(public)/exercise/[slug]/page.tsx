import InfoExerciseField from "@/app/components/InfoExerciseField";
import InstructionsInfo from "@/app/components/InstructionsInfo";
import SecondaryMuscleInfo from "@/app/components/SecondaryMuscleInfo";
import Link from "next/link";

interface Exercise {
  id: string;
  name: string;
  bodyPart: string;
  target: string;
  equipment: string;
  gifUrl: string;
  instructions: string[];
  secondaryMuscles: string[];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  async function getExercise(id: string): Promise<Exercise> {
    const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_API_KEY}`,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
  
    try {
      const response = await fetch(url, options);
      return response.json();
      
    } catch (error) {
      console.error("Error fetching exercise:", error);
      throw error;
      
    }
  }

  const slug = (await params).slug;
  const exercise = await getExercise(slug);

  return (
    <section className="w-full max-w-6xl mx-auto p-4">
      <Link 
        href="/#results"
        className="flex items-center gap-2 py-1 px-4 bg-primary-700 text-white rounded w-max 
        hover:bg-primary-600 transition-colors mb-5"
      >
        <img src="/arrow-back.svg" alt="arrow back" className="w-4 h-4" />
        Voltar para a página inicial
      </Link>
      <div className="flex flex-col gap-10">
        <div className="capitalize flex sm:justify-between flex-wrap gap-8">
          <img
            src={exercise.gifUrl}
            alt="GIF do exercício"
            className="h-[25rem] sm:h-[28rem] md:h-[30rem] border-2 border-y-primary-700 rounded
            border-x-slate-200"
          />
          <div className="capitalize w-full min-[435px]:w-auto">
            <h1 className="font-bold text-xl mb-5">{exercise.name}</h1>
            <div className="flex flex-col gap-4 shadow-lg p-3 border-[1px] border-slate-400 w-full">
              <InfoExerciseField
                imgUrl="/equipment.svg"
                label="Equipment"
                exerciseProp={exercise.equipment}
              />
              <InfoExerciseField
                imgUrl="/body.svg"
                label="Body Part"
                exerciseProp={exercise.bodyPart}
              />
              <InfoExerciseField
                imgUrl="/muscle.svg"
                label="Target"
                exerciseProp={exercise.target}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">Secondary Muscles</h1>
            {exercise.secondaryMuscles.map((muscle, index) => (
              <SecondaryMuscleInfo key={index} secondaryMuscle={muscle} />
            ))}
          </div>
        </div>
        <div className="shadow-lg p-3 border-[1px] border-slate-400 w-full">
          <h1 className="font-bold text-xl mb-5">Instructions</h1>
          <div className="flex flex-col gap-2 divide-y divide-slate-300">
            {exercise.instructions.map((instruction, index) => (
              <InstructionsInfo
                key={index}
                index={index + 1}
                instruction={instruction}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
