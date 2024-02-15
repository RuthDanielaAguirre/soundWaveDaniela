import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.css'

function JoinForm() {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <br />
        <input type="text"  />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <br />
        <input type="email"  />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <br />
        <input type="password" />
    </Form.Group>
    
        
    <Button variant="primary" type="submit">
        Join Now
    </Button>
    </Form>
  );
}

export default JoinForm;