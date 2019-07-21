import React from 'react';
import Moment from 'react-moment';
import "../Day/Day.css";
export default  function Dayheader() {
   
        return (
            <Moment className="DayHeader" local>
                2019-07-20T12:59-0500
            </Moment>
        );
}
