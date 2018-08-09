import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { testAction } from './store/actions/testAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={this.testAction}>Store test</button>
      </div>
    );
  }

  testAction = (event) => {
    this.props.testAction();
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  testAction: () => dispatch(testAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
