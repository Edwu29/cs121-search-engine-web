import './App.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [query, setQuery] = useState("");
  const handleKeyUp = (event) => {
    setQuery(event.target.value);
    console.log(event.target.value);
  }
  const handleSearch = () => {

  }
  return (
    <div className="App">
      <Form onSubmit = {handleSearch}>
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control placeholder="Enter a query" onChange = {handleKeyUp}></Form.Control>
        </Form.Group>
         <Button variant="primary" type="submit" >Submit</Button>
      </Form>
    </div>
  );
}

export default App;
