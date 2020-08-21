import React from 'react';
import Styled from 'styled-components';
import ProgressBar from './progressbar';


const Headerwrapper = Styled.div `
 width:100%;
 height:275px;
 background-color: rgb(60,141,188);
`;

const TitleInfoWrapper = Styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 width:100%;
`;

const Title = Styled.h1`
 color: #fff;
 font-size: 2.5vw;
`;
const Clock = Styled.h3`
 color: #fff;
 font-size: 2.5vw;
`;

const ProgressWrapper = Styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width:80%;
 margin-left: 5%;
`;

const HeaderComponent = (props) => {

    return (
        <Headerwrapper>
         <TitleInfoWrapper>
            <Title>Priscilla Luna</Title>
            <Clock> {props.time.toLocaleTimeString()} </Clock>
            </TitleInfoWrapper>
        </Headerwrapper>
    )

}


export default HeaderComponent;

//<ProgressWrapper> <ProgressBar bgcolor={'#f49c12'} completed={props.complete} total={props.totalTime} /> </ProgressWrapper>