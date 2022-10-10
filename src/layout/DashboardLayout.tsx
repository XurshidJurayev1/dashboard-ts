import React, {FC} from 'react';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardHeader from '../components/DashboardHeader';

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-family: Inter Var, sans-serif;
`;

const SideBar = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  width: 280px;
  position: absolute;
  top: 0;
  left: ${(props) => (props.isOpen ? '0px' : '-300px')};
  transition: all .3s ease-in-out;
`;

const Content = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-left: ${(props) => (props.isOpen ? '280px' : '0px')};
  transition: all .3s ease-in-out;
  background: #F1F5F9;
  min-height: 100vh;
`;

const DashboardLayout: FC = (): JSX.Element => {
    const isOpen = true;
    return (
        <Main>
            <SideBar isOpen={isOpen}>
                <DashboardSidebar />
            </SideBar>
            <Content isOpen={isOpen}>
                <DashboardHeader />
                <Outlet />
            </Content>
        </Main>
    );
};

export default DashboardLayout;
