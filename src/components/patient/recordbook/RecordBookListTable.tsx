import { Table } from "antd";
import type { TableProps } from "antd";
import { FaCheckCircle } from "react-icons/fa";
import "../../../assets/css/table.css";

interface DataType {
  key: string;
  date: Date;
  stime: string;
  endtime: string;
  category: string;
  doctor: string;
  mcenter: string;
  lbstatus: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (date: Date) => <span>{date.toLocaleDateString("en-CA")}</span>,
  },
  {
    title: "Start Time",
    dataIndex: "stime",
    key: "stime",
  },
  {
    title: "End Time",
    dataIndex: "endtime",
    key: "endtime",
  },
  {
    title: "Apt. Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Doctor",
    dataIndex: "doctor",
    key: "doctor",
  },
  {
    title: "Medical Center",
    dataIndex: "mcenter",
    key: "mcenter",
  },
  {
    title: "Lab Report Status",
    dataIndex: "lbstatus",
    key: "lbstatus",
    render: (status: string) => {
      let color = "";
      let icon = null;
      if (status === "N/A") {
        color = "#868686";
      } else if (status === "received") {
        color = "#363636";
        icon = <FaCheckCircle style={{ color }} />;
      } else if (status === "pending") {
        color = "#FF7300";
      }
      return (
        <span style={{ color, display: "flex", alignItems: "center" }}>
          {icon}
          <span style={{ marginLeft: icon ? 4 : 0 }}>
            {toPascalCase(status)}
          </span>
        </span>
      );
    },
  },
];

const toPascalCase = (str: string) => {
  return str
    .toLowerCase()
    .replace(
      /(\w)(\w*)/g,
      (_, firstChar, rest) => firstChar.toUpperCase() + rest.toLowerCase()
    );
};

const RecordBookListTable = ({
  data,
  onRowClick,
}: {
  data: DataType[];
  onRowClick: () => void;
}) => {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          className: "custom-pagination", // Apply custom pagination styles
        }}
        onRow={() => ({
          onClick: () => onRowClick(),
        })}
      />
    </>
  );
};

export default RecordBookListTable;
