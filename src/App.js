import React, { Component } from 'react'
import './App.css'
import Wall from './components/wall/Wall'
import Button from './components/buttons/button'


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      issuesData:[],
      fork:0,
      star:0
    }
  }

  componentDidMount(){
    fetch(`https://api.github.com/repos/octocat/Hello-World`)
    .then(res => res.json())
    .then(data => this.setState({issuesData: data}))

  }

  increaseStarCount= () =>{
      this.setState({
        star: this.state.star + 1
      })
  }

  increaseForkCount = () =>{
    this.setState({
      fork: this.state.fork + 1
    })
  }
  render(){
    return(
      <div className="App">
        <div className="navbar-container">
            <div className="navbar">
              github
            </div>
            <div className="navbar-notification-area">
              <div className="name-of-issue">facebook/react/issue</div>
              <div className="buttons">
    <div className="star-button"><Button  name="star" onChildClick = {() => this.increaseStarCount()}/>{this.state.star}</div>
    <div className="fork-button"><Button name="fork" onChildClick = {() => this.increaseForkCount()}/>{this.state.fork}</div>
                  </div>
            </div>
        </div>
    <Wall issuesData={this.state.issuesData}/>
      </div>
    )
  }
}