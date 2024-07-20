import { Table } from "antd";
import { FaCheckCircle } from "react-icons/fa";
import type { TableProps } from "antd";

interface DataType {
key: string;
date: Date;
stime: string;
endtime: string;
category: string;
mcenter: string;
diagnosisCategory: string;
labReportStatus: string;
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
    title: "Medical Center",
    dataIndex: "mcenter",
    key: "mcenter",
  },
  {
    title: "Diagnosis Category",
    dataIndex: "diagnosisCategory",
    key: "diagnosisCategory",
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
  
const PreviousSessionTableDetails = ({
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
  

export default PreviousSessionTableDetails
