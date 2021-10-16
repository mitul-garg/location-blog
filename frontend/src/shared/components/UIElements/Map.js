import React, { useRef, useEffect } from "react";

// mapbox
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
// mapbox

import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  const { lng, lat } = center;

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWl0dWxnYXJnIiwiYSI6ImNrdWUzbHd2ODAyeGoybm9ranczbGIyemwifQ.tPeePqNeEM7SNooyYreqjw";
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [lng, lat], // starting position [lng, lat]
      zoom: zoom, // starting zoom
    });
    const marker1 = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    console.log(marker1);
  }, [lat, lng, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};

export default Map;
