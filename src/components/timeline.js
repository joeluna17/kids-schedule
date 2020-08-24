import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import moment from 'moment';
import Icon from '@material-ui/core/Icon';

const TimelineComponent = (props) => {
    var date = new moment().format('dddd, MMMM, Do YYYY');

    return (
    <VerticalTimeline>
    {props.data.map(datum =>{
            return (
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date= {date}
                iconStyle={{ background:'rgb(233, 30, 99)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                icon={ <Icon style={{ fontSize: 60 }}>video_call</Icon> }
                 >
                <div className={datum.isCurrent? "inner-content-text-wrapper current-item" : datum.isComplete? "inner-content-text-wrapper complete-item" :  "inner-content-text-wrapper"}>
                <h3 className="vertical-timeline-element-title">{datum.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{`${datum.startTime} - ${datum.endTime}`}</h4>
                <p>Click Me: <h1> <a href={datum.zoomLink} target="_blank"> LETS GO TO CLASS </a></h1></p>
                </div>
            </VerticalTimelineElement> 
            )

    })};
    <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<Icon style={{ fontSize: 55 }}>star</Icon> }
  />
 
</VerticalTimeline> 
    )}

    export default TimelineComponent;