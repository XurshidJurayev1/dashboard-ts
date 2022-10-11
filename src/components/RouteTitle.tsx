import React, {FC} from 'react';
import styled from "styled-components";


const RouteTitleTag = styled.div`
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

type IProps = {
    title: string,
    subTitle: string
}

const RouteTitle: FC<IProps> = ({title, subTitle}): JSX.Element => {
    return (
        <RouteTitleTag>
            <p>
                {title}
            </p>
            <span>
                 {subTitle}
            </span>
        </RouteTitleTag>
    );
};

export default RouteTitle;