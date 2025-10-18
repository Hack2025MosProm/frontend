import React from 'react';
import './style.scss'
import { Menu, Spin, type MenuProps } from 'antd';
import { BankOutlined, DashboardOutlined, LogoutOutlined, UploadOutlined } from '@ant-design/icons';
import { Link, Outlet, useLocation, } from 'react-router-dom';
import { useAuth, useUploadModal, } from '../providers';
import clsx from 'clsx';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

interface Props {
    className?: string;
    children?: any
}

type MenuItem = Required<MenuProps>['items'][number];

interface MenuItemConfig {
    key: string;
    label: string;
    icon: React.ReactNode;
    path?: string;
    danger?: boolean
    onClick?: () => void
}
export const MainLayout: React.FC<Props> = ({ }) => {
    const { logout } = useAuth();
    const location = useLocation();
    const { openUploadModal } = useUploadModal();

    const menuConfig: MenuItemConfig[] = [
        {
            key: 'dashboard',
            label: 'Дашборд',
            icon: <DashboardOutlined />,
            path: '/'
        },
        {
            key: 'organizations',
            label: 'Организации',
            icon: <BankOutlined />,
            path: '/organizations',
        },
        {
            key: 'upload',
            label: 'Загрузить файл',
            icon: <UploadOutlined />,
            onClick: openUploadModal,
        },
        {
            key: 'logout',
            label: 'Выйти',
            icon: <LogoutOutlined />,
            danger: true,
            onClick: () => logout(),
        }
    ];

    const createMenuItems = (config: MenuItemConfig[]): MenuItem[] => {
        return config.map(item => ({
            key: item.path ?? item.key,
            label: item.path ? <Link to={item.path}>{item.label}</Link> : item.label,
            icon: item.icon,
            onClick: item.onClick,
            danger: item.danger,
        })) as any[];
    };

    const menuItems = createMenuItems(menuConfig);

    const activeItem = menuConfig
        .filter(item => item.path && location.pathname.startsWith(item.path))
        .sort((a, b) => (b.path!.length - a.path!.length))[0];

    return (
        <div className="main-layout">
            <Spin spinning={false}>
                <Header />
                <div className='main-layout__content'>
                    <>
                        <aside className={clsx('main-sidebar')}>
                            <Menu
                                mode="inline"
                                theme={'light'}
                                items={menuItems}
                                selectedKeys={activeItem?.path ? [activeItem.path] : []}
                            />
                        </aside>

                        <div className='main-layout__body'>
                            <Outlet />
                        </div>
                    </>
                </div>
                <Footer />
            </Spin>
        </div>
    );
};

export default MainLayout;