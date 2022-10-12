import React, {FC, useContext, useState} from 'react';
import styled from "styled-components";
import {HiOutlineMenu, HiOutlineChatAlt2} from 'react-icons/hi'
import {BsArrowsFullscreen, BsBookmark} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import {TbInbox} from 'react-icons/tb'
import {ReactComponent as Usa} from "../../assets/svg/US.svg";
import {ReactComponent as Tr} from "../../assets/svg/TR.svg";
import {useTranslation} from "react-i18next";
import SidebarContext from "../../hooks/SidebarContext";

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
  transition: all .1s ease;

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

const LangContainer = styled.div`
  position: relative;
`

const Language = styled(Icon)`



`

const SelectLang = styled.div<{ open: boolean }>`
  position: absolute;
  top: 40px;
  right: 0;
  display: ${props => props.open ? 'flex' : 'none'};
  flex-direction: column;
  padding: 8px 8px;
  border-radius: 5px;
  background: #fff;
  -webkit-box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.15);

`

const SelectLangItem = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 38px;
  padding: 0 14px;
  border-radius: 5px;
  transition: all .1s ease;
  margin: 0 0 4px;
  cursor: pointer;

  &:hover {
    transition: all .1s ease;
    background-color: #EAEDF1;
  }

  p {
    margin: 0;
    color: #1e293b;
    font-size: 14px;
  }

  svg {
    margin-right: 8px;
  }

`

interface IProps {
}


const DashboardHeader: FC<IProps> = (): JSX.Element => {
    const {i18n} = useTranslation();
    const {isOpen, setIsOpen} = useContext(SidebarContext)
    const [openLang, setOpenLang] = useState<boolean>(false)

    const changeLang = (lang: string): void => {
        i18n.changeLanguage(lang)
        setOpenLang(false)
    }
    console.log(isOpen)

    return <Main>
        <More onClick={() => setIsOpen(!isOpen)}>
            <HiOutlineMenu />
        </More>
        <RightSection>
            <LangContainer>
                <Language onClick={() => setOpenLang(!openLang)}>
                    <Usa />

                </Language>
                <SelectLang
                    open={openLang}>
                    <SelectLangItem onClick={() => changeLang('en')}>
                        <Usa />
                        <p>English</p>
                    </SelectLangItem>
                    <SelectLangItem onClick={() => changeLang('en')}>
                        <Tr />
                        <p>Turkish</p>
                    </SelectLangItem>

                </SelectLang>
            </LangContainer>
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
