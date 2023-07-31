import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import { useSelector } from "react-redux";
import MarkerL from "./MarkerL";
import PolylineL from "./PolylineL";
import { Spin, Space } from "antd";

function InitMap() {
  const { route, loading } = useSelector((state) => state.route);
  const [points, setPoints] = useState([]);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (route) {
      const points = route.routes[0].geometry.coordinates.map((arr) => [
        arr[1],
        arr[0],
      ]);
      setPoints(points);
      const markersPoints = route.waypoints.map((el) => {
        return [...el.location].reverse();
      });
      setMarkers(markersPoints);
    }
  }, [route]);

  return (
    <>
      {loading ? (
        <Space
          direction="vertical"
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin size="large" />
        </Space>
      ) : (
        <MapContainer
          center={[59.9342802, 30.3350986]}
          zoom={7}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <PolylineL points={points} />
          {markers.map((marker, idx) => {
            let popupText = `Точка  ${idx + 1}`;
            return <MarkerL key={idx} position={marker} text={popupText} />;
          })}
        </MapContainer>
      )}
    </>
  );
}

export default InitMap;
