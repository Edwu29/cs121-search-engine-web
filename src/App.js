import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import { InputGroup, FormControl } from 'react-bootstrap';
import fetch from 'node-fetch';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let url = "http://127.0.0.1:5000/search";
  const [query, setQuery] = useState("");
  const [urls, setUrls] = useState([]);
  const [time, setTime] = useState("");
  const handleKeyUp = (event) => {
    setQuery(event.target.value);
  }
  const handleSearch = async () => {
    //make API call.
    url = url + "?searchQuery=" + query;
    let response = await fetch(url)
    .then(response => response.json())
    .then(data => {
      setUrls(data.urls)
      setTime(data.time)
    })
    .catch(err => console.log(err))

  }
  return (
    <div className="App">
      <InputGroup >
        <FormControl placeholder = "Enter a query: " onKeyUp = {handleKeyUp}/>
        <Button variant="primary" onClick={handleSearch}>
          Button
        </Button>
      </InputGroup>
    </div>
  );
}

export default App;
