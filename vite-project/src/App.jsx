import "./App.css";
import Header from "./compnents/Header";
import Footer from "./compnents/Footer";
import Card from "./compnents/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <Header titulo="Adopta Un Perrito" />
          </div>
        </div>
        <div className="row">
          <Card
            img="https:\/\/images.dog.ceo\/breeds\/terrier-american\/n02093428_16386.jpg"
            nombre="Alma"
            descripcion="Conocido por su personalidad amigable y activa, el Labrador Retriever es un perro inteligente y leal. Su pelaje corto y denso, que puede ser negro, amarillo o chocolate, es fácil de cuidar. Son excelentes compañeros para familias y personas activas, disfrutando de actividades al aire libre y siendo muy amigables con otros animales y personas."
            texto='Labrador Retriever'
            color='primary'
          />
          <Card
            img="https:\/\/images.dog.ceo\/breeds\/spitz-japanese\/tofu.jpg"
            nombre="Bartolo"
            descripcion="A pesar de su apariencia robusta, el Bulldog Inglés es un perro gentil y cariñoso. Su cuerpo musculoso está cubierto por un pelaje corto y suave de varios colores. Son leales y tranquilos, aunque pueden ser tercos a veces, siendo ideales para personas que buscan un compañero relajado y de bajo mantenimiento en cuanto a ejercicio."
            texto='Bulldog Inglés'
            color='success'
          />
          <Card
            img="https:\/\/images.dog.ceo\/breeds\/pug\/n02110958_15364.jpg"
            nombre="Candy"
            descripcion="Conocido por su inteligencia y habilidad para el trabajo, el Border Collie es un perro activo que necesita mucho ejercicio y estimulación mental. Su pelaje doble y denso puede ser de varios colores. Son leales, cariñosos y trabajadores, ideales para hogares activos y personas que disfrutan de actividades al aire libre."
            texto='Border Collie'
            color='danger'
          />
          <Card
            img="https:\/\/images.dog.ceo\/breeds\/havanese\/00100trPORTRAIT_00100_BURST20191126134713895_COVER.jpg"
            nombre="Drago"
            descripcion="Con su pelaje blanco y manchas negras distintivas, el Dálmata es un perro activo y enérgico que necesita mucho ejercicio. Son versátiles y pueden participar en diversas actividades, siendo inteligentes y fáciles de entrenar. Son cariñosos, leales y enérgicos, ideales para hogares activos y personas que pueden proporcionarles la estimulación que necesitan."
            texto='Dálmata'
            color='warning'
          />
        </div>
        <div className="row">
          <div className="col-md-12 mt-5">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
