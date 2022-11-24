import React, { useRef, useEffect } from 'react';
import { useMap, useScene, useWebMap, useWebScene, useEvent, useEvents,
          useWatch, useWatches, useGraphic, useGraphics} from 'esri-loader-hooks';

import { setDefaultOptions, loadModules, loadCss } from 'esri-loader';

// before loading the modules for the first time,
// also lazy load the CSS for the version of
// the script that you're loading from the CDN
setDefaultOptions({ css: 'http://server/path/to/esri/css/main.css' });
//
loadModules(['esri/views/MapView', 'esri/WebMap'])
  .then(([MapView, WebMap]) => {
    // the styles, script, and modules have all been loaded (in that order)
  });

const addMarker = (event) => {
  console.log("hola");
}

const Mapa = ({ /*onClick*/ }) => {
  const latitude=-34;
  const longitude=-58;

  const geometry = {
    type: "point",
    latitude,
    longitude
  };

  var symbol = {
    type: "simple-marker",
    color: [226, 119, 40],
  };


  const map = {
    basemap: "streets",
    ground: "world-elevation"
  };

  const options = {
    view: {
      center: [longitude, latitude],
      // center: [15, 65],
      zoom: 4
    }
  };

  const [ref, view]  = useMap(map, options);

  useGraphic(view, { geometry, symbol });

  view.on("double-click", (event) => {
    addMarker(event);
    // The event object contains the mapPoint and the screen coordinates of the location
    // that was clicked.
    console.log("screen point", event.x, event.y);
    console.log("map point", event.mapPoint);
  });

  // useEvent(view, "click", onClick);


  return (<div style={{ width: 400, height: 400 }} ref={ref}></div>);
}

// import WebMap from 'esri/WebMap';
const Mapa2 = () => {

// const [Map, MapView] = loadModules([
//   "esri/Map",
//   "esri/views/MapView"
// ]);
//
// const map = new Map({ basemap: "streets-relief-vector"});
//
// const view = new MapView({ map: map, zoom: 13,
//    container: document.getElementById("map-div")})
let mapRef = useRef(null);

// this will lazy load the ArcGIS API
// and then use Dojo's loader to require the classes
loadModules(['esri/views/MapView', 'esri/Map'])
  .then(([MapView, Map]) => {
    // then we load a web map from an id
    const map = new Map({
      basemap:'streets-relief-vector'
    });
    // and we show that map in a container w/ id #viewDiv
    const view = new MapView({
      map: map,
      container:  mapRef.current,
      center: [0, 0],
      zoom: 8
    });
    console.log(mapRef.current);
  })
  .catch(err => {
    // handle any errors
    console.log(err);
  });

//
//   const mapRef = useRef();
//   useEffect(
//     () => {
//       return () => { view && view.destroy(); };
//     },
//     []
//   );

  return <div className="map-view" ref={mapRef}></div>;
}

export default Mapa;
