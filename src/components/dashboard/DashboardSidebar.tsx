import React, {FC} from 'react';
import styled from "styled-components";
import {HiOutlineBell} from 'react-icons/hi'
import {BsPersonCircle} from 'react-icons/bs'

import Avatar from '../../assets/img/brian-hughes.jpg'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import SidebarSelectComponent from "./SidebarSelectComponent";

import {ReactComponent as Logo} from "../../assets/svg/logo.svg";
import RouteTitle from "./RouteTitle";
import RouteLink from "./RouteLink";


const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #0F172A;
  color: #fff;
  overflow-y: scroll;
`

const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column;

`

const LogoCom = styled.div`
  margin-left: 8px;
  width: 32px;
  height: 32px;

  svg {
    width: 100%;
    height: 100%;
  }
`

const SidebarHeaderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 40px;
      height: 40px;
      cursor: pointer;

      svg {
        width: 22px;
        height: 22px;
        color: #94A3b8;
      }

    }

    #admin {
      span {
        position: absolute;
        bottom: 6px;
        right: 6px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #22C55E;
      }
    }

    #notify {
      span {
        position: absolute;
        top: 5px;
        right: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #0d9488;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        font-size: 10px;
      }

      svg {
        width: 28px;
        height: 28px;
      }
    }


  }

`

const SidebarHeaderAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;

`

const AvatarImg = styled.div<{ img: string }>`
  width: 96px;
  height: 96px;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;

`

const AvatarText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px 0 0;
  font-weight: 500;
  line-height: 1.5;

  p {
    font-size: 14px;
    color: #fff;
    margin: 0;
  }

  span {
    font-size: 13px;
    color: #94A3b8;
    margin: 2px 0 0;
  }

`

const RouteElement = styled.div`
  display: flex;
  flex-direction: column;
  margin: 28px 0 0;
  padding: 0 16px;
  height: 100%;

`


const DashboardSidebar: FC = (): JSX.Element => {


    const notify = {
        status: true,
        count: 3
    }

    const adminStatus = true

    return <Main>
        <SidebarHeader>
            <SidebarHeaderItem>
                <LogoCom>
                    <Logo />
                </LogoCom>
                <div>
                    <div id="notify">
                        {
                            notify.status && <span>{notify.count}</span>
                        }
                        <HiOutlineBell />
                    </div>
                    <div id="admin">
                        {
                            adminStatus && <span id="online" />
                        }
                        <BsPersonCircle />
                    </div>
                </div>
            </SidebarHeaderItem>
            <SidebarHeaderAvatar>
                <AvatarImg img={Avatar} />
                <AvatarText>
                    <p>
                        Brian Hughes
                    </p>
                    <span>
                        hughes.brian@company.com
                    </span>
                </AvatarText>
            </SidebarHeaderAvatar>
            <RouteElement>
                <RouteTitle title="dashboards" subTitle=" Unique dashboard designs " />
                <RouteLink path="/dashboard/content-layout" name="contentLayout" Icon={HiOutlineClipboardCheck} />
                <RouteLink path="#" name="project" Icon={HiOutlineClipboardCheck} />
                <RouteLink path="#" name="project" Icon={HiOutlineClipboardCheck} />

            </RouteElement>
            <RouteElement>
                <RouteTitle title="applications" subTitle=" Custom made application designs " />
                <RouteLink path="#" name="project" Icon={HiOutlineClipboardCheck} />

                <SidebarSelectComponent />
                <SidebarSelectComponent />
            </RouteElement>
        </SidebarHeader>
    </Main>;
};

export default DashboardSidebar;
