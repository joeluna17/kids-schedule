import React from 'react';
import './App.css';
import TimelineComponent from './components/timeline';
import HeaderComponent from './components/header.js';
import data from './data';
import audio from './assets/sounds/bell.wav';
import moment from 'moment';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          date : new moment(),
          data: [],
          startTime: '8:00AM',
          endTime: '3:00PM',
          totalTime: 0,
          percentComplete : 0,
          isDisplayTime:false
        };
    }
    sound = new Audio(audio);
    count = 0;
    format = 'h:mmA'; // the format that we use for our dutation calculation
   

    componentDidMount(){
      this.timerID = setInterval(()=> this.tick(), 1000);
      setInterval(()=> this.handleCheckIfTime(), 1000);
      this.setState({
        data: data
      })
      
    this.start = moment(this.state.startTime, this.format); // here we format our start time for duration calc and normalization
    this.end = moment(this.state.endTime, this.format); //here we format our end time for duration calc and normalization
    this.totalDuration = moment.duration(this.end.diff(this.start)).as('minutes'); // Here we find the total duration from a start time to and end time and represent as minutes(use th docs https://momentjs.com/docs/#/query/). Step 2
    this.tick();
    //console.log('the total duration is:', this.totalDuration);
    }

    tick(){
      if(this.state.isDisplayTime){
      this.timeSinceStart= this.start.diff(moment(),'minutes'); //Here we find the time elaplsed since the state defined start time. Step 3
      this.totalPercentComplete = Math.floor(((this.timeSinceStart * -1) / this.totalDuration) * 100); // here we calculate the percent complete, we had a negative number to we corrected by multiplig by -1. Step 4
      }
      //console.log(this.timeSinceStart);
      //console.log('percent complete', this.totalPercentComplete);
     
      this.setState(
        {
          date: new moment(),
          isDisplayTime : moment().isBetween(this.start, this.end), // Here we ask if we should start our calculation update for our progress bar and see if it's time? Will return boolean t||f. Step 1
          percentComplete: this.totalPercentComplete
        }
      );

    }

  handleCheckIfTime = () => {
      const currentTime = this.state.date.format('h:mm A');
      //console.log(currentTime)
          this.state.data.map((datum, index1) => {
                  
                  if (currentTime === datum.startTime && !datum.isCurrent) {
                    this.setState({
                        data: this.state.data.map((item, index2)=> {
                                if (index1 === index2){
                                    item.isCurrent = true
                                }return item
                        })
                    });
                    this.sound.play();
                    setTimeout(()=> {
                      this.sound.play();
                    },2000);
                    
                  }

                    if (currentTime === datum.endTime) {
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

render(){ 
   return (
    <div className="App">
    <button onClick={ () => {return (this.sound.play(), setTimeout(()=>{this.sound.play()},2000) )}}>Play Sounds</button>
        <HeaderComponent 
        time={this.state.date.format('hh:mm:ss A')} 
        bgColor={'#FEC8D8'} 
        fontColor={'#000'} 
        totalTime={this.state.totalTime} 
        complete={this.state.percentComplete} 
        
        />
        <TimelineComponent  
        handleCheckIfTime={this.handleCheckIfTime} 
        data={this.state.data} 

        />
       
    </div>
  );
}
}

export default App;


