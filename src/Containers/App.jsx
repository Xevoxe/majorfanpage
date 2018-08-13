import React, { Component } from 'react';
import SplashContainer from './SplashContainer';

let logo = require('../images/majorlogo.png');


class App extends Component {
    constructor(props){
        super(props);

        let head
    }

    render(){
  
        return (
            <div className="container">
                <div className="jumbotron" id="header">
                    <img className="img-fluid" src={logo}></img>
                
                <div className="heading">
                    <h1>A FAN PAGE</h1>
                </div>
                </div>
           
                <div className="row">
                    <div className="col-1"></div> 
                    <div className="col-10"> 
                        <SplashContainer />
                    </div>
                    <div className="col-1"></div> 
                </div>
            </div>
            
        )
    }
}

export default App;