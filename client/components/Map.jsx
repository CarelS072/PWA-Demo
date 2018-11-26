import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
// import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'

// process.env.JWT_SECRET

class Map extends Component {
  state = {
    location: {
      latitude:  this.props.location.latitude,
      longitude: this.props.location.longitude
    }
  }
  render(){
// const Map = (props) => {
  // console.log('props location = '+ props)
  const GoogleMapExample = withGoogleMap(() => (
    <GoogleMap
center = { { lat: this.state.location.latitude, lng: this.state.location.longitude } } 
defaultZoom = { 12 }
    >
    </GoogleMap>
  ))
  return (
    <div>
      <GoogleMapExample
        containerElement={ <div style={{ height: `500px`, width: '100%' }} /> }
        mapElement={ <div style={{ height: `100%` }} /> } 
        />
    </div>
  )
}}


export default Map

// center = { { lat: -37.016635099999995, lng: 174.8839693 } } 

// center = { { lat: Number(props.location.latitude), lng: Number(props.location.longitude) } } 

