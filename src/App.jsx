import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/header";
import DogCard from "./components/MyCard";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <div className="container">
        <div className="header-container">
          <Header title="Adopta un perrito" />
        </div>
        <div className="cards">
          <div className="card-container">
            <DogCard
              className="card"
              source="https://media.istockphoto.com/id/517517961/es/foto/cachorro-husky-sencuentra-en-el-c%C3%A9sped-y-mirando-lejos.jpg?s=612x612&w=0&k=20&c=QSr1hOOskTSy5y3ynQkG9IvkvsnOFq5Ci26XLmeTBlo="
              title="Bartolo"
              description="Lleno de energía y listo
              para jugar. ¡Dale a Bartolo
              el hogar amoroso que se
              merece!"
              color="success"
              text="Husky"
            />
          </div>
          <div className="card-container">
            <DogCard
              className="card"
              source="https://media.istockphoto.com/id/93392743/es/foto/bobtail.jpg?s=612x612&w=0&k=20&c=3RvxzR_kp11bo5a2GTChfGnU90ybnIPjBfj46iPc8QI="
              title="Messi"
              description="Es juguetón, amigable y
              se lleva bien con niños y
              otros animales. ¡Haz de
              Messi parte de tu familia
              hoy mismo!"
              color="primary"
              text="Bobtail"
            />
          </div>
          <div className="card-container">
            <DogCard
              className="card"
              source="https://cdn.pixabay.com/photo/2022/05/26/16/09/dog-7223233_640.jpg"
              title="Gohan"
              description="Un perro de tamaño
              mediano con un corazón
              gigante. Hazte amigo de
              Gohan y experimenta un
              amor incondicional!"
              color="danger"
              text="Shar Pei"
            />
          </div>
          <div className="card-container">
            <DogCard
              className="card"
              source="https://cdn.pixabay.com/photo/2020/07/06/03/57/beagle-5375285_640.jpg"
              title="Princesa"
              description="Es una compañera leal y
              cariñosa que adora los
              mimos y los abrazos.
              ¡Ayuda a Princesa a
              encontrar su final feliz!"
              color="warning"
              text="Beagle"
            />
          </div>
        </div>
        <div className="footer-container">
          <Footer
            description="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con
diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro
y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre."
          />
        </div>
      </div>
    </>
  );
}

export default App;
