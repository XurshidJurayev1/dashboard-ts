import React, {FC, useState} from 'react';
import styled from "styled-components";
import {HiOutlineClipboardCheck, HiChevronDown} from "react-icons/hi";
import {NavLink} from "react-router-dom";


const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: auto;
  margin-bottom: 4px;


`

const Select = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: #9FA2AA;
  background: transparent;
  text-decoration: none;
  border-radius: 5px;
  transition: all .1s ease;
  cursor: pointer;

  &:hover {
    transition: all .1s ease;
    background: #ffffff1f;
    color: #fff;
  }

  #text {
    display: flex;
    justify-content: left;
    align-items: center;
  }

  #arrow {
    transition: all .2s ease;
    width: 16px;
    height: 16px;
    transform: rotate(${props => props.open ? "0deg" : "-90deg"});

    svg {
      width: 100%;
      height: 100%;
    }
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

type optionProps = {
    length: number,
    open: boolean
}

const Options = styled.div<optionProps>`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  overflow: hidden;
  transition: all 2s ease;

  height: ${props => props.open ? 'auto' : '0px'};


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


const SidebarSelectComponent: FC = (): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false)


    const options = [
        '111',
        '111',
        '111',
        '111',
        '111',
    ]


    return (
        <SelectContainer>
            <Select onClick={() => setOpen(!open)} open={open}>
                <div id="text">
                    <HiOutlineClipboardCheck />
                    <p>
                        project
                    </p>
                </div>
                <div id="arrow">
                    <HiChevronDown />
                </div>
            </Select>
            <Options open={open} length={options.length}>
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
            </Options>
        </SelectContainer>
    );
};

export default SidebarSelectComponent;