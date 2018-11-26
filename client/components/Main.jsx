import React, { Component } from 'react'
import Map from './Map'
import { Camera } from './Camera';

const geo = navigator.geolocation

export class Main extends Component {
  state = {
    location: {
      latitude:  52.21299,
      longitude: 5.27937
    },
    notallowed: true
  }
  componentDidMount(){
    this.getLocation()
  }

  // function that retrieves the location from the browser after requesting access
  // MDN - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
  getLocation() {
    if(geo) {
      geo.getCurrentPosition((position) => {
        this.setState({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },
          notallowed: false
        })
        console.log (`NEW Longitude ${this.state.location.longitude}` + '  ' + `Latitude ${this.state.location.latitude}`)
        this.forceUpdate()
      })

    } else {
      this.setState({
        notallowed: false
      }
      )
      console.log("Geo Location not supported by browser");
    }
  }
  
  render() {
    return (
      <div className='main'>

      <h1>Welcome to the PWA-Demo</h1>

        <center>
          <Camera />
        </center>
       


        {this.state.notallowed === true ? 
        <div><p>Geo Location not supported/enabled by browser</p>
        <Map location={this.state.location}/></div>
        :
        <div><p>Your location is located at: <br/>
        Latitude : {this.state.location.latitude} <br/>
        Longitude : {this.state.location.longitude}
       </p> <Map location={this.state.location}/></div>  
        }

      </div>
    )
  }
}

export default Main
