import { LogoutOutlined, RetweetOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import adminAuth from '../../../../services/admin/auth.service';
import ChangePasswordModal from '../../modal/change-password';

const AdminManage = (props) => {
    const [admin, setAdmin] = useState({});
    const ref = useRef();
    const getCurrent = () => {
        adminAuth.getCurrent({}, (res) => {
            setAdmin(res);
        });
    }
    useEffect(() => {
        getCurrent();
    }, []);
    const menu = () => {
        return (
            <Menu>
                <Menu.Item key={'1'}>
                    <div onClick={() => {
                        ref.current.showModal()
                    }}>
                        <RetweetOutlined /> Change password
                    </div>
                </Menu.Item>
                <Menu.Item key={'2'}>
                    <Link to={'/admin/setting'}>
                        <SettingOutlined /> Setting
                    </Link>
                </Menu.Item>
                <Menu.Item key={'3'} style={{ background: '#FF4D4F' }}>
                    <div
                        onClick={() => { window.location.replace("/admin/login"); }}>
                        <LogoutOutlined /> Logout
                    </div>
                </Menu.Item>
            </Menu>
        )
    };
    return (
        <>
            <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
                <Button {...props}>{admin?.username}</Button>
            </Dropdown>
            <ChangePasswordModal ref={ref} />
        </>

    )
};

export default AdminManage;