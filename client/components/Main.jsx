import React, { Component } from 'react'
import Map from './Map'

const geo = navigator.geolocation

export class Main extends Component {
  state = {
    location: {
      latitude:  -36.8485,
      longitude: 174.7633
    }
  }
  componentDidMount(){
    this.getLocation()
  }

  //function that gets the location and returns it
  getLocation() {
    if(geo) {
      geo.getCurrentPosition((position) => {
        this.setState({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        })
        console.log (`NEW Longitude ${this.state.location.longitude}` + '  ' + `Latitude ${this.state.location.latitude}`)
      })

    } else {
      console.log("Geo Location not supported by browser");
    }
  }
  render() {
    return (
      <div className='main'>
      <h1>This is Main</h1>
      <Map location={this.state.location}/>
        
      </div>
    )
  }
}

export default Main
