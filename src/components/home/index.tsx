import * as M from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'

enum TabTypes {
    "all" = "all",
    "signed" = "signed",
    "unsigned" = "unsigned",
    "new" = "new"
}

const Tabs = styled(M.Tabs)`
    background-color: #FFFFFF;
`

const Tab = styled(M.Tab)`
`

const TabContent = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    & > div {
        height: 24px;
        padding: 0 4px;
        display: flex;
        align-items: center;
        background-color: ${(props) => props.color ? props.color : "red"};
        color: white;
        border-radius: 12px;
        font-weight: 700;
        font-size: 12px;
    }
`

const Home = () => {
    const [ tab, setTab ] = useState<TabTypes>(TabTypes.all)

    const handleChangeTabs = (event: React.SyntheticEvent, newValue: TabTypes) => {
        setTab(newValue)
    }

    return (
        <div>
            <Tabs
                value={ tab }
                onChange={ handleChangeTabs }
            >
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
            
        </div>
    )
}

export default Home