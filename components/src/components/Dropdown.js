import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handleClicks = (event) => {
      if (!divEl.current) return; // returns early; if divEl is not assigned to any element (element probably hidden)
      if (!divEl.current.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("click", handleClicks);

    return () => {
      document.removeEventListener("click", handleClicks);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // close dropdown
    setIsOpen(false);
    // Update state with selection
    onChange(option);
  };

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
    <div ref={divEl} className="w-48 relative">
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
