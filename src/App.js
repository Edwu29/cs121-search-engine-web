import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Form>
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control placeholder="Enter a query"></Form.Control>
        </Form.Group>
         <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default App;
