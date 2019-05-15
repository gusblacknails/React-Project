import React from "react";
import { Carousel } from "./components/carousel";

// old way
// export function Home() {
//     return (
//         <div >

//         </div>
//     )
// }

// no return need anymore
export const Home = () => (
  <div>
    <header>
      <span>ADSO</span>
      <span className="adso">FILMS</span>
    </header>
    <section id="row1">
      <h1 className="sectionTitle">Estrenos:</h1>
      <div id="mySidenav" className="sidenav" />
      <Carousel />
    </section>
  </div>
);
