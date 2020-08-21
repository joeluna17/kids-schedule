import React from 'react';
import './App.css';
import TimelineComponent from './components/timeline';
import HeaderComponent from './components/header.js';
import data from './data';
import audio from './assets/sounds/bell.wav';
import { withMobileDialog } from '@material-ui/core';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          date : new Date(),
          data: [],
          startTime: 800 ,
          endTime: 1530 ,
          totalTime: 0,
          percentComplete : 0
          
        };
    }
    sound = new Audio(audio);
    count = 0;  


    componentDidMount(){
      this.timerID = setInterval(()=> this.tick(), 1000);
      setInterval(()=> this.handleCheckIfTime(), 1000);
      setInterval(()=> this.getMiltaryHours(), 1000);
      this.setState({
        data: data
      });


      this.setState({
        totalTime : this.state.endTime - this.state.startTime
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
          this.state.data.map((datum, index1) => {
                  
                  if (this.state.date.toLocaleTimeString() === datum.startTime) {
                    this.setState({
                        data: this.state.data.map((item, index2)=> {
                                if (index1 === index2){
                                    item.isCurrent = true
                                }return item
                        })
                    });
                    this.sound.play();
                    this.sound.play();
                  }

                    if (this.state.date.toLocaleTimeString() === datum.endTime) {
                      this.setState({
                          data: this.state.data.map((item, index3)=> {
                                  if (index1 === index3){
                                      item.isCurrent = false
                                      item.isComplete = true
                                  }return item
                          })
                      });
                    }      
                   
             });
        }
    
       
 getMiltaryHours =() => {
   this.count += 1
   const mHour = this.state.date.getHours();
   const mMin = this.state.date.getMinutes();
   const mSec = this.state.date.getSeconds();
   console.log(`${mHour}:${mMin}:${mSec}`)
   this.setState({
    percentComplete : Math.floor((this.count / this.state.totalTime) * 100)
   })
   console.log('percent complete: ',  this.state.percentComplete )
 }



render(){  return (
    <div className="App">
    <button onClick={()=> this.sound.play()}>Play Sounds</button>
        <HeaderComponent time={this.state.date} totalTime={this.state.totalTime} complete={this.state.percentComplete} />
        <TimelineComponent time={this.state.date} handleCheckIfTime={this.handleCheckIfTime} data={this.state.data}/>
       
    </div>
  );
}
}

export default App;


// if 