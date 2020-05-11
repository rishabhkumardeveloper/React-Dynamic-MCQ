import React from 'react';
import axios from 'axios' ;
import Moment from 'react-moment';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Link } from 'react-router-dom';
export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            taskList:[],
            error:{}
      }
    }
   
    render() {
        return (
            <div className="content">
               
            </div>
        );
    }
}
