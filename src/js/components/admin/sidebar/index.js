/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Layout } from "antd";
import MenuSide from "./menu-side";
import BreadcrumbCustomer from "./breadcrumb";
import AddProduct from "../../../pages/admin/productManage/addProduct";
import ListProduct from "../../../pages/admin/productManage/listProduct";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import TagManager from "../../../pages/admin/tagManage";
import ListOrder from "../../../pages/admin/orderManage/list-order";
import ListCustomer from "../../../pages/admin/userManage/list-user";
const { Header, Content, Footer, Sider } = Layout;

const SideBar = () => {

    const [data, setData] = useState({
        collapsed: false,
    });

    const onCollapse = (collapsed) => {
        setData({ collapsed });
    };

    return (
        <div>
            <Layout style={{ height: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={data.collapsed}
                    onCollapse={onCollapse}
                >
                    <div className="logo" />
                    <MenuSide />
                </Sider>
                <Layout className="site-layout" style={{ overflowY: "auto" }}>
                    {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
                    <Content style={{ margin: "0 16px" }}>
                        <BreadcrumbCustomer />
                        <div
                            className="site-layout-background"
                            style={{ padding: 14, minHeight: "calc(100vh - 70px)" }}
                        >
                            <Switch>
                                <Route path='/admin/add-product' >
                                    <AddProduct/>
                                </Route>
                                <Route path='/admin/list-product' >
                                    <ListProduct/>
                                </Route>
                                <Route path='/admin/product/:id' exact >
                                    <AddProduct/>
                                </Route>
                                <Route path='/admin/category-manager' >
                                    <TagManager/>
                                </Route>
                                <Route path='/admin/list-order' >
                                    <ListOrder/>
                                </Route>
                                <Route path='/admin/list-customer' >
                                    <ListCustomer/>
                                </Route>
                            </Switch>
                        </div>
                    </Content>
                    {/* <Footer style={{ textAlign: "center" }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer> */}
                </Layout>
            </Layout>
        </div>

    );
};


export default SideBar;
