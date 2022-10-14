import React, {FC} from 'react';
import styled from "styled-components";
import {Outlet} from 'react-router-dom'


const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100% - 60px);
  height: 100%;
`


const ContentLayout: FC = (): JSX.Element => {
    return (
        <Main>
            <Outlet />
        </Main>
    );
};

export default ContentLayout;