import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';

let picture = [];
    picture.push(require('../images/season1.jpg'));
    picture.push(require('../images/season2.jpg'))
    picture.push(require('../images/season3.jpg'))
    picture.push(require('../images/season4.jpg'))
    picture.push(require('../images/winningshot.jpg'))
    picture.push(require('../images/season5.jpg'))
    picture.push(require('../images/season6.jpg'))
    picture.push(require('../images/message.jpg'))
    picture.push(require('../images/majorsecond.jpg'))


const Modal = (props) => {
    console.log(props);
    return ReactDOM.createPortal(
        <Fragment> 
            <div className="modal-cover modal-dialogue"  role="document">
                <div className="custom-modal container-fluid fade-down">
                    <div className="modal-header">
                        <button type="button" className="close" onClick={props.onClose} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                        <div className="row">
                            <div className="col-lg">
                                <h5 className="modal-title">{props.title}</h5>
                                {props.synopsis}
                                <div id="info-panel">
                                    <h5>Information</h5>
                                    <h7>Started: {props.startDate}</h7>
                                    <h7>Ended: {props.endDate}</h7>
                                    <h7>Episode Count: {props.episodes}</h7>
                                    <h7>MPAA: {props.ageRating}</h7>
                                </div>
                                
                            </div>
                            <div id="profile-pic" className="col-lg-auto mx-auto">
                                <img className="img-fluid" src={picture[props.index]}></img>
                            </div>
                        </div>     
                </div>
            </div>
        </Fragment>,
        document.body
    )
}

export default Modal

