import RouteList from "./components/RouteList/RouteList";
import Map from "./components/Map/Map";
import { Col, Layout, Row } from "antd";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Row>
          <Col xs={24} sm={24} md={10} lg={10}>
            <RouteList />
          </Col>
          <Col xs={24} sm={24} md={14} lg={14}>
            <Map />
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
