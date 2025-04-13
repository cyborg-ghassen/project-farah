import React, { useState } from "react";
import { Table, Button, Empty, Input, Space } from "antd";
import { SettingOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";

function App() {
  const [foreignBodyRows, setForeignBodyRows] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [editingCell, setEditingCell] = useState(null); // { rowIndex, colIndex }
  const [isEditingAll, setIsEditingAll] = useState(false);

  const columnTitles = [
    "Sonde vésical",
    "Sonde de vésicostomie",
    "Sonde de néphrostomie",
    "KT périphérique",
    "KT jugulaire",
  ];

  const addForeignBodyRow = () => {
    const newRow = {
      key: Date.now(),
      id: foreignBodyRows.length + 1,
      values: [...columnTitles], // Placeholder values
    };
    setForeignBodyRows([...foreignBodyRows, newRow]);
  };

  const handleValueChange = (rowIndex, colIndex, value) => {
    const updated = [...foreignBodyRows];
    updated[rowIndex].values[colIndex] = value;
    setForeignBodyRows(updated);
  };

  const saveAllEdits = () => {
    setIsEditingAll(false);
    setEditingCell(null);
  };

  const columns = [
    {
      title: "No.",
      dataIndex: "id",
      key: "id",
      render: (text) => <strong>{text}</strong>,
    },
    ...columnTitles.map((title, colIndex) => ({
      title,
      key: `col-${colIndex}`,
      render: (_, record, rowIndex) => {
        const isEditingSingle =
          editingCell &&
          editingCell.rowIndex === rowIndex &&
          editingCell.colIndex === colIndex;

        const isEditing = isEditingAll || isEditingSingle;

        if (isEditing) {
          return (
            <Input
              autoFocus={isEditingSingle}
              value={record.values[colIndex]}
              onChange={(e) =>
                handleValueChange(rowIndex, colIndex, e.target.value)
              }
              onBlur={() => {
                if (isEditingSingle) setEditingCell(null);
              }}
              onPressEnter={(e) => {
                handleValueChange(rowIndex, colIndex, e.target.value);
                if (isEditingSingle) setEditingCell(null);
              }}
              size="small"
            />
          );
        }

        const value = record.values[colIndex];
        const isPlaceholder = value === title;

        return (
          <span
            style={{
              color: isPlaceholder ? "gray" : "black",
              cursor: "pointer",
            }}
            onClick={() => setEditingCell({ rowIndex, colIndex })}
          >
            {value}
          </span>
        );
      },
    })),
    {
      title: <SettingOutlined />,
      key: "edit-action",
      render: () => (
        <Space>
          {!isEditingAll ? (
            <EditOutlined
              style={{ color: "#1890ff", fontSize: 18, cursor: "pointer" }}
              onClick={() => setIsEditingAll(true)}
            />
          ) : (
            <SaveOutlined
              style={{ color: "green", fontSize: 18, cursor: "pointer" }}
              onClick={saveAllEdits}
            />
          )}
        </Space>
      ),
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => {
      setSelectedRowKeys(selectedKeys);
    },
  };

  return (
    <div style={{ padding: 10 }}>
      <Table
        columns={columns}
        dataSource={foreignBodyRows}
        rowSelection={rowSelection}
        pagination={false}
        locale={{
          emptyText: (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="Aucune Donnée"
            />
          ),
        }}
        bordered
      />
      <Button
        type="primary"
        onClick={addForeignBodyRow}
        style={{ marginTop: 16 }}
      >
        Add Row
      </Button>
    </div>
  );
}

export default App;
