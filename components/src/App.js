import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [selected, setSelected] = useState(null);

  const handleSelection = (selectedOption) => {
    setSelected(selectedOption);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={selected} onChange={handleSelection} />
      <Dropdown options={options} value={selected} onChange={handleSelection} />
      <Dropdown options={options} value={selected} onChange={handleSelection} />
    </div>
  );
}

export default App;
