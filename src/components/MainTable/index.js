import React from "react";
import {Table} from 'antd'

const MainTable = (props) => {
  return (
    <div className="table">
      <Table columns={props.columns} dataSource={props.data} />
    </div>
  );
};

export default MainTable;
