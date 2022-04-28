import React, { useState, useEffect } from "react";
import { Row, Col, Table, Button, Input, Space, Radio } from 'antd';
import userService from "../../../services/admin/user.service";
import { AudioOutlined, CheckCircleTwoTone, MinusCircleTwoTone } from "@ant-design/icons";

const { Search } = Input;

const ListCustomer = () => {
    const stypeTable = {
        perPage: 20
    }
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isActiveSearch, setIsActiveSearch] = useState(null);
    const [textSearch, setTextSearch] = useState();
    const defaultRequest = {
        page: 0,
        perPage: stypeTable.perPage,
        isActive: null,
        textSearch: "",
    }
    const columns = [
        {
            title: 'Stt',
            dataIndex: 'stt',
            key: 'stt',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: text => <div>{text}</div>,
        },
        {
            title: 'User name',
            dataIndex: 'username',
            key: 'username',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Active',
            dataIndex: 'isActive',
            key: 'isActive',
            render: isActive => <div>
                {isActive ?
                    <CheckCircleTwoTone twoToneColor="#52c41a" /> :
                    <MinusCircleTwoTone twoToneColor="#ff2121" />}
            </div>,
        },
        {
            title: 'Create date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: text => <div>{text ? text : '-'}</div>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary" size="small">Detail</Button>
                </Space>
            ),
        },
    ]

    const onSearch = value => {
        setTextSearch(value);
        getAllCustomer({ textSearch: value, isActive: isActiveSearch });
    };

    const getAllCustomer = async (search = null) => {
        const request = {
            ...defaultRequest,
            ...search,
        }
        setLoading(true);
        await userService.getAll(request, (res) => {
            const users = res.rows;
            let data = users.map((item, index) => ({
                key: index + 1,
                stt: index + 1,
                ...item
            }));
            setDataSource(data);
        }).finally(() => { setLoading(false) });
    }

    useEffect(() => {
        getAllCustomer();
    }, [])

    const handleOption = ({ target: { value } }) => {
        setIsActiveSearch(value)
        getAllCustomer({ isActive: value, textSearch: textSearch });
    }

    return (
        <div>
            <Row>
                <Col span={24} style={{ paddingRight: 5 }}>
                    <h2>List Customer</h2>
                    <div style={{ marginBottom: 5 }}>
                        <Row>
                            <Col span={14}>
                                <Search
                                    placeholder="input search text"
                                    enterButton="Search"
                                    size="large"
                                    allowClear
                                    onSearch={onSearch}
                                /></Col>
                            <Col span={10} style={{ textAlign: "end" }}>
                                <Radio.Group size="large" onChange={handleOption} value={isActiveSearch} style={{ marginBottom: 3 }}>
                                    <Radio.Button value={null}>All</Radio.Button>
                                    <Radio.Button value={true}>Active</Radio.Button>
                                    <Radio.Button value={false}>InActive</Radio.Button>
                                </Radio.Group>
                            </Col>
                        </Row>
                    </div>
                    <div className='blue-border' style={{ marginBottom: 10, overflowX: 'auto' }}>
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                            pagination={{
                                pageSize: stypeTable.perPage
                            }}
                            loading={loading}
                        >
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ListCustomer;