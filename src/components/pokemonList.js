import React from 'react';
import axios from 'axios';

import Filter from './filter'
import Pokemon from './pokemon';
import Loader from './loader'


class PokemonList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: [],
            url: 'https://pokeapi.co/api/v2/pokemon/?limit=200',
            value: '',
            filteredPokemon: '',
            
        };
      }
    handleSubmit = this.handleSubmit.bind(this);


    async componentDidMount(){

        this.setState({isLoading: true});


        try{
            const response = await axios.get(this.state.url);
            this.setState( {data: response.data['results'], isLoading: false})

           // const filteredPokemon =  response.data['results'].filter(pokemon => response.data['results'][0].name.toLowerCase().includes(filteredPokemon.toLowerCase()));


           

        }
        catch(err){
            console.log(err.msg)
            throw err;
        } 
    }

    


    handleSubmit(ev)
    {
  
        ev.preventDefault();
        
        this.setState({
            value: ev.currentTarget.filter.value,
            
            
            
        });
  
    }

    
    
   
    render(){



    
        return(
            <div>
                <Filter handleSubmit={this.handleSubmit} value={this.state.value}  url = {this.state.url + this.state.value}  />
                {/* <Pokemon 
                name = {this.state.value}
                url = {this.state.url + this.state.value} 
                /> */}
                <div> 
                {this.state.isLoading ? <div className="d-flex justify-content-center"><Loader /></div> : 
                 this.state.data.map( (data, index ) => (
                    
                    <Pokemon 
                    key = {index}
                    name = {data.name}
                    url = {data.url}
                    />
                ))}
                
                </div>

               
                
            </div>
            
        )

    }
}

export default PokemonList