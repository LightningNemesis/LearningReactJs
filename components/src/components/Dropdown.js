import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Time: Component is re-rendered
  window.timeTwo = performance.now()
  const handleOptionClick = (option) => {
    window.timeOne = performance.now() // Time: React component's event handler is executed
    // close dropdown
    setIsOpen(false);
    // Update state with selection
    onChange(option);
  };

//   const dropdown = document.querySelector(".w-48")
//   const handleClicks = (event) => {
//     window.timeThree = performance.now()
//     if(dropdown.contains(event.target)) console.log("clicked INSIDE component")
//     else console.log("clicked OUTSIDE component")
//   }
// document.addEventListener('click', handleClicks)

  const renderedItems = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Please select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedItems}</Panel>}
    </div>
  );
}
export default Dropdown;
