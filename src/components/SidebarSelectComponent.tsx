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

const Select = styled.div`
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
    width: 16px;
    height: 16px;

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
  

`

const Option = styled(NavLink)`

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
            <Select>
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

            </Options>
        </SelectContainer>
    );
};

export default SidebarSelectComponent;