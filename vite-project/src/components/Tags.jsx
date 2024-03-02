import Badge from 'react-bootstrap/Badge';


function BadgeUno({ra,te}) {
  return (
    <>
    <Badge bg={ra}>{te}</Badge>
    </>
  );
}

export default BadgeUno;