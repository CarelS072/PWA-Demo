import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {
  state = {
    location: {
      latitude:  this.props.location.latitude,
      longitude: this.props.location.longitude
    }
  }
  render(){
  const GoogleMapExample = withGoogleMap(() => (
    <GoogleMap
      center = { { lat: this.state.location.latitude, lng: this.state.location.longitude } } 
      defaultZoom = { 15 }
    />
  ))
  return (
    <div >
      <center> 
        <GoogleMapExample
        containerElement={ <div className= 'map'/> }
        mapElement={ <div style={{ height: `100%` }} /> } 
        />
      </center>
     
    </div>
  )
}}


export default Map


