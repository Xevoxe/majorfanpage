import React, {Component} from 'react';
import {Fragment} from 'react';
import Splash from '../Views/Splash';
import ModalContainer from '../Containers/ModalContainer';


class SplashContainer extends Component{
    constructor(props){
        super(props);

    
        this.state = {
            anime: [],
            loaded: false,
            data: null,
            showModal: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    
    componentWillMount(){
        //Fetch data from Kitsu API
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=major`).then( (anime) => anime.json()
        ).then((anime)=>{

            //Sort Anime by start date
            let sortedAnime = [anime.data[0]];
            for(let i = 1 ; i < anime.data.length; i++){

                if(Date.parse(anime.data[i].attributes.startDate) < Date.parse(sortedAnime[0].attributes.startDate)){
                    sortedAnime.unshift(anime.data[i]);
                }
                else if(Date.parse(anime.data[i].attributes.startDate) > Date.parse(sortedAnime[sortedAnime.length-1].attributes.startDate))
                {
                    sortedAnime.push(anime.data[i]);
                }
                else {
                    for( let k = 1 ; k < sortedAnime.length - 1; k++){
                        if(Date.parse(anime.data[i].attributes.startDate) < Date.parse(sortedAnime[k].attributes.startDate)){
                            sortedAnime.splice(k,0,anime.data[i]);
                            break;
                        }
                    }
                }
            }
            this.setState({
                anime: sortedAnime,
                loaded: true
            });
            
            }
        )
    }

    handleClick(e){
        
        let data = this.state.anime[e.currentTarget.dataset.id];
        //Append the index to the data
        data.index = e.currentTarget.dataset.id
        this.setState({
            data: data, showModal: true});
    }
    
    handleClose(){
        this.setState({
            showModal: false
        })
    }


    render(){

        if(this.state.loaded){
            return (
                <Fragment>
                <Splash anime = {this.state.anime} onClick ={this.handleClick}  />;
                {this.state.showModal ? <ModalContainer data={this.state.data} onClose={this.handleClose} /> : <div></div>}
                </Fragment>
            )
        }
        else 
        return null;
        
    }
}

export default SplashContainer;