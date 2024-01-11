import React, { Component } from 'react';
import { urlApi } from '../data/dati';

export default class TrendingNowComp extends Component {
    state = { 
        objT : [],
    }
    
    componentDidMount() {
        this.props.movieId.forEach((movie, index) => {
          fetch(urlApi + '&i=' + movie)
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              throw new Error('Something went wrong');
            })
            .then((responseJson) => {
              // Verifica se responseJson è già presente in objTrending
              const isDouble = this.state.objT.some(item => item.imdbID === responseJson.imdbID);
      
              // Aggiungi responseJson solo se non è un duplicato
              if (!isDouble) {
                this.setState((prevState) => ({
                  objT: [...prevState.objT, responseJson],
                }));
              }
      
            
            })
            .catch((error) => {
              console.log(error);
            });
        });
      }
      
    render() {
        
        return (
            this.state.objT.map((e, index) => (
              <div key={index} className="col mb-2 px-1">
                <img className="img-fluid" src={e.Poster} alt={e.Plot} />
              </div>
            ))
          );
          
  }
}