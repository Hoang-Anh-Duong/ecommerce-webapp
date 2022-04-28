import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Input, Row, Col, Button, Form, InputNumber, Popconfirm } from 'antd';
import productService from "../../../../services/admin/product.service";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ListProduct = () => {
    const perPage = 20;
    const defaultPage = 1;
    const columns = [
        {
            title: 'Stt',
            dataIndex: 'stt',
            key: 'stt',
            render: text => <a>{text}</a>,
        }, ,
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'Total',
        },
        {
            title: 'Tag',
            key: 'tag',
            dataIndex: 'tag',
            render: tag => (
                <>
                    {tag == null ?
                        <Tag color="blue" key={tag}>Unknow</Tag> :
                        <Tag color="blue" key={tag}>{tag}</Tag>
                    }
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button
                        size="small"
                        type='primary'
                        style={{ background: '#00ff1d', border: 'none' }}
                    >
                        <Link to={'/admin/product/' + record.id}><EditFilled /></Link>
                    </Button>
                    <Popconfirm
                        title="Are you sure?"
                        onConfirm={() => {
                            productService.deleteProduct(record.id, (res) => getAllProduct());
                        }}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button
                            className='customer-delete-btn'
                            size='small'
                            danger
                            type='primary'
                        >
                            <DeleteFilled />
                        </Button>
                    </Popconfirm>
                </Space >
            ),
        },
    ]
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(1);
    const [paginationSearch, setPaginationSearch] = useState({
        page: defaultPage,
        perPage: perPage,
    })
    const [form] = Form.useForm();

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };

    useEffect(() => {
        getAllProduct();
    }, [])

    const getAllProduct = () => {
        setLoading(true);
        const search = {
            ...paginationSearch,
            name: form.getFieldValue('name'),
            category: form.getFieldValue('category'),
            minPrice: form.getFieldValue('minPrice'),
            maxPrice: form.getFieldValue('maxPrice'),
            minTotal: form.getFieldValue('minTotal'),
            maxTotal: form.getFieldValue('maxTotal'),
        }
        productService.getAll(search,
            (res) => {
                const records = res.rows;
                const data = records.map(({ id, name, price, total, Category }, index) => (
                    {
                        key: index,
                        id: id,
                        stt: (paginationSearch.page - 1) * perPage + index + 1,
                        name: name,
                        price: price,
                        total: total,
                        tag: Category?.name,
                    }
                ));
                setCount(res.count);
                setDataSource(data);
            }
        ).finally(
            () => setLoading(false)
        );
    }

    const pagination = {
        pageSize: perPage,
        total: count,
        onChange: (page, pageSize) => {
            paginationSearch.page = page;
            setPaginationSearch(paginationSearch);
            getAllProduct();
        }
    }

    const clearSeach = () => {
        form.resetFields();
    }

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <Form
                    form={form}
                    onFinish={getAllProduct}
                >
                    <Row>
                        <Col span={8} style={{ paddingRight: '20px' }}>
                            <Form.Item
                                label="NAME"
                                name="name"
                            >
                                <Input placeholder="input name product" />
                            </Form.Item>
                        </Col>
                        <Col span={8} style={{ paddingRight: '20px' }}>
                            <Form.Item
                                label="MIN PRICE"
                                name="minPrice"
                                layout=""
                            >
                                <InputNumber min={0} style={{ width: '100%' }} placeholder="input min price" />
                            </Form.Item>
                        </Col>
                        <Col span={8} >
                            <Form.Item
                                label="MAX PRICE"
                                name="maxPrice"
                            >
                                <InputNumber min={0} style={{ width: '100%' }} placeholder="input max price" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} style={{ paddingRight: '20px' }}>
                            <Form.Item
                                label="CATEGORY"
                                name="category"
                            >
                                <Input placeholder="input category" />
                            </Form.Item>
                        </Col>
                        <Col span={8} style={{ paddingRight: '20px' }}>
                            <Form.Item
                                label="MIN TOTAL"
                                name="minTotal"
                            >
                                <InputNumber min={0} style={{ width: '100%' }} placeholder="input min total" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="MAX TOTAL"
                                name="maxTotal"
                            >
                                <InputNumber min={0} style={{ width: '100%' }} placeholder="input max total" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <div style={{ width: '100%', textAlign: 'end' }}>
                        <Form.Item >
                            <Button style={{ marginRight: '10px' }}
                                type="primary"
                                onClick={clearSeach}
                            >
                                Clear
                            </Button>
                            <Button type="primary" htmlType="submit">Search</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
            <Table
                rowSelection={{
                    ...rowSelection,
                }}
                dataSource={dataSource}
                columns={columns}
                pagination={pagination}
                loading={loading}
            />;
        </div>
    )
}

export default ListProduct;