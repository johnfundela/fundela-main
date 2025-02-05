/* 
Since the map was loaded on client side, 
we need to make this component client rendered as well else error occurs
*/
"use client";

//Map component Component from library
import { GoogleMap,  Marker } from "@react-google-maps/api";

//Map's styling
export const defaultMapContainerStyle = {
  width: "100%",
  height: "80vh",
  borderRadius: "15px 0px 0px 15px",
};

const MapComponent = () => {
  const defaultMapCenter = {
    lat: 40.7063401,
    lng: -74.0134924,
  };

  const defaultMapZoom = 17;

  const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: "auto",
    mapTypeId: "hybrid",
  };

  return (
    <div className="justify-center flex p-2 pb-20">
      <div className="w-full 2xl:w-10/12 ">
        <GoogleMap
          mapContainerStyle={defaultMapContainerStyle}
          center={defaultMapCenter}
          zoom={defaultMapZoom}
          options={defaultMapOptions}
        >
          {/* <InfoWindow position={anchor} zIndex={1}>
          <h1>39 Broadway, Ste. 650, New York, NY, 10006</h1>
        </InfoWindow> */}
          <Marker position={defaultMapCenter} zIndex={2}></Marker>
        </GoogleMap>
      </div>
    </div>
  );
};

export { MapComponent };
