
import { Col, Form, Input, InputNumber, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';

const FormInfoProduct = (props) => {

    const {
        form
    } = props;

    return (
        <Form
            layout='vertical'
            form={form}
        >
            <Form.Item
                label="NAME PRODUCT"
                name="name"
                min={0}
                rules={[
                    {
                        required: true,
                        message: 'Input something!',
                    },
                ]}
            >
                <Input placeholder="input name product" />
            </Form.Item>
            <Form.Item
                label="DESCRIPTION"
                name="descript"
                rules={[
                    {
                        required: true,
                        message: 'Input something!',
                    },
                ]}
            >
                <TextArea rows={9} placeholder="input description about product" />
            </Form.Item>
            <Row>
                <Col span={16} style={{ paddingRight: '10px' }}>
                    <Form.Item
                        label="PRICE (VNĐ)"
                        name="price"
                        rules={[
                            {
                                required: true,
                                message: 'Input something!',
                            },
                        ]}
                    >
                        <InputNumber min={0}
                            style={{ width: '100%' }}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            placeholder="input price of product" />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="TOTAL"
                        name="total"
                        rules={[
                            {
                                required: true,
                                message: 'Input something!',
                            },
                        ]}
                    >
                        <InputNumber min={0} style={{ width: '100%' }} placeholder="input placeholder" />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default FormInfoProduct;