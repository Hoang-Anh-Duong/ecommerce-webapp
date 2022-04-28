import React from 'react';
import { Menu } from "antd";
import {
    UserOutlined,
    TagsOutlined,
    ShoppingOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from 'react-router-dom';

const { SubMenu } = Menu;
const menu = [
    {
        key: "/admin/category-manager",
        title: "Category manager",
        icon: <TagsOutlined />,
    },
    {
        key: "product-manager",
        title: "Product manager",
        icon: <ShoppingOutlined />,
        subMenu: [
            {
                key: "/admin/add-product",
                title: "Add product",
            },
            {
                key: "/admin/list-product",
                title: "List product",
            }
        ],
    },
    {
        key: "order-manager",
        title: "Order manager",
        icon: <UserOutlined />,
        subMenu: [
            {
                key: "/admin/list-order",
                title: "List order",
            },
        ],
    },
    {
        key: "customer-manager",
        title: "Customer manager",
        icon: <UserOutlined />,
        subMenu: [
            {
                key: "/admin/list-customer",
                title: "List customer",
            },
        ],
    },
];

const MenuItem = (item) => {
    return (
        <Menu.Item
            key={item.key}
            icon={item.icon}    
        >
            <Link to={item.key}>{item.title}</Link>
        </Menu.Item>
    )
}

const MenuSide = () => {
    const location = useLocation();
    
    return (
        <Menu theme="dark" selectedKeys={[location.pathname]}  mode="inline" >
            {menu.map((item) =>
                item.subMenu && item.subMenu.length > 0 ? (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {item.subMenu.map((item) => MenuItem(item))}
                    </SubMenu>
                ) : (
                    MenuItem(item)
                )
            )}
        </Menu>
    );
};


export default MenuSide;