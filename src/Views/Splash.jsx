import React, { Component } from 'react';



let icon = require('../images/baseballIcon.png');


const Splash = (props) => {
        return (
            <div className="row justify-content-md-center">
                {props.anime.map((season,index)=>
                    {
                        return (
                        <React.Fragment key={season.id}>
                           <div className="col-sm-auto mx-auto no-gutters align-self-center section"> 
                                <div className="content">
                                    <img className="img-fluid counterfade" data-id={index} alt={season.attributes.slug} src = {season.attributes.posterImage.small} onClick={props.onClick}></img>
                                        <div>
                                        <img className="img-fluid spin" src={icon} data-id={index} onClick={props.onClick}></img>
                                        </div>
                                </div>
                           </div>      
                      </React.Fragment>
                        )
                    })}
               
            </div>
        )
    }



export default Splash;