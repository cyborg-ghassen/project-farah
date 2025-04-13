import React, { useState } from "react";
import {
  Table,
  Tag,
  Input,
  Button,
  Select,
  Space,
  Row,
  Col,
  Typography,
  Divider,
} from "antd";
import {
  MenuOutlined,
  PlusOutlined,
  ClockCircleOutlined,
  HeartOutlined,
  MessageOutlined,
  UnorderedListOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";

const { Option } = Select;
const { Title, Text } = Typography;

const statusColors = {
  "Avis prêts": "green",
  "Avis à modifier": "red",
  "Avis mis à jour": "blue",
  Brouillon: "gray",
  "Avis en cours": "orange",
  Cancelled: "default",
  Signorisé: "default",
};

const rawData = [
  {
    id: "Mrabet",
    statut: "Avis prêts",
    date: "2 h",
    nomPatient: "Mrabet",
    service: "2 h",
  },
  {
    id: "qccsqdsqd",
    statut: "Avis prêts",
    date: "3 h",
    nomPatient: "qccsqdsqd",
    service: "3 h",
  },
  {
    id: "testprestaff",
    statut: "Avis prêts",
    date: "1 w",
    nomPatient: "testprestaff",
    service: "1 w",
  },
  {
    id: "cxcwxcxcw",
    statut: "Avis prêts",
    date: "2 w",
    nomPatient: "cxcwxcxcw",
    service: "2 w",
  },
  {
    id: "Info2",
    statut: "Avis prêts",
    date: "2 w",
    nomPatient: "Info2",
    service: "2 w",
  },
  {
    id: "patient1",
    statut: "Avis prêts",
    date: "2 w",
    nomPatient: "patient1",
    service: "2 w",
  },
  {
    id: "fdqf",
    statut: "Avis prêts",
    date: "2 w",
    nomPatient: "fdqf",
    service: "2 w",
  },
  {
    id: "Test mobile 1",
    statut: "Avis prêts",
    date: "2 w",
    nomPatient: "Test mobile 1",
    service: "2 w",
  },
  {
    id: "test5",
    statut: "Avis prêts",
    date: "2 w",
    nomPatient: "test5",
    service: "2 w",
  },
];

const App = () => {
  const [statusFilter, setStatusFilter] = useState(null);
  const [filteredData, setFilteredData] = useState(rawData);

  const handleFilterChange = (value) => {
    setStatusFilter(value);
    if (!value) return setFilteredData(rawData);
    setFilteredData(rawData.filter((item) => item.statut === value));
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Statut",
      dataIndex: "statut",
      key: "statut",
      render: (statut) => (
        <Tag color={statusColors[statut] || "default"}>{statut}</Tag>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Nom du patient",
      dataIndex: "nomPatient",
      key: "nomPatient",
    },
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
      render: (service) => (
        <Space size="small">
          <ClockCircleOutlined />
          <span>{service}</span>
          <MessageOutlined />
          <span>0</span>
          <HeartOutlined />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      {/* Top Header */}
      <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
        <Space>
          <MenuOutlined style={{ fontSize: 18 }} />
          <Title level={5} style={{ margin: 0 }}>
            Patient et demande
          </Title>
        </Space>
        <Space>
          <Button icon={<UnorderedListOutlined />}>List View</Button>
          <Button type="primary" icon={<PlusOutlined />}>
            Ajouter Patient et demande
          </Button>
        </Space>
      </Row>

      {/* Content */}
      <Row gutter={16}>
        {/* Sidebar */}
        <Col
          span={4}
          style={{ borderRight: "1px solid #f0f0f0", paddingRight: 12 }}
        >
          <Text strong>Filter By</Text>
          <Select
            placeholder="Assigné À"
            style={{ width: "100%", marginBottom: 8 }}
          />
          <Select
            placeholder="Établi par"
            style={{ width: "100%", marginBottom: 8 }}
          />

          <Text strong>Edit Filters</Text>
          <Select
            placeholder="Balises"
            style={{ width: "100%", marginBottom: 8 }}
          />
          <Button type="link" style={{ paddingLeft: 0, fontSize: 12 }}>
            Voir les étiquettes
          </Button>

          <Divider style={{ margin: "12px 0" }} />

          <Text strong>Save Filter</Text>
          <Input placeholder="Nom du filtre" size="small" />
        </Col>

        {/* Table + Filters */}
        <Col span={20}>
          <Row
            justify="space-between"
            align="middle"
            style={{
              marginBottom: 16,
              background: "#f9f9f9",
              padding: "8px 16px",
              borderRadius: 8,
              border: "1px solid #e0e0e0",
            }}
          >
            <Space>
              <Input placeholder="ID" style={{ width: 120 }} />
              <Select
                placeholder="Statut"
                style={{ width: 150 }}
                onChange={handleFilterChange}
              >
                {Object.keys(statusColors).map((status) => (
                  <Option key={status} value={status}>
                    {status}
                  </Option>
                ))}
              </Select>
              <Tag
                color="default"
                closable
                onClose={(e) => {
                  e.preventDefault(); // prevent auto close
                  console.log("Filter closed");
                }}
                icon={<FilterOutlined />}
                style={{
                  borderRadius: "16px",
                  padding: "4px 12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Filtre
              </Tag>
            </Space>
            <Text type="secondary">
              Dernière Mise à Jour : <strong>{filteredData.length} sur {rawData.length}</strong>
            </Text>
          </Row>

          <Table
            columns={columns}
            dataSource={filteredData.map((item, index) => ({
              ...item,
              key: index,
            }))}
            pagination={{ pageSize: 10 }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default App;
