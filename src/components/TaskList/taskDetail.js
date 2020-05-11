import React from 'react';
import axios from 'axios' ;
import Moment from 'react-moment';
import { NotificationContainer, NotificationManager } from 'react-notifications';
export default class TaskDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            task:{},
            taskDetail:[],
            error:{}
      }
    }
    
    render() {
        return (
            <div className="content">
                <NotificationContainer/>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                            <div className="card">
                                <div className="card-header text-center">Add Your Daily Task</div>
                                <div className="card-body">
                                   
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th >Name : {this.state.task.userId.name!='undefined' ? this.state.task.userId.name : ''}</th>
                                                <th colSpan="2">Email: {}</th>
                                                <th>Date : {}</th>
                                            </tr>
                                            <tr>
                                                <th colSpan="5">Description: </th>
                                            </tr>
                                            <tr>
                                                <th>Project Name</th>
                                                <th>Task</th>
                                                <th>Task Notes</th>
                                                <th>Task Status</th>
                                                {/* <th>Date</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.taskDetail.map((data, idx)=>
                                            <tr key={data._id} >
                                                <td>{data.projectName}</td>
                                                <td>{data.task}</td>
                                                <td>{data.taskNotes}</td>
                                                <td>{data.taskStatus}</td>
                                                {/* <td><Moment format="YYYY/MM/DD">{data.createdDate}</Moment></td> */}
                                            </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </form>
            </div>
        );
    }
}
