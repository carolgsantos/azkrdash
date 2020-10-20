import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    HomeOutlined,
    TeamOutlined,
    ClusterOutlined
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

function ThemeLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => setCollapsed(!collapsed);
    return (
        <Layout className="menu-layout">
            <Sider
                id="sidemenu"
                collapsible
                trigger={null}
                collapsed={collapsed}
                onCollapse={toggle}
            >
                <div className="logo" />
                <Menu id="sidemenu" theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        Painel de Controle
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        Alunos
                    </Menu.Item>
                    <Menu.Item key="3" icon={<TeamOutlined />}>
                        Professores
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ClusterOutlined />}>
                        Turmas
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: "trigger",
                        onClick: toggle,
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
}

export default ThemeLayout;
