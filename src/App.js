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
    if (event.keyCode == 13) {
      handleSearch();
    }
  }

  const handleSearch = async () => {
    setUrls([])
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
        <div className='header'>
          <div className='search'>
            <FormControl className='searchbar' placeholder="Enter a query: " onKeyUp={handleKeyUp} />
            <Button variant="primary" onClick={handleSearch}>
              Search
            </Button>
          </div>
          {time && <p className='timer'>Results found in {time.toFixed(4)} milliseconds!</p>}
        </div>
        <div className='results'>
          {
            urls.map((url, index) => <div key={`result-${index}`} className='result'>
              <a target="_blank" rel="noopener noreferrer" href={url}>{url}</a>
            </div>)
          }
        </div>
      </InputGroup>
    </div>
  );
}

export default App;
