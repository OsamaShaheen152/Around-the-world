import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const options = [
  { value: "All regions", label: "All regions" },
  { value: "Asia", label: "Asia" },
  { value: "Americas", label: "Americas" },
  { value: "Africa", label: "Africa" },
  { value: "Oceania", label: "Oceania" },
  { value: "Europe", label: "Europe" },
];

export function RegionMenu({ onRegionChange, selectedRegion }) {
  const handleRegionChange = (e) => {
    const region = e.value;
    console.log(region);
    onRegionChange(region === "All regions" ? "" : region);
  };
  return (
    <Select
      defaultValue={options[0]}
      options={options}
      value={
        options.find((option) => option.value === selectedRegion) || options[0]
      }
      closeMenuOnSelect={true}
      components={animatedComponents}
      onChange={handleRegionChange}
      classNames={{
        input: () => "dark:!text-gray-100",
        singleValue: () => "dark:text-gray-100",
        control: () =>
          "flex h-12 items-center justify-between gap-12 rounded-md !border-none !outline-none pl-4 pr-2 shadow dark:bg-gray-800 dark:text-gray-100 md:h-14 dark:text-gray-100",
        indicatorSeparator: () => "hidden",
        option: () => "hover:!text-gray-800",
        menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
      }}
    />
  );
}
