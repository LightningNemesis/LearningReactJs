import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null); // currently one of null, ASC, DESC
  const [sortBy, setSortBy] = useState(null); // currently sorted by which column

  const { config, data } = props;

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("ASC");
      setSortBy(label);
    } else if (sortOrder === "ASC") {
      setSortOrder("DESC");
      setSortBy(label);
    } else if (sortOrder === "DESC") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    } else {
      return {
        ...column,
        header: () => (
          <th onClick={() => handleClick(column.label)}>{column.label}</th>
        ),
      };
    }
  });

  // Only sort data if SortOrder AND SortBy are NOT NULL
  // Make a copy of data prop ~ JS modifies array while sorting, we CAN'T change PROPS
  // Find the correct sortValue function and use it for sorting logic

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
  }

  return (
    <div>
      {sortBy} - {sortOrder}
      <Table {...props} config={updatedConfig} />
    </div>
  );
}

export default SortableTable;
