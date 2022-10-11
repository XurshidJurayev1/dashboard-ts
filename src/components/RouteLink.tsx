import React, {FC, FunctionComponent, ReactSVG} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {HiOutlineClipboardCheck} from "react-icons/hi";
import {SvgIconProps} from "@mui/material/SvgIcon";
import {SvgIcon} from "@mui/material";


const RouteLinkTag = styled(Link)`
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


interface IProps {
    path: string,
    name: string,
    Icon: FunctionComponent
}

const RouteLink: FC<IProps> = ({path, name, Icon}): JSX.Element => {
    return (
        <RouteLinkTag to={path}>
            <Icon />
            <p>
                {name}
            </p>
        </RouteLinkTag>
    );
};

export default RouteLink;