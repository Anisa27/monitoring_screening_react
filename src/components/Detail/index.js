import React from "react";
import { Tabs } from "antd";
import MainTable from "../MainTable";



const Detail = () => {
    
    const columns1 = [
      {
        title: "Parameter Garading",
        dataIndex: "param_grading",
        key: "param_grading",
      },
      {
        title: "Result",
        dataIndex: "result",
        key: "result",
      },
      {
        title: "Create Date",
        dataIndex: "create_date",
        key: "create_date",
      },
      {
        title: "Update Date",
        dataIndex: "update_date",
        key: "update_date",
      },
      {
        title: "Durasi",
        dataIndex: "durasi",
        key: "durasi",
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
      },
    ];
    
    const data1 = [
      {
        key: "1",
        param_grading: "customer behavior",
        result: "GOLD",
        create_date: "2023-11-15",
        update_date: "2023-11-16",
        durasi: "5 menit",
        status:"OK"
      },
    ];

    const columns2 = [
      {
        title: "Key BRMS Old",
        dataIndex: "key_brms_old",
        key: "key_brms_old",
      },
      {
        title: "Key BRMS New",
        dataIndex: "key_brms_new",
        key: "key_brms_new",
      },
      {
        title: "Result",
        dataIndex: "result",
        key: "result",
      },
      {
        title: "Create Date",
        dataIndex: "create_date",
        key: "create_date",
      },
      {
        title: "Update Date",
        dataIndex: "update_date",
        key: "update_date",
      },
      {
        title: "Durasi",
        dataIndex: "durasi",
        key: "durasi",
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
      },
    ];
    
    const data2 = [
      {
        key: "1",
        key_brms_old: "AP0001",
        key_brms_new: "custSlik",
        result: "MEDIUM",
        create_date: "2023-11-15",
        update_date: "2023-11-16",
        durasi: "5 menit",
        status:"OK"
      },
    ];

    const columns3 = [
      {
        title: "Rules",
        dataIndex: "rules",
        key: "rules",
      },
      {
        title: "Value",
        dataIndex: "value",
        key: "value",
      },
    ];
    
    const data3 = [
      {
        key: "1",
        rules: "SC1LS003",
        value:"9"
      },
    ];

    const items = [
      {
        key: "1",
        label: "Data Grading",
        children: <MainTable columns={columns1} data={data1}/>,
      },
      {
        key: "2",
        label: "Payload Request",
        children: <MainTable columns={columns2} data={data2}/>,
      },
      {
        key: "3",
        label: "Payload Result",
        children: <MainTable columns={columns3} data={data3}/>,
      },
    ];

  return (
    <div className="content layout">
      <Tabs defaultActiveKey="1" items={items}/>
    </div>
  );
};

export default Detail;
