import Card from 'react-bootstrap/Card';
import BadgeUno from './Tags';


function CardUno({img,nombre,descripcion,color,texto}) {
  return (
    <Card className='m-2' style={{ width: '18rem'}}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <BadgeUno ra={color} te={texto}/>
      </Card.Body>
    </Card>
  );
}

export default CardUno;
  