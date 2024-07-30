import { Table } from "antd";
import "../assets/css/table.css";
const TableComponent = ({ dataSource, columns }: any) => {
  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          className: "custom-pagination", // Apply custom pagination styles
        }}
      />
    </div>
  );
};

export default TableComponent;
