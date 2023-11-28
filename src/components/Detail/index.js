import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import MainTable from "../MainTable";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = (props) => {
  const { order_id } = useParams();

  const baseURL = `http://localhost:4000/${props.detailGrading}/${order_id}`;
  const baseURLRes = `http://localhost:4000/${props.payloadRes}/${order_id}`;
  const baseURLReq = `http://localhost:4000/${props.payloadReq}/${order_id}`;
  const [detailGrading, setDetailGrading] = useState([]);
  const [detailGrading2, setDetailGrading2] = useState([]);
  const [detailGrading3, setDetailGrading3] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDetailGrading(response.data.result);
      console.log(response.data.result);
    });

    axios.get(baseURLReq).then((response) => {
      setDetailGrading2(response.data.result);
      console.log(response.data.result);
    });

    axios.get(baseURLRes).then((response) => {
      setDetailGrading3(response.data.result);
      console.log(response.data.result);
    });
  }, []);

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
  const data1 = [];
  detailGrading.forEach((param, index) => {
    const padWithZeros = (number) => {
      return number < 10 ? "0" + number : number;
    };
    let stat = "";
    let dateCreate = new Date(param.created_date);
    let dateUpdate = new Date(param.updated_date);
    let durasiUpdate = dateUpdate - dateCreate;
    let dateDurasi = new Date(durasiUpdate);
    let formattedDifference = dateDurasi.toISOString().substr(11, 8);

    let create_date =
      padWithZeros(dateCreate.getDate()) +
      "-" +
      padWithZeros(dateCreate.toLocaleString("default", { month: "short" })) +
      "-" +
      dateCreate.getFullYear() +
      " " +
      padWithZeros(dateCreate.getHours()) +
      ":" +
      padWithZeros(dateCreate.getMinutes()) +
      ":" +
      padWithZeros(dateCreate.getSeconds());
    let update_date =
      padWithZeros(dateUpdate.getDate()) +
      "-" +
      padWithZeros(dateUpdate.toLocaleString("default", { month: "short" })) +
      "-" +
      dateUpdate.getFullYear() +
      " " +
      padWithZeros(dateUpdate.getHours()) +
      ":" +
      padWithZeros(dateUpdate.getMinutes()) +
      ":" +
      padWithZeros(dateUpdate.getSeconds());
    if (param.flag_result_grading === 1) {
      stat = "OK";
    } else {
      stat = "PENDING";
    }
    data1.push({
      key: index,
      param_grading: param.grading_desc,
      result: param.result_grading,
      create_date: create_date,
      update_date: update_date,
      durasi: formattedDifference,
      status: stat,
    });
  });

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

  const data2 = [];
  detailGrading2.forEach((param,index) => {
    let res = '';
    const padWithZeros = (number) => {
      return number < 10 ? "0" + number : number;
    };
    let stat = ''
    let dateCreate = new Date(param.created_date);
    let dateUpdate = new Date(param.updated_date);
    let durasiUpdate = dateUpdate - dateCreate;
    let dateDurasi = new Date(durasiUpdate);
    let formattedDifference = dateDurasi.toISOString().substr(11, 8);

    if (param.payload_data_type == "1"){
      res = param.payload_str_val
    } else if (param.payload_data_type == "2"){
      res = param.payload_int_val
    } else if (param.payload_data_type == "3"){
      res = param.payload_dbl_val
    } else if (param.payload_data_type == "4"){
      res = param.payload_dbl_val_1
    } else if (param.payload_data_type == "5"){
      res = param.payload_dbl_val_2
    } else if (param.payload_data_type == "6"){
      res = param.payload_dbl_val_3
    }

    let create_date =
      padWithZeros(dateCreate.getDate()) +
      "-" +
      padWithZeros(dateCreate.toLocaleString("default", { month: "short" })) +
      "-" +
      dateCreate.getFullYear() +
      " " +
      padWithZeros(dateCreate.getHours()) +
      ":" +
      padWithZeros(dateCreate.getMinutes()) +
      ":" +
      padWithZeros(dateCreate.getSeconds());
    let update_date =
      padWithZeros(dateUpdate.getDate()) +
      "-" +
      padWithZeros(dateUpdate.toLocaleString("default", { month: "short" })) +
      "-" +
      dateUpdate.getFullYear() +
      " " +
      padWithZeros(dateUpdate.getHours()) +
      ":" +
      padWithZeros(dateUpdate.getMinutes()) +
      ":" +
      padWithZeros(dateUpdate.getSeconds());

      if (param.status === 1) {
        stat = "OK";
      } else {
        stat = "PENDING";
      }

    data2.push({
      key: index,
      key_brms_old: param.brms_key_old,
      key_brms_new: param.brms_key_new,
      result: res,
      create_date: create_date,
      update_date: update_date,
      durasi: formattedDifference,
      status: stat,
    });
  });

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

  const data3 = [];
  // detailGrading3.forEach((param, index) => {

  //   data3.push({
  //     key: index,
  //     rules: param.rules,
  //     value: param.value,
  //   });
  // });

  for (const key in detailGrading3) {
    if (detailGrading3.hasOwnProperty(key)) {
      const keyJson = detailGrading3[key];
      // const valueJson = detailGrading3[value];
      data3.push({
            // key: index,
            rules: key,
            value: keyJson,
          });
      console.log(`Key: ${key}, Value: ${keyJson}`);
    }
  }

  const items = [
    {
      key: "1",
      label: "Data Grading",
      children: <MainTable columns={columns1} data={data1} />,
    },
    {
      key: "2",
      label: "Payload Request",
      children: <MainTable columns={columns2} data={data2} />,
    },
    {
      key: "3",
      label: "Payload Result",
      children: <MainTable columns={columns3} data={data3} />,
    },
  ];

  return (
    <div className="content layout">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default Detail;
