import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getUser} from './actions';
import { connect } from 'react-redux';
import * as R from 'ramda';

// const initalState = {};
// const middleware = [thunk];

// const store = createStore(rootReducer, initalState, applyMiddleware(...middleware));

class App extends Component {

  // state={
  //   user:""
  // }

  componentWillMount(){
    // fetch("https://randomuser.me/api/")
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     this.setState({
    //       user: result.results[0].name.first
    //     });
    //   },
    //   (error) => console.log(error)
    // )
    this.props.getUser();
    // getUser();
      }
  

  render() {
    console.log(this.props.user)
    return (
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello, My name is {R.pathOr("", ["results", 0 , "name", "first"], this.props.user)}
        </p>
        <img src={R.pathOr("", ["results", 0 , "picture", "large"], this.props.user)} />
      </div>
    
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { getUser })(App);
