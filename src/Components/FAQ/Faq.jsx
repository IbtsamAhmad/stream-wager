import React from "react";
import { Collapse } from "antd";
import { ReactComponent as Plus } from "../../assets/Plus.svg";
import { ReactComponent as Remove } from "../../assets/remove_circle.svg";
import "./faq.scss";
const Faq = () => {
  const items = [
    {
      key: "1",
      label: "Account Creation Requirement",
      children: (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      ),
    },
    {
      key: "2",
      label: "Wager Placement Process",
      children: (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      ),
    },
    {
      key: "3",
      label:
        'When a user lists a bet, what does it mean to select "Place Wager"',
      children: (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      ),
    },
    {
      key: "4",
      label: '"What are the age requirements for using StreamWagerOnline?"',
      children: (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      ),
    },
    {
      key: "5",
      label:
        "What transaction fees are associated with betting on StreamWager Online?",
      children: (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      ),
    },
    {
      key: "6",
      label: "How quickly will I receive my winnings after a successful bet?",
      children: (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      ),
    },
    {
      key: "7",
      label: "I have a gambling problem. What should I do?",
      children: (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      ),
    },
    {
      key: "8",
      label:
        "How can I contact StreamWager Online for further questions or assistance?",
      children: (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      ),
    },
  ];

  return (
    <div className="faq-container container">
      <div className="faq-content">
        <h2>
          <span>FAQs</span>
        </h2>
        <h1>Frequently Asked Questions</h1>
        <Collapse
          items={items}
          defaultActiveKey={["1"]}
          bordered={false}
          expandIcon={({ isActive }) => (isActive ? <Remove /> : <Plus />)}
          expandIconPosition="end"
        />
      </div>
    </div>
  );
};

export default Faq;
