import React, { Component } from 'react';
import { Fragment } from 'react';
import Modal from '../Views/Modal';

//Season Profile pictures


class ModalContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: null
        }
    }

    componentWillMount(){
        
        let data = this.props.data.attributes;
        // console.log(this.props.data);
        // //Fetch additional data from API
        // fetch(this.props.data.relationships.animeCharacters.links.related).then( (characters)=> characters.json()
        // ).then( (characters)=> {
        //     console.log(characters);
        //     characters.data.map( (character)=>{
        //         fetch(character.relationships.character.links.related).then( (charData) => charData.json()
        //         ).then ((charData) =>{
        //             console.log(charData);
        //         })
        //     })
        //     })

        let info = {
              title: data.canonicalTitle,
              synopsis: data.synopsis,
              episodes: data.episodeCount,
              startDate: data.startDate,
              endDate: data.endDate,
              ageRating: data.ageRating,
              ja_jp: data.ja_jp,
              poster: data.posterImage.tiny,
              index: this.props.data.index
        };
        this.setState({
            data: info
        })
     }
    

    render(){
        return (
            <Fragment>
               <Modal {...this.state.data} visible={true} onClose={this.props.onClose}/>
            </Fragment>
        )
    }


}
export default ModalContainer;