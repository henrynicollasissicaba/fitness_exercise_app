const Loading = () => {
  return (
    <div className="flex-col gap-4 w-full fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
        <div className="w-16 h-16 border-4 border-transparent text-blue-700 text-2xl animate-spin flex items-center justify-center border-t-blue-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
