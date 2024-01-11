import React from 'react'
import './map.css';
import { Loader } from '@googlemaps/js-api-loader';

const map = () => {
    
    const loader = new Loader({
      apiKey: "",
      version: "weekly",
      libraries: ["maker"]
    });
    
    const mapOptions = {
      center: {
        lat: 19.076090,
        lng: 72.8
      },
      zoom: 10
    };

    
    // loader
    // .load()
    // .then((google) => {
    //  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // })
    // .catch(e => {
    //   // do something
    // });

  const markerOptions = {
    map,
    position: { lat: 19.076090, lng: 72.8 } ,
    mapId: "8e0a97af9386fef"
  };

  loader
  .importLibrary('maps')
  .then(async ({Map}) => {
    const map = new Map(document.getElementById("map"), mapOptions);
    const {AdvancedMarkerElement} = await loader.importLibrary('marker');
    new AdvancedMarkerElement({map, markerOptions});
  })
  .catch((e) => {
    // do something
  });

  return (
    <div id ="container" >
        <input type='text'></input>
     <div id = "map"></div>
    </div>
  )
}

export default map
