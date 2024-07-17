import React, { Component } from 'react';
import './App.css';
import FlowChart from "./mychart";



export default class App extends Component {


  render() {
      return (
          <div style={{height: '100%'}}>

              <FlowChart />
          </div>
      );
  }
}