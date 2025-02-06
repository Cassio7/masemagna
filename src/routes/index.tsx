import Card from "~/components/card/Card";

export default function Home() {
  return (
    <main class="text-center mx-auto">
      <div class="color_back">
        <div class="flex flex-col">
          <div>
            <h1 class="normal_sottotitolo pt-16" >
              Quando non sai dove andà, <br /> cerca al...
            </h1>
          </div>
          <div>
            <h1 class="title-main mt-26" style={{ "font-size": "13vw" }}>
              {/* <div class="-mb-40">
                <img
                  class="img-flip"
                  src="assets/icons/pig.png"
                  alt="logo"
                  style={{ height: "11vw", width: "11vw" }}
                />
              </div> */}
              Masemagna
            </h1>
          </div>
          <div>
            <h1 class="normal_sottomain mt-14 mb-48">
              Fidati di noi per trovare sempre la qualità e il risparmio <br />i
              soldi en pochi e i tribbli en tanti
            </h1>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-evenly py-28">
        <div>
          <Card
            title="semplicita"
            image="assets/icons/ramen.png"
            img_alt="ramen"
            description="dededed"
          />
        </div>
        <div>
          <Card
            title="Cibo Etnico"
            image="assets/icons/ramen.png"
            img_alt="ramen"
            description="Amo tantissimo il cibo etnico"
          />
        </div>
        <div>
          <Card
            title="TESTO"
            image="assets/icons/ramen.png"
            img_alt="ramen"
            description="dededed"
          />
        </div>
      </div>
      <div class="justify-center"></div>
    </main>
  );
}
