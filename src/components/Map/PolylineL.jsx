import React, { useEffect } from "react";
import L from "leaflet";
import { Polyline, Popup, useMap } from "react-leaflet";

function PolylineL({ points }) {
  const map = useMap();

  useEffect(() => {
    if (points.length > 0) {
      let pLineGroup = L.layerGroup();

      pLineGroup.addLayer(L.polyline(points));
      pLineGroup.addTo(map);
      pLineGroup.removeFrom(map);

      const bounds = pLineGroup.getLayers()[0]._bounds;
      if (Object.keys(bounds).length > 0) {
        map.fitBounds(bounds);
      }
    }
  }, [points, map]);

  return (
    <Polyline color={"red"} opacity={0.7} weight={3} positions={points}>
      <Popup>Polygon</Popup>
    </Polyline>
  );
}

export default PolylineL;
