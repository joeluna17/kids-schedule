import React from 'react';
import './App.css';
import TimelineComponent from './components/timeline';
import HeaderComponent from './components/header.js';
import data from './data';
import audio from './assets/sounds/bell.wav';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          date : new Date(),
          data: []
        };
    }
    sound = new Audio(audio);
     

    componentDidMount(){
      this.timerID = setInterval(()=> this.tick(), 1000);
      setInterval(()=> this.handleCheckIfTime(), 1000);
      this.setState({
        data: data
      });
      
    }

    tick(){
      this.setState(
        {
          date: new Date()
        }
      )
    }

    handleCheckIfTime = () => {
      
          this.state.data.map(datum => {
              
                  if (this.state.date.toLocaleTimeString() === datum.startTime) {
                    this.sound.play();
                    alert( "It's time to Zoom PRISSY!" );
                  }

                   
             })
        }
    
playSound = () => {
  this.sound.play()
}



render(){  return (
    <div className="App">
    <button onClick={()=> this.sound.play()}>Play Sounds</button>
        <HeaderComponent time={this.state.date} />
        <TimelineComponent time={this.state.date} handleCheckIfTime={this.handleCheckIfTime}  data={this.state.data}/>
       
    </div>
  );
}
}

export default App;
