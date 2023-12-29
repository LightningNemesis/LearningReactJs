// import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 1,
      label: "Can you use React in a project?",
      content: "Yes, we can use React in any given project",
    },
    {
      id: 2,
      label: "Can you use Typescript in a project?",
      content: "Yes, we can use Typescript in any given project",
    },
    {
      id: 3,
      label: "Can you use Redux in a project?",
      content: "Yes, we can use Redux in any given project",
    },
    {
      id: 4,
      label: "Can you use React in a project?",
      content: "Yes, we can use React in any given project",
    },
    {
      id: 5,
      label: "Can you use Typescript in a project?",
      content: "Yes, we can use Typescript in any given project",
    },
    {
      id: 6,
      label: "Can you use Redux in a project?",
      content: "Yes, we can use Redux in any given project",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
