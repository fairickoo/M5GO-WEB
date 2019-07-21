import React  from 'react';
import Clock from 'react-live-clock';
 import "../Clock/Clock.css"
export default  function Clockk() { 
    return (
        <div className="clock" >
            <Clock format={'HH : mm : ss'} ticking={true} timezone={'Th/Pacific'} />
        </div>
        
    );
}