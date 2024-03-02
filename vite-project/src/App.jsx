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
            descripcion="Lindo perrito"
            texto='Raza 1'
            color='primary'
          />
          <Card
            img="https:\/\/images.dog.ceo\/breeds\/spitz-japanese\/tofu.jpg"
            nombre="Alma"
            descripcion="Lindo perrito"
            texto='Raza 2'
            color='success'
          />
          <Card
            img="https:\/\/images.dog.ceo\/breeds\/pug\/n02110958_15364.jpg"
            nombre="Alma"
            descripcion="Lindo perrito"
            texto='raza555'
            color='danger'
          />
          <Card
            img="https:\/\/images.dog.ceo\/breeds\/havanese\/00100trPORTRAIT_00100_BURST20191126134713895_COVER.jpg"
            nombre="Alma"
            descripcion="Lindo perrito"
            texto='raza4'
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
