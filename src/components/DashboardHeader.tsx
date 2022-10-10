import React, {FC} from 'react';
import styled from "styled-components";
import {HiOutlineMenu, HiOutlineChatAlt2} from 'react-icons/hi'
import {BsArrowsFullscreen, BsBookmark} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import {TbInbox} from 'react-icons/tb'

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 64px !important;
  background: #fff;
  -webkit-box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.15);


  svg {
    color: #64748B;
  }
`

const More = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all .1s ease;
  cursor: pointer;

  &:hover {
    transition: all .1s ease;
    background-color: #EAEDF1;
  }

  svg {
    width: 24px;
    height: 24px;
  }

`

const RightSection = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;

`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0 0 0 8px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  &:hover {
    transition: all .1s ease;
    background-color: #EAEDF1;
  }

  span {
    position: absolute;
    top: 02px;
    right: 4px;
    display: flex;
    font-size: 10px;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #4F46E5;
    color: #fff;
  }

  svg {
    width: 24px;
    height: 24px;
    color: #64748B;
  }

  svg#fullScreen {
    width: 20px;
    height: 20px;
  }

  //svg#search {
  //  width: 22px;
  //  height: 22px;
  //}

  svg#mark {
    width: 20px;
    height: 20px;
  }

`


const DashboardHeader: FC = (): JSX.Element => {
    return <Main>
        <More>
            <HiOutlineMenu />
        </More>
        <RightSection>
            <Icon>
                <BsArrowsFullscreen id="fullScreen" />
            </Icon>
            <Icon>
                <AiOutlineSearch id="search" />
            </Icon>
            <Icon>
                <BsBookmark id="mark" />
            </Icon>
            <Icon>
                <span>5</span>
                <TbInbox />
            </Icon>
            <Icon>
                <HiOutlineChatAlt2 />
            </Icon>
        </RightSection>
    </Main>;
};

export default DashboardHeader;
