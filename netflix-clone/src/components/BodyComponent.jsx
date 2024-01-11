import React, { Component } from 'react'
import { urlApi } from '../data/dati'
import TrendingNComponent from './TrendingNComponent'
import WatchAgainComponent from './WatchAgainComponent'
import NewReleasesComponent from './NewReleasesComponent'

export default class BodyComponent extends Component {

 state = {

    arrayTN : ['tt0139654', 'tt0328107', 'tt0455944'],
    arrayW : ['tt14998742', 'tt3758542', 'tt17351924'],
    arrayNR : ['tt0816692', 'tt0120689', 'tt0364569']
 }

 
  render() {
    return (
        <div className="container-fluid px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4 me-3">TV Shows</h2>
            <div className="dropdown ml-4 mt-1">
              <button
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: '#221f1f' }}
              >
                Genres &nbsp;
              </button>
              <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item text-white bg-dark" href="#">
                  Comedy
                </a>
                <a className="dropdown-item text-white bg-dark" href="#">
                  Drama
                </a>
                <a className="dropdown-item text-white bg-dark" href="#">
                  Thriller
                </a>
              </div>
            </div>
          </div>
          <div>
            <i className="fa fa-th-large icons"></i>
            <i className="fa fa-th icons"></i>
          </div>
        </div>
        <h4 className='my-1'>Trending Now</h4>
        <div id='riga' className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center d-flex justify-content-around my-3">
         < TrendingNComponent movieId={this.state.arrayTN} />
        </div>
        <h4 className='my-1'>Watch it Again</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center d-flex justify-content-around my-3">
        < WatchAgainComponent movieId={this.state.arrayW} />
        </div>
        <h4 className='my-1'>New Releases</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center d-flex justify-content-around my-3">
        < NewReleasesComponent movieId={this.state.arrayNR} />
        </div>
      </div>
    )
  }
}
