/* eslint-disable array-callback-return */
import { Button, Image, Layout } from "antd";
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Setting from "../../../pages/admin/admin-manager/setting";
import ListOrder from "../../../pages/admin/orderManage/list-order";
import AddProduct from "../../../pages/admin/productManage/addProduct";
import ListProduct from "../../../pages/admin/productManage/listProduct";
import TagManager from "../../../pages/admin/tagManage";
import ListCustomer from "../../../pages/admin/userManage/list-user";
import AdminManager from "./admin-manager";
import BreadcrumbCustomer from "./breadcrumb";
import MenuSide from "./menu-side";
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
                    width={255}
                >
                    <div className="logo" style={{ border: '10px solid #001529' }}>
                        <Image
                            src="/images/logo.png" alt="logo"
                            preview={false}
                        />
                    </div>
                    <MenuSide />
                </Sider>
                <Layout className="site-layout" style={{ overflowY: "auto" }}>
                    <Header className="site-layout-background"
                        style={{ padding: 0, paddingRight: '10px', background: '#001529' }}
                    >
                        <div style={{ textAlign: 'end' }}>
                            <Button
                                style={{ marginRight: '10px' }}
                                onClick={() => { window.location.replace("/"); }}
                            >
                                Goto shop
                            </Button>
                            <AdminManager />
                        </div>
                    </Header>
                    <Content style={{ margin: "0 16px" }}>
                        <BreadcrumbCustomer />
                        <div
                            className="site-layout-background"
                            style={{ padding: 14, minHeight: "calc(100vh - 70px)" }}
                        >
                            <Switch>
                                <Route path='/admin/logout' >
                                    <Redirect to={'/admin/login'} />
                                </Route>
                                <Route path='/admin/setting' >
                                    <Setting />
                                </Route>
                                <Route path='/admin/add-product' >
                                    <AddProduct />
                                </Route>
                                <Route path='/admin/list-product' >
                                    <ListProduct />
                                </Route>
                                <Route path='/admin/product/:id' >
                                    <AddProduct />
                                </Route>
                                <Route path='/admin/category-manager' >
                                    <TagManager />
                                </Route>
                                <Route path='/admin/list-order' >
                                    <ListOrder />
                                </Route>
                                <Route path='/admin/list-customer' >
                                    <ListCustomer />
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
