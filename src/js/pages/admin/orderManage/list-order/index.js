import { Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import orderService from "../../../../services/admin/order.service";

const ListOrder = () => {
    const perPage = 20;
    let priceTotalSort = false;
    const columns = [
        {
            title: 'Stt',
            dataIndex: 'stt',
            key: 'stt',
            render: text => <a>{text}</a>,
        }, ,
        {
            title: 'Name',
            dataIndex: 'fullname',
            key: 'fullname',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Price total',
            key: 'priceTotal',
            dataIndex: 'priceTotal',
            sorter: (a, b) => {
                priceTotalSort = !priceTotalSort
            },
            render: text => <a>{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">

                </Space >
            ),
        },
    ]
    const [dataSource, setDataSource] = useState([]);
    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(true);
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };

    const pagination = {
        pageSize: perPage,
        total: count,
        onChange: (page, pageSize) => {
            getListOrder();
        }
    }

    useEffect(() => {
        getListOrder();
    }, [])

    const getListOrder = () => {
        console.log({priceTotalSort})
        const searchData = {
            status: null,
            minPrice: null,
            maxPrice: null,
            startDate: null,
            endDate: null,
            page: 0,
            perPage: perPage,
            priceTotalSort: priceTotalSort,
        }
        orderService.searchAll(searchData,
            (res) => {
                console.log(res);
                const listOrder = res.rows;
                const mapListOrder = listOrder.map(
                    ({ User, ...notUser }, index) => (
                        {
                            ...notUser,
                            fullname: User.fullname,
                            phone: User.phone,
                            address: User.address,
                            key: index,
                            stt: index + 1
                        }
                    )
                );
                console.log(mapListOrder)
                setDataSource(mapListOrder)
                setLoading(false)
            }
        )
    }

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
        getListOrder();
    }

    return (
        <div>
            list order
            <Table
                rowSelection={{
                    ...rowSelection,
                }}
                dataSource={dataSource}
                columns={columns}
                pagination={pagination}
                loading={loading}
                onChange={onChange}
            />;
        </div>
    )
}

export default ListOrder;