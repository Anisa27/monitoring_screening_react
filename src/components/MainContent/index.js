import "./style.css";
import { Row, Col, Select, Input, DatePicker } from "antd";

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
  return (
    <div className="content">
      <div className="title">{props.title}</div>
      <form action="">
        <div className="filter">
          <Row className="filter-row">
            <Col span={11} className="filter-label">Cabang</Col>
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
                name="no-order"
              />
              <label htmlFor="no-order">No. Order</label>
            </Col>
            <Col span={1}>:</Col>
            <Col span={12}>
              <Input placeholder="No. Order" />
            </Col>
          </Row>
          <Row className="filter-row">
            <Col span={11} className="filter-label">
              <input
                type="radio"
                value="1"
                aria-label="periode"
                name="periode"
              />
              <label htmlFor="periode">Periode</label>
            </Col>
            <Col span={1}>:</Col>
            <Col span={12}>
              <RangePicker 
                className="field-input"
              />
            </Col>
          </Row>
          <Row className="filter-row">
            <Col span={11} className="filter-label">
              <input
                type="radio"
                value="1"
                aria-label="Nama Customer"
                name="nama"
              />
              <label htmlFor="nama">Nama Customer</label>
            </Col>
            <Col span={1}>:</Col>
            <Col span={12}>
            <Input placeholder="Nama Customer" />
            </Col>
          </Row>
        </div>
      </form>
    </div>
  );
};

export default MainContent;
