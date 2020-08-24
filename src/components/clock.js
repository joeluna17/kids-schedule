import React from 'react';
import Styled from 'styled-components';
import moment from 'moment';



const Clock = props => {

    const clockStyle = {
    width:'20%',
    height:'50%',
    color: props.fontColor? props.fontColor : 'white',
    backgroundColor: props.bgColor? props.bgColor : 'black',
    fontSize:'2vw',
    borderRadius: '5px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    boxShadow: '0 0 15px 3px rgba(0,0,0,0.4)',
    fontWeight:'700',
    padding:'10px'
    }

   
        return (
            <div style={clockStyle}>{props.time}</div>
        )
}


export default Clock;