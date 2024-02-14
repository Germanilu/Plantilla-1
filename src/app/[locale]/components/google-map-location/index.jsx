'use client'
 
import { Loader }           from "@googlemaps/js-api-loader";
import { useRef,useEffect } from "react";

import './index.scss';

/**
 * @Component
 * Render Google map with pin Location
 * 
 * @example
 * <Map/>
 * 
 */
export default function Map(){

  const mapRef = useRef(null);

  useEffect(() => {

    const initMap = async() => {

      const loader = new Loader({
        apiKey: "AIzaSyBGdWS8K4MVcHVUpnbAWyF_8tVv7WJO-w0",
        version: 'weekly'
      });

      //Init map and marker
      const { Map } = await loader.importLibrary('maps');
      const { Marker } = await loader.importLibrary('marker');
      
      const position = {
        lat: 48.871412775556045,
        lng: 2.303454843826624
      }
      

      //map options
      const mapOptions = {
        center: position,
        zoom: 15,
        styles:[
          { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
          },
        ],
        
      }

      //setup the map
      const map = new Map(mapRef.current, mapOptions);

      //put up a marker
      const marker = new Marker({
        map: map,
        position: position
      })
    }

    initMap();

  },[]);

  return(
    <div className="map-design" ref={mapRef}/>

  )
}