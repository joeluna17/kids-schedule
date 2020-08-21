import React from "react";
import { findByLabelText } from "@testing-library/react";


const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 40,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50
    }
  
    const fillerStyles = {
      display:'flex',
      justifyContent:'flex-end',
      alignItems: 'center',
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right',
      boxShadow: '5px 0 8px 0px rgba(0,0,0,0.3) '

    }
  
    const labelStyles = {
      padding: 10,
      color: 'black',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;