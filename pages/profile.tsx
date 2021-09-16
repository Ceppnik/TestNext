import { Avatar, Table, Card, Row, Col, Badge } from "antd";

import Image from "next/image";
import Layout from "../components/Layout";

import Background from "../public/background.jpg";
import React from "react";

const columns = [
  {
    title: "Номер сессии",
    dataIndex: "sisionNumber",
    key: "sisionNumber",
  },
  {
    title: "Время",
    dataIndex: "time",
    key: "time",
  },
];

const data = [
  {
    sisionNumber: "1",
    time: "16.09.2021 18:28",
  },
  {
    sisionNumber: "2",
    time: "15.09.2021 18:00",
  },
  {
    sisionNumber: "3",
    time: "14.09.2021 18:55",
  },
  {
    sisionNumber: "4",
    time: "13.09.2021 18:12",
  },
  {
    sisionNumber: "5",
    time: "10.09.2021 12:10",
  },
];

const Profile = () => {
  return (
    <Layout>
      <div style={{ position: "relative" }}>
        <Image
          width={1220}
          height={200}
          objectFit="cover"
          src={Background}
          alt="background"
        />

        <Avatar
          style={{ position: "absolute", top: "120px", left: "60px" }}
          size={200}
          src="https://i.pravatar.cc/200"
        />
      </div>

      <Row justify="end" align="middle">
        <Col span={8}>
          <h1>Николай Кузьмич</h1>

          <Badge status="success" text="online" />
        </Col>
        <Col span={10}>
          <div style={{ display: "flex", padding: "16px 0" }}>
            <Card bordered={false} style={{ width: 300 }}>
              <p> Email: admin@test.ru</p>
              <p>Дата рождения: 16.12.1995</p>
            </Card>
            <Card bordered={false} style={{ width: 300 }}>
              <p> Телефон: +375 25 745-12-50</p>
              <p>Город: Брест</p>
            </Card>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table
            title={() => "Информации о входе в учетную запись"}
            columns={columns}
            dataSource={data}
            size="middle"
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default Profile;
