import "./App.css";
// Default theme
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { sliders } from "./assets/slider";
import { useEffect, useState } from "react";
import { cards } from "./assets/cards";

function App() {
  const [maxWindow, setMaxWindow] = useState(true);

  const options = {
    type: "loop",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setMaxWindow(true);
      } else {
        setMaxWindow(false);
      }
    };

    // Agregar el listener para el evento resize
    window.addEventListener("resize", handleResize);

    // Llama a handleResize una vez para establecer el valor inicial
    handleResize();

    // Eliminar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]); // Dependencia actualizada para que el efecto se vuelva a ejecutar cuando cambie el tamaño de la ventana

  console.log(maxWindow);

  return (
    <>
      <div className="div__container">
        <h1>Prueba tecnica</h1>
        <Splide
          options={options}
          aria-labelledby="autoplay-example-heading"
          className="home__section__one home__section__carousel"
        >
          {sliders?.map((slider) => (
            <SplideSlide key={slider.id}>
              {maxWindow ? (
                <img src={slider.linkImg} alt="" />
              ) : (
                <img src={slider.linkImgMobile} alt="" />
              )}
            </SplideSlide>
          ))}
        </Splide>
        <section className="sectionOne">
          {cards?.map((card) => (
            <article key={card.id} className="card_container">
              <img src={card.linkImg} alt="" />
              <div className="card_dataContainer">
                <a href="https://www.google.com/maps" target="_blank">
                  {" "}
                  <i class="bx bx-map-pin"></i> {card.location}
                </a>
                <h2>{card.title}</h2>
                <ul>
                  <li>
                    <i className="bx bx-time"></i>
                    {card.houre}
                  </li>
                  <li>
                    <i className="bx bx-map"></i>
                    {card.location2}
                  </li>
                </ul>

                <p>
                  <b>Clasificación del evento: </b>
                  {card.eventCalification}
                </p>
              </div>
              <div className="card_buttons">
                <button>Seleccionar</button>
                <button>Promociones</button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
