import './App.css'
import Header from './compnents/header'
import Footer from './compnents/footer'
import Card from './compnents/card'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
    <Header titulo='Adopta Un Perrito'/>
    <Card 
          img='https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg' 
          nombre='Alma' 
          descripcion='Lindo perrito'
    />
        <Card 
          img='https://images.dog.ceo/breeds/hound-afghan/n02088094_1004.jpg' 
          nombre='Barto' 
          descripcion='Lindo perrito'
    />
        <Card 
          img='https://images.dog.ceo/breeds/hound-afghan/n02088094_1005.jpg' 
          nombre='Cano' 
          descripcion='Lindo perrito'
    />
        <Card 
          img='https://images.dog.ceo/breeds/hound-afghan/n02088094_1006.jpg' 
          nombre='Dago' 
          descripcion='Lindo perrito'
    />
    <Footer/>
    </>
  )
}

export default App
