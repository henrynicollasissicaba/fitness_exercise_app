const InstructionsInfo = ({
  index,
  instruction,
}: {
  index: number;
  instruction: string;
}) => {
  return (
    <p className="flex gap-2 py-2 first:pt-0 last:pb-0">
      <span
        className="font-bold text-primary-950 rounded-full bg-primary-400 p-4 border-2 border-primary-950
            flex justify-center items-center w-6 h-6 mr-1"
      >
        {index}
      </span>
      {instruction}
    </p>
  );
};

export default InstructionsInfo;
