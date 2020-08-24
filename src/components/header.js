import React from 'react';
import Styled from 'styled-components';
import ProgressBar from './progressbar';
import Clock from './clock';

const Headerwrapper = Styled.div `
 width:100%;
 height:30vh;
 background-color: #cc99a2;
 display:flex;
 flex-direction: column;
 justify-content: center;
 align-items:center;
`;

const TitleInfoWrapper = Styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 align-items:center;
 width:100%;
 padding-top:4%;
`;

const Title = Styled.h1`
 color: #fff;
 font-size: 2.5vw;
`;

const ProgressWrapper = Styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width:80%;
 margin: 0;
 padding: 0;
 margin-left: 5%;

`;

const HeaderComponent = (props) => {

    return (
        <Headerwrapper>
         <TitleInfoWrapper>
            <Title>Priscilla Luna</Title>
            <Clock time={props.time} bgColor={props.bgColor} fontColor={props.fontColor}/>
            </TitleInfoWrapper>
            <ProgressWrapper> <ProgressBar bgcolor={'#7BD8F1'} completed={props.complete} total={props.totalTime} /> </ProgressWrapper>
        </Headerwrapper>
    )

}


export default HeaderComponent;

//<ProgressWrapper> <ProgressBar bgcolor={'#f49c12'} completed={props.complete} total={props.totalTime} /> </ProgressWrapper>