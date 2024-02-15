import { Card } from 'react-bootstrap';
import micro from '../microphone.svg'

export function MicroCard() {
    return (
      <Card className='cards'>
        <Card.Img variant="top" src={micro}/>
          <h5>Charts</h5>
      </Card>
    );
  }
  
  export default MicroCard;