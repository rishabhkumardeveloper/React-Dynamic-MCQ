import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";

// import Reminder from "./components/Reminder/reminder";
import TaskList from "./components/TaskList/taskList";
import TaskDetail from "./components/TaskList/taskDetail";
import TaskForm from './components/Task/taskForm';

import AuthRoute from "./components/AuthRoute";

import 'react-notifications/lib/notifications.css';

function App() {
  return (
    <Router>
      
        <div>
         
          <TaskForm />
          <TaskList />
          <AuthRoute path="/task-detail/:id" component={TaskDetail} />
        
        
        </div>
    
    </Router>
  );
}

export default App;
