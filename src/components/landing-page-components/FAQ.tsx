import { Collapse, CollapseProps } from "antd";

function FAQ() {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: <p className="font-semibold">How do I book an appointment?</p>,
      children:
        "Booking an appointment is easy with Mediphix. Simply log in to your account, use the search feature to find your preferred doctor or medical center, select a suitable time slot, and confirm your appointment. You'll receive a confirmation notification shortly after.",
    },
    {
      key: "2",
      label: (
        <p className="font-semibold">How can I access my medical records?</p>
      ),
      children:
        "You can access your medical records by logging into your Mediphix account and navigating to the 'Medical Records' section. Here, you will find all your past diagnoses, treatments, and lab reports.",
    },
    {
      key: "3",
      label: (
        <p className="font-semibold">
          Will I receive notifications about my appointments and lab results?
        </p>
      ),
      children:
        "Yes, Mediphix ensures you stay informed. You will receive notifications for upcoming appointments, new lab results, and important health updates directly on your dashboard and via SMS or email.",
    },
    {
      key: "4",
      label: (
        <p className="font-semibold">
          How does Mediphix help in reducing misdiagnosis?
        </p>
      ),
      children:
        "Mediphix helps reduce misdiagnosis by ensuring that your doctors have access to comprehensive and up-to-date medical information. By having your complete medical history and recent lab reports available, doctors can make more informed decisions about your health.",
    },
    {
      key: "5",
      label: (
        <p className="font-semibold">
          Is my personal and medical information secure?
        </p>
      ),
      children:
        "Yes, your privacy and security are our top priorities. Mediphix uses advanced encryption and security protocols to protect your personal and medical information from unauthorized access.",
    },
  ];
  return (
    <div>
      <p className="text-center font-bold text-3xl mb-8">
        Frequently asked questions
      </p>
      <div>
        <Collapse
          style={{ backgroundColor: "transparent" }}
          items={items}
          bordered={false}
          defaultActiveKey={["1"]}
        />
      </div>
    </div>
  );
}

export default FAQ;
