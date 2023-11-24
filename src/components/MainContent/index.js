import "./style.css";
import { Row, Col, Select, Input, DatePicker, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import MainTable from "../MainTable";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const { RangePicker } = DatePicker;

const MainContent = (props) => {
  const [isDisabled, setDisabled] = useState(true);
  const [isDisabled2, setDisabled2] = useState(true);
  const [isDisabled3, setDisabled3] = useState(true);
  const ref = useRef(null);

  const [searchClicks, setSearchClicks] = useState(0);

  const baseURL = "http://localhost:4000/getScoring";
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, [searchClicks]);

  const handleButtonClick = () => {
    setSearchClicks((prev) => prev + 1);
  };

  console.log(post);

  const handleChange = (event) => {
    if (event.target.value == "0") {
      setDisabled(false);
      setDisabled2(true);
      setDisabled3(true);
    } else if (event.target.value == "1") {
      setDisabled2(false);
      setDisabled(true);
      setDisabled3(true);
    } else if (event.target.value == "2") {
      setDisabled3(false);
      setDisabled2(true);
      setDisabled(true);
    }
    // const radio_order = document.getElementById('radio-order').disabled(false);
  };
  const detailPage = (order_id) => {
    const url = `${props.detailPage}${order_id}`
    window.location.href = url;
  };

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
      render: (record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => detailPage(record.no_order)}>
            Detail
          </Button>
        </Space>
      ),
    },
  ];

  const data = [];
  post.forEach((param, index) => {
    data.push({
      key: index,
      no_order: param.order_id,
      tgl_order: param.tanggal_order,
      cabang: param.cabang,
      nama_customer: param.nama_customer,
      hasil_screening: param.hasil_screening,
    });
  });

  return (
    <div className="content">
      <div className="title">{props.title}</div>
      <form action="">
        <div className="filter">
          <Row className="filter-row">
            <Col span={11} className="filter-label">
              Cabang
            </Col>
            <Col span={1}>:</Col>
            <Col span={12}>
              <Select
                showSearch
                placeholder="Select a person"
                className="field-input"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row className="filter-row">
            <Col span={11} className="filter-label">
              <input
                type="radio"
                value="0"
                aria-label="No. Order"
                name="radio-filter"
                onChange={handleChange}
              />
              <label htmlFor="no-order">No. Order</label>
            </Col>
            <Col span={1}>:</Col>
            <Col span={12}>
              <Input
                disabled={isDisabled}
                id="radio-order"
                placeholder="No. Order"
              />
            </Col>
          </Row>
          <Row className="filter-row">
            <Col span={11} className="filter-label">
              <input
                type="radio"
                value="1"
                aria-label="periode"
                name="radio-filter"
                onChange={handleChange}
              />
              <label htmlFor="periode">Periode</label>
            </Col>
            <Col span={1}>:</Col>
            <Col span={12}>
              <RangePicker
                ref={ref}
                disabled={isDisabled2}
                id="radio-periode"
                className="field-input"
              />
            </Col>
          </Row>
          <Row className="filter-row">
            <Col span={11} className="filter-label">
              <input
                type="radio"
                value="2"
                aria-label="Nama Customer"
                name="radio-filter"
                onChange={handleChange}
              />
              <label htmlFor="nama">Nama Customer</label>
            </Col>
            <Col span={1}>:</Col>
            <Col span={12}>
              <Input
                disabled={isDisabled3}
                id="radio-name"
                placeholder="Nama Customer"
              />
            </Col>
          </Row>
        </div>
        <Row>
          <div className="button-search">
            <Button
              onClick={handleButtonClick}
              type="primary"
              icon={<SearchOutlined />}
            >
              Search
            </Button>
          </div>
          <div className="button-search">
            <Button type="primary">Reset</Button>
          </div>
        </Row>

        <div>
          <MainTable columns={columns} data={data} />
        </div>
      </form>
    </div>
  );
};

export default MainContent;
