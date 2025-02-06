import { createEffect, onCleanup } from "solid-js";
import "leaflet/dist/leaflet.css";

interface MarkerData {
  position: [number, number];
  popupText: string;
}

interface MapProps {
  markers: MarkerData[];
}

const Map = (props: MapProps) => {
  let mapContainer: HTMLDivElement | undefined;

  createEffect(async () => {
    if (!mapContainer) return;

    const L = await import("leaflet"); // Importa Leaflet solo lato client

    const map = L.map(mapContainer).setView([43.1107, 12.3908], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const markerGroup = L.layerGroup().addTo(map);

    props.markers.forEach(({ position, popupText }) => {
      L.marker(position).addTo(markerGroup).bindPopup(popupText);
    });

    onCleanup(() => {
      map.remove();
    });
  });

  return <div ref={mapContainer} style={{ height: "85%", width: "100%" }} />;
};

export default Map;
