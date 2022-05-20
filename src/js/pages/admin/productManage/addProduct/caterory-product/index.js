import { Button, Col, Divider, Empty, Form, Input, Pagination, Radio, Row, Space, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import tagService from '../../../../../services/admin/tag.service';
const { Search } = Input;

const FormCategoryProduct = (props) => {
    const {
        setCategory,
        formCategory,
        category
    } = props

    let nameSearch = '';
    const [isLoadingCategory, setIsLoadingCategory] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(0);
    const [listCategory, setListCategory] = useState([]);

    useEffect(() => {
        getTags(1);
    }, [])

    const onChange = (e) => {
        setCategory(e.target.value);
    };

    const searchCategory = (value) => {
        nameSearch = value;
        getTags(1);
    }

    const addTag = () => {
        tagService.addTag({ name: formCategory.getFieldValue('name') },
            (res) => {
                getTags(1);
                formCategory.resetFields();
            }
        );
    }

    const getTags = (page = 1) => {
        setCurrentPage(page);
        setIsLoadingCategory(true);
        tagService.searchCategory({
            page: page,
            perPage: 5,
            name: nameSearch,
        },
            (res) => {
                setCount(res.count);
                setListCategory(res.rows);
                setIsLoadingCategory(false);
            },
            () => setIsLoadingCategory(false),
        );
    }

    return (
        <div>
            <Row
                style={{
                    paddingBottom: 10,
                    fontWeight: 'bold'
                }}
            >
                <label>CATEGORY</label>
                <Divider style={{ margin: 3 }} />
            </Row>
            <Row>
                <Col span={14} style={{ paddingRight: "10px", borderRight: "1px solid #00214080" }}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        onSearch={searchCategory}
                    />
                    {isLoadingCategory ? <Spin /> :
                        <div style={{ minHeight: '100px' }}>
                            {listCategory.length !== 0 ? <Radio.Group onChange={onChange} value={category} style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                <Space direction="vertical" defaultChecked={'0'}>
                                    {
                                        listCategory.map(item =>
                                            <Radio key={item.id} value={item.id}>{item.name}</Radio>
                                        )
                                    }
                                </Space>
                            </Radio.Group> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
                        </div>
                    }
                    <Pagination
                        simple
                        defaultCurrent={1}
                        current={currentPage}
                        pageSize={5}
                        total={count}
                        style={{ textAlign: 'end' }}
                        onChange={(page, pageSize) => {
                            getTags(page)
                        }}
                    />
                </Col>
                <Col span={10} style={{ paddingLeft: '10px' }}>
                    <Form
                        layout='vertical'
                        form={formCategory}
                        onFinish={addTag}
                    >
                        <Form.Item
                            label="NAME TAG"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ]}
                        >
                            <Input placeholder="input placeholder" />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default FormCategoryProduct;