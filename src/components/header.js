import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';


const Headerwrapper = Styled.div `
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 align-items: space-between;
 width:100%;
 height:250px;
 background-color: rgb(60,141,188);
`

const Title = Styled.h1`
 color: #fff;
 font-size: 2.5vw;
`
const Clock = Styled.h3`
 color: #fff;
 font-size: 4.5vw;
`


const HeaderComponent = (props) => {

    return (
        <Headerwrapper>
            <Title>Priscilla Luna</Title>
            <Clock> {props.time.toLocaleTimeString()} </Clock>
        </Headerwrapper>
    )

}


export default HeaderComponent;