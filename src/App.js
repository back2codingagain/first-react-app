import React, { Component } from 'react';
import Todo from './components/Todo';
import Header from './components/layout/Header'
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
  render(){
    return (
      <div>
          <Header/>
          <Todo todos={this.state.activities} 
          markComplete={this.toggleComplete}
          deleteItem = {this.deleteItem}
          />
      </div>
    );
  }
  
}

export default App;
