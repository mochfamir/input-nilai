import React, { useEffect } from "react";
import { Link } from "@inertiajs/inertia-react";
import { Layout as Wrapper, Menu } from "antd";

const { Header, Footer } = Wrapper;

export default function Layout({ App, props }) {
    return (
        <Wrapper className="layout">
            <Header style={{backgroundColor: '#00AFF0'}}>
                <Menu
                    className="menu"
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["/"]}
                    items={[
                        {
                            label: <Link href="/">Home</Link>,
                            key: "/",
                        },
                        {
                            label: <Link href="/input">Input Mahasiswa</Link>,
                            key: "/upload",
                        },
                    ]}
                ></Menu>
            </Header>
            <div style={{ minHeight: "70vh", marginTop: '20px' }}>
                <App {...props} />
            </div>
            <Footer className="footer">
                <span>Binus ©2023 Created by Team 4</span>
            </Footer>
        </Wrapper>
    );
}
