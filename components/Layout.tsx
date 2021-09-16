import React, { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout as LayoutAnt, Menu, Row } from "antd";
const { Header, Footer, Content } = LayoutAnt;

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Test Project</title>
      </Head>

      <LayoutAnt
        style={{
          minHeight: "100vh",
        }}
      >
        <Header>
          <Row justify="end">
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                onClick={() => {
                  localStorage.removeItem("isAuth");
                  router.push("/login");
                }}
              >
                Выйти
              </Menu.Item>
            </Menu>
          </Row>
        </Header>

        <Content
          style={{
            margin: "0 auto",
            maxWidth: "1220px",
            padding: "0 10px",
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©2021 Created with ❤ by Nikolai
        </Footer>
      </LayoutAnt>
    </>
  );
};

export default Layout;
