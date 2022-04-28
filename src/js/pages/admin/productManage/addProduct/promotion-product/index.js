
import { DatePicker, Form, InputNumber, Switch } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
const { RangePicker } = DatePicker;

const FormPromotion = (props) => {
    const {
        formPromotion,
    } = props;
    const [isPercentSale, setIsPercentSale] = useState(false);
    const disabledDate = (current) => {
        return current && current < moment().endOf('day');
    }
    return (
        <Form
            form={formPromotion}
        >
            <Form.Item
                label="DATE SALE"
                name="dateSale"
                rules={[
                    {
                        required: true,
                        message: 'Input something!',
                    },
                ]}
            >
                <RangePicker disabledDate={disabledDate} style={{ width: '100%' }} />
            </Form.Item>
            <div>
                <p>Switch it to change type sale
                    <Switch
                        defaultChecked={isPercentSale}
                        size={'small'}
                        style={{ marginLeft: '10px' }}
                        onChange={
                            (checked) => {
                                if (checked) {
                                    formPromotion.setFieldsValue({ priceSale: null })
                                }
                                else {
                                    formPromotion.setFieldsValue({ percentSale: null })
                                }
                                setIsPercentSale(checked);
                            }
                        }
                    />
                </p>
            </div>
            {isPercentSale ?
                <Form.Item
                    label="PERCENT SALE (%)"
                    name="percentSale"
                    rules={[
                        {
                            required: true,
                            message: 'Input something!',
                        },
                    ]}
                >
                    <InputNumber
                        min={0}
                        max={100}
                        style={{ width: '100%' }}
                        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        placeholder="input placeholder" />
                </Form.Item> :
                <Form.Item
                    label="PRICE SALE (VNĐ)"
                    name="priceSale"
                    rules={[
                        {
                            required: true,
                            message: 'Input something!',
                        },
                    ]}
                >
                    <InputNumber
                        min={0}
                        style={{ width: '100%' }}
                        formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        placeholder="input placeholder" />
                </Form.Item>
            }
        </Form>
    );
};

export default FormPromotion;