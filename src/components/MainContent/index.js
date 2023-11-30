import "./style.css";
import { Row, Col, Select, Input, DatePicker, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import MainTable from "../MainTable";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";



// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const { RangePicker } = DatePicker;

const MainContent = (props) => {
  const [isDisabled, setDisabled] = useState(false);
  const [isDisabled2, setDisabled2] = useState(true);
  const [isDisabled3, setDisabled3] = useState(true);
  const [selectedOption, setSelectedOption] = useState('0');
  const ref = useRef(null);

  const [searchClicks, setSearchClicks] = useState(0);
  const [branchList, setBranchList] = useState([])
  const [cabang,setCabang] = useState('')
  const [order,setOrder] = useState('')
  const [periode,setPeriode] = useState([])
  const [customer,setCustomer] = useState('')

  const baseURL = "http://localhost:4000/"+props.scoring;
  const branchURL = 'http://localhost:4000/getListBranch'
  const [post, setPost] = useState([]);
  
  
  
  const onChangeCabang = (val) => {
    console.log(`selected ${val}`);
    setCabang(val)
  };
  const onSearchCabang = (value) => {
    console.log("search:", value);
  };
  const onChangeOrder = (event) => {
    setOrder(event.target.value)
  }
  const onChangePeriode = (dates, dateStrings) => {
    
    setPeriode(dateStrings)
  }
  const onChangeCustomer = (event) => {
    setCustomer(event.target.value)
  }
  useEffect(() =>{
    console.log('ngetestttt =', cabang)
  },[cabang])

  

  const handleButtonClick = () => {
    setSearchClicks((prev) => prev + 1);

    const getScreening = {
      cabang: cabang,
      no_order: order,
      periode: periode,
      nama_customer: customer
    }
    console.log(' get screening array =', getScreening)

      axios.post(baseURL, getScreening).then((response) => {
        setPost(response.data);
      }).catch((err) =>{
        console.log("error request getScoring ",err)
      });
  };

  console.log(post);

  const handleChange = (event) => {
    if (event.target.value == "0") {
      setDisabled(false);
      setDisabled2(true);
      setDisabled3(true);
      setPeriode([])
      setCustomer('')
    } else if (event.target.value == "1") {
      setDisabled2(false);
      setDisabled(true);
      setDisabled3(true);
      setOrder('')
      setCustomer('')
    } else if (event.target.value == "2") {
      setDisabled3(false);
      setDisabled2(true);
      setDisabled(true);
      setOrder('')
      setPeriode([])
    }
    setSelectedOption(event.target.value);
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

  useEffect(() => {
    axios.get(branchURL).then((response) => {
      setBranchList(response.data.data.data);
      console.log('branch list =',response.data.data.data)
    });
  }, [])
  const branch = []
  branchList.forEach((param,index) =>{
    branch.push({
      value:param.BRANCH_CODE,
      label:param.BRANCH_NAME
    })
  })

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
                placeholder="Pilih cabang"
                className="field-input"
                id="cabang"
                optionFilterProp="children"
                onChange={onChangeCabang}
                onSearch={onSearchCabang}
                filterOption={filterOption}
                options={branch}
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
                checked={selectedOption === '0'}
              />
              <label htmlFor="no-order">No. Order</label>
            </Col>
            <Col span={1}>:</Col>
            <Col span={12}>
              <Input
                disabled={isDisabled}
                id="radio-order"
                placeholder="No. Order"
                onChange={onChangeOrder}
                value={order}
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
                checked={selectedOption === '1'}
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
                onChange={onChangePeriode}
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
                checked={selectedOption === '2'}
              />
              <label htmlFor="nama">Nama Customer</label>
            </Col>
            <Col span={1}>:</Col>
            <Col span={12}>
              <Input
                disabled={isDisabled3}
                id="radio-name"
                placeholder="Nama Customer"
                onChange={onChangeCustomer}
                value={customer}
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
