const SecondaryMuscleInfo = ({ secondaryMuscle }: {
    secondaryMuscle: string
}) => {
  return (
    <span className="font-bold bg-primary-700 text-white py-1 px-3 rounded w-max">
        {secondaryMuscle}
    </span>
  )
}

export default SecondaryMuscleInfo