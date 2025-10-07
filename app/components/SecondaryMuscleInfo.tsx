const SecondaryMuscleInfo = ({
  secondaryMuscle,
  index,
}: {
  secondaryMuscle: string;
  index: number;
}) => {
  return (
    <span
      className={`font-bold text-white py-1 px-3 rounded w-max ${
        index % 2 === 0 ? "bg-primary-700" : "bg-secondary-300"
      }`}
    >
      {secondaryMuscle}
    </span>
  );
};

export default SecondaryMuscleInfo;
