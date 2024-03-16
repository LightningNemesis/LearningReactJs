import SortableTable from "../components/SortableTable";
// import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 10 },
    { name: "Apple", color: "bg-red-500", score: 8 },
    { name: "Kiwi", color: "bg-green-500", score: 1 },
    { name: "Banana", color: "bg-yellow-500", score: 5 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
      header: () => <th className="bg-blue-800">Scoreaa</th>,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
