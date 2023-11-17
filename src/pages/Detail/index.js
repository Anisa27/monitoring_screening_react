import React from "react";
import { Tabs } from "antd";
import SidebarMenu from "../../components/SidebarMenu";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Data Grading",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Payload Request",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Payload Result",
    children: "Content of Tab Pane 3",
  },
];
const Detail = () => {
  return (
    <div>
      <SidebarMenu/>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default Detail;
