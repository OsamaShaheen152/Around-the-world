export function ResetBtn({ setSelectedRegion, setSearchQuery }) {
  const handleReset = () => {
    setSearchQuery("");
    setSelectedRegion("");
  };

  return (
    <button
      onClick={handleReset}
      className="dark: ml-5 rounded-full bg-white p-3 dark:bg-gray-800"
    >
      Reset
    </button>
  );
}
