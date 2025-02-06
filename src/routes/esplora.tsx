import Map from "~/components/Map";

export default function Esplora() {
  return (
    <div class="flex h-screen m-20 mx-10">
      <div class="w-1/2 overflow-y-auto">
        <div class="p-4">
          <h1 class="text-4xl">Esplora</h1>
        </div>
      </div>

      <div class="w-1/2 fixed right-20 top-32 h-screen">
        <div id="map-container" class="h-full">
          <Map
            markers={[
              { position: [43.1121, 12.3899], popupText: "Piazza IV Novembre" },
              {
                position: [43.1044, 12.3889],
                popupText: "Stazione FS Perugia",
              },
              {
                position: [43.1189, 12.3747],
                popupText: "Università degli Studi di Perugia",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
