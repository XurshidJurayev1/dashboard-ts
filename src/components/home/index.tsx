import React, { useState } from 'react'
import * as M from '@mui/material'
import styled from 'styled-components'
import {HiOutlineMenu, HiSearch, HiTrash} from 'react-icons/hi'


enum TabTypes {
    "all" = "all",
    "signed" = "signed",
    "unsigned" = "unsigned",
    "new" = "new"
}

const Tabs = styled(M.Tabs)`
    background-color: #FFFFFF;
    border-bottom: 1px solid #DDDDDD;
`

const Tab = styled(M.Tab)`
`

const TabContent = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    & > div {
        height: 24px;
        padding: 0 6px;
        display: flex;
        align-items: center;
        background-color: ${(props) => props.color ? props.color : "red"};
        color: white;
        border-radius: 12px;
        font-weight: 700;
        font-size: 12px;
        line-height: 12px;
    }
`

const SearchBar = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  width: 280px;
  position: absolute;
  top: 0;
  left: ${(props) => (props.isOpen ? '0px' : '-300px')};
  transition: all .3s ease-in-out;
  height: 100%;
  background-color: #FFFFFF;
  border-right: 1px solid #DDDDDD;

  .header {
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    color: #6f6fdf;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-family: Inter Var, sans-serif;
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

const ContentTable = styled.div<{ isOpen: boolean }>`
    width: 400px;
    height: 100%;
    background-color: #FFFFFF;
    border-right: 1px solid #DDDDDD;
`

const ContentTableHeader = styled.div`
    height: 60px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    background-color: #F1F5F9;

    .title {
        text-transform: uppercase;
        font-weight: 700;
        color: #777777;
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

const TableData = styled.div`
    padding: 10px 15px;
    border-bottom: 1px solid #AAAAAA;

    .header {
        margin-bottom: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        
        .id {
            font-size: 16px;
        }
    
        .date {
            font-size: 14px;
            color: grey;
        }
    }

    .body {
        margin-bottom: 8px;
        display: flex;
        flex-direction: column;

        .name {
            margin-bottom: 10px;
            font-size: 14px;
            opacity: 0.8;
            font-weight: 600;
        }
    }
`

const NameButton = styled(M.Button)`
    color: #444444 !important;
    border-color: #222222 !important;
`

interface StyleProps {
    mb: number;
    color: string;
}

const FormGroup = styled.div`
    height: 60px;
    padding: 0 10px;
    margin-bottom: ${(props: Partial<StyleProps>) => props.mb ?? 0 }px;
    display: flex;
    align-items: center;
    position: relative;

    svg {
        position: absolute;
        width: 24px;
        height: 24px;
        left: 20px;
        transform: translateX(50%);
    }
`;

const FormInput = styled.input`
    height: 40px;
    width: 100%;
    padding: 0 10px 0 50px;
    border-radius: 20px;
    font-size: 16px;
    outline: none;
`;

const FormButton = styled.button`
    padding: 0 30px;
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    color: ${(props: Partial<StyleProps>) => props.color ?? "inherit" };
    margin-bottom: ${(props: Partial<StyleProps>) => props.mb ?? 0 }px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;

    svg {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }
`

const Home = () => {
    const [ isOpen, setIsOpen ] = useState(true)
    const [ tab, setTab ] = useState<TabTypes>(TabTypes.all)

    const handleChangeTabs = (event: React.SyntheticEvent, newValue: TabTypes) => {
        setTab(newValue)
    }

    return (
        <div>
            <Main>
                <SearchBar isOpen={ isOpen }>
                    <div className="header">Qidirish</div>
                    <form>
                        <FormGroup>
                            <FormInput
                                placeholder='Kirish raqami'
                            />
                            <HiSearch />
                        </FormGroup>
                        <FormGroup>
                            <FormInput 
                                placeholder="Kalit so'zi"
                            />
                            <HiSearch />
                        </FormGroup>
                        <FormGroup>
                            <FormInput
                                placeholder='Qisqacha mazmuni'
                            />
                            <HiSearch />
                        </FormGroup>
                        <FormGroup mb={20}>
                            <FormInput 
                                placeholder="Bajarish muddati"
                            />
                            <HiSearch />
                        </FormGroup>
                        <FormButton type='button' color='#6f6fdf' mb={20}>
                            <HiSearch />
                            <span>Qidirish</span>
                        </FormButton>
                        <FormButton type='button' color='#545461'>
                            <HiTrash />
                            <span>Qidiruvni tozalash</span>
                        </FormButton>
                    </form>
                </SearchBar>

                <Content isOpen={ isOpen }>
                    <Tabs
                        value={ tab }
                        onChange={ handleChangeTabs }
                    >
                        {/* buni backenddan keladigan malumotga qarab map qilsak bo'ladi */}
                        <Tab label={
                            <TabContent color='#9C27B0'>Shartnomalar <div>12</div> </TabContent>
                        } value="all" />
                        <Tab label={
                            <TabContent color='#007FFF'>Imzolangan <div>12</div> </TabContent>
                        } value="signed" />
                        <Tab label={
                            <TabContent color='#757575'>Imzolanmagan <div>12</div> </TabContent>
                        } value="unsigned" />
                        <Tab label={
                            <TabContent color='green'>yangi <div>12</div> </TabContent>
                        } value="new" />
                    </Tabs>

                    <ContentTable isOpen={ true }>
                        <ContentTableHeader>
                            <More onClick={() => setIsOpen(!isOpen)}>
                                <HiOutlineMenu />
                            </More>
                            <span className="title">Topshiriqlar ro'yhati</span>
                        </ContentTableHeader>

                        <M.Box sx={{ overflowY: "auto", height: "100%" }}>
                            {
                                new Array(12).fill(1).map((el, index) => (
                                    <TableData key={"table-data" + index} >
                                        <div className='header'>
                                            <span className='id'>OSI218301238</span>
                                            <span className='date'>14 oktabr 2022 20:20</span>
                                        </div>
                                        <div className='body'>
                                            <span className="name">Bildirgi topshirig'i</span>
                                            <span className="content">O'rnatilgan tartibda imzolash uchun topshirildi</span>
                                        </div>
                                        <NameButton variant="outlined" size="small">M.Z.Maxmudova</NameButton>
                                    </TableData>
                                ))
                            }    
                        </M.Box>                        
                    </ContentTable>
                </Content>
            </Main>

        </div>
    )
}

export default Home