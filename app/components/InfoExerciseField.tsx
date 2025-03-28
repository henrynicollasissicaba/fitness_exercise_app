import Image from "next/image"

const InfoExerciseField = ({ imgUrl, label, exerciseProp }: {
    imgUrl: string
    label: string
    exerciseProp: string
}) => {
  return (
    <div className="flex items-center gap-1">
        <Image 
          src={imgUrl}
          alt={label} 
          className="w-4 h-4"
          unoptimized={true}
          width={4}
          height={4}
        />
        <div className="flex items-center justify-between w-full gap-4">
            <p className="">{label}:</p>
            <span className="font-bold bg-primary-700 text-white py-1 px-3 rounded">
                {exerciseProp}
            </span>
        </div>
    </div>
  )
}

export default InfoExerciseField