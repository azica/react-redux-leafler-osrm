import React from "react";
import { Marker as CustomMarker, Popup } from "react-leaflet";

function MarkerL({ position, text }) {
  if (!position) return null;
  return (
    <CustomMarker position={position}>
      <Popup>{text}</Popup>
    </CustomMarker>
  );
}

export default MarkerL;
