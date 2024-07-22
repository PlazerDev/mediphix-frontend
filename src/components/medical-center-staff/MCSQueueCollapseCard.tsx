import { Collapse, CollapseProps } from "antd";
import MCSQueueCollapseTitle from "./MCSQueueCollapseTitle";
import MCSQueueCollapseDesc from "./MCSQueueCollapseDesc";

function MCSQueueCollapseCard() {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <MCSQueueCollapseTitle
          title={"NO 01 | REF_A0021"}
          isPaymentDone={true}
          isActive={false}
          isFinished={true}
          isNext={false}
          isAbsent={false}
        />
      ),
      children: (
        <MCSQueueCollapseDesc
          patientName="Vishwa Sandaruwan"
          age="20 - 30"
          isMarkAsAbsentActive={false}
          isMarlAsPresentActive={false}
          isSetNextActive={false}
          isSetDefaultActive={false}
        />
      ),
    },
    {
      key: "2",
      label: (
        <MCSQueueCollapseTitle
          title={"NO 02 | REF_A0025"}
          isPaymentDone={false}
          isActive={false}
          isFinished={true}
          isNext={false}
          isAbsent={true}
        />
      ),
      children: (
        <MCSQueueCollapseDesc
          patientName="Vishwa Sandaruwan"
          age="20 - 30"
          isMarkAsAbsentActive={false}
          isMarlAsPresentActive={false}
          isSetNextActive={false}
          isSetDefaultActive={false}
        />
      ),
    },
    {
      key: "3",
      label: (
        <MCSQueueCollapseTitle
          title={"NO 03 | REF_A0028"}
          isPaymentDone={true}
          isActive={false}
          isFinished={true}
          isNext={false}
          isAbsent={false}
        />
      ),
      children: (
        <MCSQueueCollapseDesc
          patientName="Vishwa Sandaruwan"
          age="20 - 30"
          isMarkAsAbsentActive={false}
          isMarlAsPresentActive={false}
          isSetNextActive={false}
          isSetDefaultActive={false}
        />
      ),
    },
    {
      key: "4",
      label: (
        <MCSQueueCollapseTitle
          title={"NO 04 | REF_A0041"}
          isPaymentDone={true}
          isActive={true}
          isFinished={false}
          isNext={false}
          isAbsent={false}
        />
      ),
      children: (
        <MCSQueueCollapseDesc
          patientName="Vishwa Sandaruwan"
          age="20 - 30"
          isMarkAsAbsentActive={false}
          isMarlAsPresentActive={false}
          isSetNextActive={false}
          isSetDefaultActive={false}
        />
      ),
    },
    {
      key: "5",
      label: (
        <MCSQueueCollapseTitle
          title={"NO 05 | REF_A0045"}
          isPaymentDone={true}
          isActive={false}
          isFinished={false}
          isNext={true}
          isAbsent={false}
        />
      ),
      children: (
        <MCSQueueCollapseDesc
          patientName="Vishwa Sandaruwan"
          age="20 - 30"
          isMarkAsAbsentActive={true}
          isMarlAsPresentActive={false}
          isSetNextActive={false}
          isSetDefaultActive={false}
        />
      ),
    },
    {
      key: "6",
      label: (
        <MCSQueueCollapseTitle
          title={"NO 06 | REF_A0046"}
          isPaymentDone={true}
          isActive={false}
          isFinished={false}
          isNext={false}
          isAbsent={false}
        />
      ),
      children: (
        <MCSQueueCollapseDesc
          patientName="Vishwa Sandaruwan"
          age="20 - 30"
          isMarkAsAbsentActive={true}
          isMarlAsPresentActive={false}
          isSetNextActive={true}
          isSetDefaultActive={false}
        />
      ),
    },
    {
      key: "7",
      label: (
        <MCSQueueCollapseTitle
          title={"NO 07 | REF_A0058"}
          isPaymentDone={true}
          isActive={false}
          isFinished={false}
          isNext={false}
          isAbsent={false}
        />
      ),
      children: (
        <MCSQueueCollapseDesc
          patientName="Vishwa Sandaruwan"
          age="20 - 30"
          isMarkAsAbsentActive={true}
          isMarlAsPresentActive={false}
          isSetNextActive={true}
          isSetDefaultActive={false}
        />
      ),
    },
    {
      key: "8",
      label: (
        <MCSQueueCollapseTitle
          title={"NO 08 | REF_A0061"}
          isPaymentDone={false}
          isActive={false}
          isFinished={false}
          isNext={false}
          isAbsent={true}
        />
      ),
      children: (
        <MCSQueueCollapseDesc
          patientName="Vishwa Sandaruwan"
          age="20 - 30"
          isMarkAsAbsentActive={true}
          isMarlAsPresentActive={false}
          isSetNextActive={true}
          isSetDefaultActive={false}
        />
      ),
    },
  ];
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <>
      <Collapse
        accordion
        items={items}
        defaultActiveKey={["1"]}
        onChange={onChange}
      />
    </>
  );
}

export default MCSQueueCollapseCard;
