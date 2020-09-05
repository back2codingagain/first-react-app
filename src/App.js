import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todo from './components/Todo';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import './App.css';


class App extends Component {
  state = {
    activities: [
      {
        id:1,
        title:'learning React',
        completed:false
      },
      {
        id:2,
        title:'explore React',
        completed:false
      },
      {
        id:3,
        title:'implement React',
        completed:false
      }]
  }
  // toggle item completion
  toggleComplete = (id) => {
    this.setState({activities: this.state.activities.map(
      activity => {
        if(activity.id === id){
          activity.completed = !activity.completed
        }
        return activity
      })})}

// delete item.. spread operator is used to copy the entire state and
// then apply filter only the ones where the id is not equal to the id passed
// this result is then copied in the state object 
  deleteItem = (id) =>{
    this.setState(
      {activities: [...this.state.activities.filter(activity => activity.id !== id)]} 
    );
  }

  //add item - get the latest ID and then add one to get the new ID
  addItem = (title) =>{
    const lastIndex = this.state.activities.length
    const lastId = this.state.activities[lastIndex - 1].id
    const newID = lastId + 1
  
  
    const newItem = {
      id: newID,
      title:title,
      completed:false
    }

    
    this.setState(
      {activities:[...this.state.activities, newItem]}
    )

  }

  render(){
    return (
      <Router>
      <div className = 'MainApp'>
          <Header/>
          <Route exact path = '/' render = {props => (
            <React.Fragment>

              <AddTodo addItem = {this.addItem}/>
              <Todo todos={this.state.activities} 
              markComplete={this.toggleComplete}
              deleteItem = {this.deleteItem}
              />
            </React.Fragment>
          )}/>

          <Route exact path = '/About' render = {props => (
            <React.Fragment>
              <About/>
            </React.Fragment>
          )}/>
      </div>
      </Router>
    );
  }
  
}

export default App;
