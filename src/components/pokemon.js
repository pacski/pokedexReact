import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PokemonDetails from './pokemonDetails';
import Loader from './loader'


class Pokemon extends React.Component{

    state = {
        name: '',
        url: '',
        isLoading: false,
        imageUrl: '',
        indexPokemon: '',
    }

    componentDidMount(){

        this.setState({isLoading: true});

        try{

        const {name, url} = this.props
        const indexPokemonStep1 = url.split('/');
        console.log(indexPokemonStep1);
        const indexPokemon = indexPokemonStep1[6]
        console.log(indexPokemonStep1[6]);
        console.log(indexPokemon);
        const imageUrl = `/sprites/sprites/pokemon/${indexPokemon}.png`;
        console.log(imageUrl);
    
        this.setState({name: name, imageUrl: imageUrl, indexPokemon: indexPokemon, url: url, isLoading: false})

        }
        catch(err){
            console.log(err.msg)
            throw err;
        }
       
        
    }
    render(){

        const isLoading = this.state;

        
        return (
          
            
            <div>
            {this.state.isLoading ? <div className="d-flex justify-content-center"><Loader /></div> : 
        <div className="card mx-auto mt-3 mb-3" style={{width: 300 }}>
        <img src={this.state.imageUrl} className="card-img-top" alt="..."></img>
        <div className="card-body d-flex justify-content-center flex-column">
            <h5 className="card-title text-center">{this.state.name}</h5>
            <Link className="btn btn-dark justify-content-center" to={this.state.name}>Details</Link>
        </div>
    </div>}
            </div>

            
           




            



           
            
             
             
        //     <div>
        //     <p>{this.state.name}</p>
        //     <img alt="" src={this.state.imageUrl}/> 
        //     <Link className="btn btn-primary" to={this.state.name}>Details</Link>
        // </div> 
             
             
            
              
            
            
            
            
            


        )
        

    }
}


export default Pokemon