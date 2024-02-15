import './cards.css'
import Albums from '../albums.svg'

import Card from 'react-bootstrap/Card';




export function AlbumCard() {
    return (
      <Card className='cards'>
        <Card.Img variant="top" src={Albums}/>
           <h6>Albums</h6>
        </Card>
    );
  }
  
  export default AlbumCard;


