import React from 'react';
import axios from 'axios';
import Loader from './loader'

class PokemonDetails extends React.Component{
    state = {
        name: '',
        url: '',
        isLoading: false,
        imageUrl: '',
        indexPokemon: '',
        height: '',
        weight: '',
        move1: '',
        move2: '',
        move3: '',
        speed: '',
        special_defense: '',
        special_attack: '',
        defense: '',
        attack: '',
        hp: '',
        type1: '',
        type2:'',
        urlType1: '',
        urlType2: '' 


    }


    async componentDidMount(){

        this.setState({isLoading: true});

        try{

        const indexPokemon  = this.props.match.params.pName;
        


        console.log("index");
        console.log(indexPokemon)
        console.log("index");
        console.log("cible");
        console.log("cible");

        // recuperation de la taille, du poid et de l'index
        const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${indexPokemon}/`;   
        const pokeResponse = await axios.get(pokeUrl);

        const height = pokeResponse.data.height;
        const weight = pokeResponse.data.weight
        const name = pokeResponse.data.name
        const indexUrl = pokeResponse.data.id
        const imageUrl = `/sprites/sprites/pokemon/${indexUrl}.png`;

        console.log(pokeResponse);
        console.log(height);
        console.log(weight);
        console.log(indexUrl);

        // Recupération des 3 premiers moves

        const move1 = pokeResponse.data.moves[0].move.name;
        const move2 = pokeResponse.data.moves[1].move.name;
        const move3 = pokeResponse.data.moves[2].move.name;

        console.log(pokeResponse);
        console.log("ability cible")
        console.log(move1);
        console.log("ability cible")

        // Recupération des statistique

        const speed = pokeResponse.data.stats[0].base_stat
        const special_defense = pokeResponse.data.stats[1].base_stat
        const special_attack = pokeResponse.data.stats[2].base_stat
        const defense = pokeResponse.data.stats[3].base_stat
        const attack = pokeResponse.data.stats[4].base_stat
        const hp = pokeResponse.data.stats[5].base_stat

        console.log("statistiques")
        console.log(speed);
        console.log("statistiques")

        // Recuperation des types

        const type1 = pokeResponse.data.types[0].type.name;
        var type2 = null;

        var urlType1 = null
        var urlType2 = null

        if(pokeResponse.data.types.length == 1){
             type2 = null
        }
        else {
             type2 = pokeResponse.data.types[1].type.name
        }

        // type en images

        switch (type1) {
            case 'steel':
                urlType1 = "/sprites/sprites/types/acier.png"
                break;
            case 'fighting':
                urlType1 = "/sprites/sprites/types/combat.png"
                break;
            case 'dragon':
                urlType1 = "/sprites/sprites/types/dragon.png"
                break;
            case 'water':
                urlType1 = "/sprites/sprites/types/eau.png"
                break;
            case 'electric':
                urlType1 = "/sprites/sprites/types/electrik.png"
                break;
            case 'fairy':
                urlType1 = "/sprites/sprites/types/fee.png"
                break;
            case 'fire':
                urlType1 = "/sprites/sprites/types/feu.png"
                break;
            case 'ice':
                urlType1 = "/sprites/sprites/types/glace.png"
                break;
            case 'bug':
                urlType1 = "/sprites/sprites/types/insecte.png"
                break;
            case 'normal':
                urlType1 = "/sprites/sprites/types/normal.png"
                break;
            case 'grass':
                urlType1 = "/sprites/sprites/types/plante.png"
                break;
            case 'poison':
                urlType1 = "/sprites/sprites/types/poison.png"
                break;
            case 'psychic':
                urlType1 = "/sprites/sprites/types/psy.png"
                break;
            case 'rock':
                urlType1 = "/sprites/sprites/types/roche.png"
                break;
            case 'ground':
                urlType1 = "/sprites/sprites/types/sol.png"
                break;
            case 'ghost':
                urlType1 = "/sprites/sprites/types/spectre.png"
                break;
            case 'dark':
                urlType1 = "/sprites/sprites/types/tenebre.png"
                break;
            case 'flying':
                urlType1 = "/sprites/sprites/types/vol.png"
                break;
        
            default:
                urlType1 = null
                break;
        }

        switch (type2) {
            case 'steel':
                urlType2 = "/sprites/sprites/types/acier.png"
                break;
            case 'fighting':
                urlType2 = "/sprites/sprites/types/combat.png"
                break;
            case 'dragon':
                urlType2 = "/sprites/sprites/types/dragon.png"
                break;
            case 'water':
                urlType2 = "/sprites/sprites/types/eau.png"
                break;
            case 'electric':
                urlType2 = "/sprites/sprites/types/electrik.png"
                break;
            case 'fairy':
                urlType2 = "/sprites/sprites/types/fee.png"
                break;
            case 'fire':
                urlType2 = "/sprites/sprites/types/feu.png"
                break;
            case 'ice':
                urlType2 = "/sprites/sprites/types/glace.png"
                break;
            case 'bug':
                urlType2 = "/sprites/sprites/types/insecte.png"
                break;
            case 'normal':
                urlType2 = "/sprites/sprites/types/normal.png"
                break;
            case 'grass':
                urlType2 = "/sprites/sprites/types/plante.png"
                break;
            case 'poison':
                urlType2 = "/sprites/sprites/types/poison.png"
                break;
            case 'psychic':
                urlType2 = "/sprites/sprites/types/psy.png"
                break;
            case 'rock':
                urlType2 = "/sprites/sprites/types/roche.png"
                break;
            case 'ground':
                urlType2 = "/sprites/sprites/types/sol.png"
                break;
            case 'ghost':
                urlType2 = "/sprites/sprites/types/spectre.png"
                break;
            case 'dark':
                urlType2 = "/sprites/sprites/types/tenebre.png"
                break;
            case 'flying':
                urlType2 = "/sprites/sprites/types/vol.png"
                break;
        
            default:
                urlType2 = null
                break;
        }


        console.log("type")
        console.log(type1);
        console.log(type2);
        console.log("type")
        


        this.setState({
            name: name,
            indexPokemon: this.props.indexPokemon,
            imageUrl: imageUrl,
            height: height,
            weight: weight,
            move1: move1,
            move2: move2,
            move3: move3,
            speed: speed,
            special_defense: special_defense,
            special_attack: special_attack,
            defense: defense,
            attack: attack,
            hp: hp,
            type1: type1,
            type2: type2,
            urlType1: urlType1,
            urlType2: urlType2,
            isLoading: false
        })

        }
        catch(err){
            console.log(err.msg)
            throw err;
        }
        
       
    
    }

    render(){
        
        return(
          <>
               {this.state.isLoading ? <div className="d-flex justify-content-center"><Loader /></div> : 
                <div className="card mb-3 mx-auto mt-3 mb-3" style={{width: 540}}>
                <div className="row no-gutters">
                <div className="col-md-4">
                <img src={this.state.imageUrl} className="card-img" alt="..."></img>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                <h5 className="card-title text-bold text-danger">{this.state.name}</h5>
                <p className="card-text">height : {this.state.height} dm</p>
                <p className="card-text">weight : {this.state.weight}</p>
                <img src={this.state.urlType1}/>
                <img src={this.state.urlType2}/>
                <p>move 1 : {this.state.move1}</p>
                <p>move 2 : {this.state.move2}</p>
                <p>move 3 : {this.state.move3}</p>
                <hr></hr>
                <h3>Stats :</h3>
                <p>speed : {this.state.speed}</p>
                <p>special-defense : {this.state.special_defense}</p>
                <p>special-attack : {this.state.special_attack}</p>
                <p>defense : {this.state.defense}</p>
                <p>attack : {this.state.attack}</p>
                <p>hp : {this.state.hp}</p> 
                </div>
                </div>
                </div>
                </div>
           }
          </>
               
           
            
        )
    }
}

{/* <div>
<img alt="" src={this.state.imageUrl}/> 
<p>name : {this.state.name}</p>
<p>height : {this.state.height} dm</p>
<p>weight : {this.state.weight} hg</p>
<img src={this.state.urlType1}/>
<img src={this.state.urlType2}/>
<p>move 1 : {this.state.move1}</p>
<p>move 2 : {this.state.move2}</p>
<p>move 3 : {this.state.move3}</p>
<hr></hr>
<h3>Stats :</h3>
<p>speed : {this.state.speed}</p>
<p>special-defense : {this.state.special_defense}</p>
<p>special-attack : {this.state.special_attack}</p>
<p>defense : {this.state.defense}</p>
<p>attack : {this.state.attack}</p>
<p>hp : {this.state.hp}</p> 
<hr></hr>
</div> */}


export default PokemonDetails