import React, {FC} from 'react';
import styled from "styled-components";
import {HiOutlineBell} from 'react-icons/hi'
import {BsPersonCircle} from 'react-icons/bs'

import Avatar from '../assets/img/brian-hughes.jpg'
import {Link} from "react-router-dom";
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import SidebarSelectComponent from "./SidebarSelectComponent";


const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #0F172A;
  color: #fff;
`

const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column;

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

`

const RouteTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
  line-height: 1.5;

  p {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .05em;
    text-transform: uppercase;
    color: #818CF8;
    margin: 0;
  }

  span {
    font-size: 11px;
    color: #7A7E89;
    font-weight: 600;
  }
`


const RouteLink = styled(Link)`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 10px;
  color: #9FA2AA;
  background: transparent;
  text-decoration: none;
  border-radius: 5px;
  margin-bottom: 4px;
  transition: all .1s ease;

  &:hover {
    transition: all .1s ease;
    background: #ffffff1f;
    color: #fff;
  }

  svg {
    width: 24px;
    height: 24px;
    margin-right: 18px;
  }

  p {
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    line-height: 14px;
    text-transform: capitalize;
  }
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
                <>logo</>
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
                <RouteTitle>
                    <p>
                        dashboards
                    </p>
                    <span>
                         Unique dashboard designs
                    </span>
                </RouteTitle>
                <RouteLink to="#">
                    <HiOutlineClipboardCheck />
                    <p>
                        project
                    </p>
                </RouteLink>
                <RouteLink to="#">
                    <HiOutlineClipboardCheck />
                    <p>
                        project
                    </p>
                </RouteLink>
                <RouteLink to="#">
                    <HiOutlineClipboardCheck />
                    <p>
                        project
                    </p>
                </RouteLink>
            </RouteElement>
            <RouteElement>
                <RouteTitle>
                    <p>
                        applications
                    </p>
                    <span>
                          Custom made application designs
                    </span>
                </RouteTitle>
                <RouteLink to="#">
                    <HiOutlineClipboardCheck />
                    <p>
                        project
                    </p>
                </RouteLink>
                {/*<SidebarSelectComponent />*/}
            </RouteElement>
        </SidebarHeader>
    </Main>;
};

export default DashboardSidebar;
