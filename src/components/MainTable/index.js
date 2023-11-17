import React from "react";
import { Space, Table, Button } from "antd";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "No Order",
    dataIndex: "no_order",
    key: "no_order",
  },
  {
    title: "Tanggal Order",
    dataIndex: "tgl_order",
    key: "tgl_order",
  },
  {
    title: "Cabang",
    dataIndex: "cabang",
    key: "cabang",
  },
  {
    title: "Nama Customer",
    dataIndex: "nama_customer",
    key: "nama_customer",
  },
  {
    title: "Hasil Screening",
    dataIndex: "hasil_screening",
    key: "hasil_screening",
  },
  {
    title: "Action",
    key: "action",
    render: (_) => (
      <Space size="middle">
        <Button type="primary" onClick={<Link to='/sc1/detail'/>}> Detail</Button>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    no_order: "2310110001",
    tgl_order: "2023-10-11",
    cabang: "Bekasi",
    nama_customer: "Arman",
    hasil_screening: "INSTAN APPROVAL",
  },
];
const MainTable = () => {
  return (
    <div className="table">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default MainTable;
