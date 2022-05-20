import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, InputNumber, Popconfirm, Row, Space, Table, Spin } from 'antd';
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useRef, useState } from "react";
import ListImage from "../../../components/admin/list-image";
import EditCategoryModal from "../../../components/admin/modal/edit-category-modal";
import UploadImageModal from "../../../components/admin/modal/upload-image-modal";
import tagService from "../../../services/admin/tag.service";

const TagManager = () => {
    const [dataSource, setDataSource] = useState([]);
    const [imageTag, setImageTag] = useState([]);
    const [formCategory] = Form.useForm();
    const [formSearch] = Form.useForm();
    const perPage = 10;
    const [count, setCount] = useState(1);
    const editModalRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const columns = [
        {
            title: 'Stt',
            dataIndex: 'stt',
            key: 'stt',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Total',
            dataIndex: 'totalProduct',
            key: 'totalProduct',
            render: text => <div>{text}</div>,
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
                        onClick={() => {
                            editModalRef.current.showModal(record)
                        }}>
                        <EditFilled />
                    </Button>
                    <Popconfirm
                        title={`Are you sure？Now, this caterory have ${record.totalProduct} products!`}
                        onConfirm={() => deleteCategory(record.id)}
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
                </Space>
            ),
        },
    ]

    useEffect(() => {
        getAllTag(1);
    }, [])

    const onFinish = (value) => {
        const tag = {
            name: value.name,
            descript: value.descript,
            image: imageTag[0]
        }
        tagService.addTag(tag, (res) => {
            clearForm();
            setImageTag([]);
            getAllTag(1);
        })
    }

    const getAllTag = (page = 1) => {
        const search = {
            page: page,
            perPage: perPage,
            name: formSearch.getFieldValue('name'),
            minTotal: formSearch.getFieldValue('minTotal'),
            maxTotal: formSearch.getFieldValue('maxTotal'),
        }
        setIsLoading(true);
        tagService.searchCategory(search,
            (res) => {
                const categorys = res.rows;
                setCount(res.count);
                let data = categorys.map((item, index) => ({
                    key: index + 1,
                    stt: index + 1,
                    ...item
                }))
                setDataSource(data);
                setIsLoading(false);
            },
            () => setIsLoading(false)
        );
    }

    const deleteCategory = (id) => {
        tagService.deleteTag({ id: id },
            (res) => {
                getAllTag(1);
            }
        )
    }

    const getImage = (image) => {
        setImageTag(image);
    }

    const clearForm = () => {
        formCategory.resetFields();
    }

    const pagination = {
        pageSize: perPage,
        total: count,
        onChange: async (page, pageSize) => {
            getAllTag(page);
        }
    }

    const onSearch = () => {
        getAllTag();
    }

    return (
        <div>
            <Row>
                <Col span={15} style={{ paddingRight: 5 }}>
                    <h2>List Category</h2>
                    <Form
                        form={formSearch}
                        layout="horizontal"
                        onFinish={onSearch}
                    >
                        <Row>
                            <Col span={19}>
                                <Row>
                                    <Form.Item
                                        label="NAME"
                                        name="name"
                                        style={{ width: '100%' }}
                                    >
                                        <Input placeholder="input name category" />
                                    </Form.Item>
                                </Row>
                                <Row>
                                    <Col span={12} style={{ paddingRight: '10px' }}>
                                        <Form.Item
                                            label="MIN TOTAL"
                                            name="minTotal"
                                        >
                                            <InputNumber style={{ width: '100%' }} placeholder="input min total" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            label="MAX TOTAL"
                                            name="maxTotal"
                                        >
                                            <InputNumber style={{ width: '100%' }} placeholder="input max total" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={5} >
                                <div style={{ width: '100%', textAlign: 'center' }}>
                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            onClick={() => formSearch.resetFields()}
                                        >
                                            Clear
                                        </Button>
                                    </Form.Item>
                                </div>
                                <div style={{ width: '100%', textAlign: 'center' }}>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">Search</Button>
                                    </Form.Item>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                    <div className='blue-border' style={{ marginBottom: 10 }}>
                        <Table dataSource={dataSource} columns={columns} pagination={pagination} loading={isLoading}></Table>
                    </div>
                </Col>
                <Col span={9} style={{ paddingLeft: 5 }}>
                    <h2>Add Category</h2>
                    <div className='blue-border' style={{ marginBottom: 10 }}>
                        <Form
                            layout='vertical'
                            form={formCategory}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label="NAME CATEGORY"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Input something!',
                                    },
                                ]}
                            >
                                <Input placeholder="input name category" />
                            </Form.Item>
                            <Form.Item
                                label="DESCRIPTION"
                                name="descript"
                            >
                                <TextArea rows={9} placeholder="input description about category" />
                            </Form.Item>
                            <Form.Item>
                                <div className='blue-border' style={{ marginBottom: 10 }}>
                                    <Row
                                        style={{
                                            paddingBottom: 10
                                        }}
                                    >
                                        <label>IMAGE CATEGORY</label>
                                        <Divider style={{ margin: 3 }} />
                                    </Row>
                                    <div>
                                        {imageTag.length > 0 && <ListImage
                                            listImage={imageTag}
                                            height={100}
                                            width={100}
                                            multiple={false}
                                            deleteFunction={(e) => {
                                                let newlist = imageTag.filter((value) => value.id !== e);
                                                setImageTag(newlist);
                                            }}
                                        />}
                                    </div>
                                    <UploadImageModal
                                        getImage={getImage}
                                        currentImages={imageTag}
                                        isMultipleSelect={false}
                                    />
                                </div>
                            </Form.Item>
                            <Form.Item style={{ textAlign: 'end' }}>
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
                <EditCategoryModal afterClose={() => getAllTag(1)} ref={editModalRef} />
            </Row>
        </div>
    )
}

export default TagManager;