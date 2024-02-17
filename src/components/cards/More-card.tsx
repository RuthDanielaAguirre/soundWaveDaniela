import { Card } from 'react-bootstrap';
import more from '../../assets/more.svg'

export function MoreCard() {
    return (
      <Card className='cards'>
        <Card.Img variant="top" src={more}/>
          <h5>More</h5>
        
      </Card>
    );
  }
  
  export default MoreCard;