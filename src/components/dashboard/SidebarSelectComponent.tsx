import React, {FC, FunctionComponent, useState} from 'react';
import styled from "styled-components";
import {HiOutlineClipboardCheck, HiChevronDown} from "react-icons/hi";
import {NavLink} from "react-router-dom";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material';


const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: auto;
  margin-bottom: 4px;


`


const Option = styled(NavLink)`
  display: flex;
  justify-content: left;
  align-items: center;
  color: #9FA2AA;
  background: transparent;
  text-decoration: none;
  border-radius: 5px;
  padding: 10px 10px 10px 54px;
  height: 24px;

  &:hover {
    transition: all .1s ease;
    background: #ffffff1f;
    color: #fff;
  }

  p {
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    line-height: 14px;
    text-transform: capitalize;
  }
`

const StyledSelect = styled(Accordion)`
  &.MuiPaper-root-MuiAccordion-root {
    color: #9FA2AA !important;
    background: transparent !important;
  }

  &.MuiPaper-root-MuiAccordion-root {
    margin: 0 !important;
  }

  .Mui-expanded {
    margin: 0 !important;
  }

  color: #9FA2AA !important;
  background: transparent !important;
  text-decoration: none;
  border-radius: 5px;
  transition: all .1s ease;
  cursor: pointer;

  .MuiAccordionSummary-root.Mui-expanded {
    min-height: 44px !important;
  }

  .MuiAccordionSummary-content {
    margin: 0 !important;
  }

  .MuiAccordionSummary-root {
    min-height: 44px !important;
    border-radius: 5px;
    padding: 0 10px !important;

    &:hover {
      transition: all .1s ease;
      background: #ffffff1f;
      color: #fff;

      svg {
        color: #fff;
      }
    }
  }

  #text {
    display: flex;
    justify-content: left;
    align-items: center;

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

  }


  svg {
    color: #9FA2AA;
  }
`

const StyledAccordionSummary = styled(AccordionSummary)`
`


type ILinks = {
    path: string,
    name: string,
}

interface IProps {
    subLinks?: ILinks[]
    path?: string,
    name?: string,
    Icon?: FunctionComponent
}

const SidebarSelectComponent: FC<IProps> = ({}): JSX.Element => {


    const options = [
        '111',
        '111',
        '111',
        '111',
        '111',
    ]


    return (
        <SelectContainer>
            <StyledSelect>
                <StyledAccordionSummary
                    expandIcon={<HiChevronDown />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <div id="text">
                        <HiOutlineClipboardCheck />
                        <p>
                            project
                        </p>
                    </div>
                </StyledAccordionSummary>
                <AccordionDetails>
                    {
                        options.map((item, idx) => {
                            return (
                                <Option to="#">
                                    <p>
                                        {item}
                                    </p>
                                </Option>
                            )
                        })
                    }
                </AccordionDetails>
            </StyledSelect>
        </SelectContainer>
    );
};

export default SidebarSelectComponent;