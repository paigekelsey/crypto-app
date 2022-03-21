import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const { Title } = Typography;

const Homepage = () => {
  return (
    <div>
      <Title level={2} className="heading">
        Crypto Data
      </Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={1} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={1} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={1} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={1} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market" value={1} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Global Cryptos
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3}>
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified />
    </div>
  );
};

export default Homepage;
