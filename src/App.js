import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import VideoCard from './component/VideoCard.js';

import './component/style.css';
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      fetch(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${searchQuery}&numResults=10`)
        .then(response => response.json())
        .then(data => {setSearchResults(data)
          console.log(data)
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [searchQuery]);

  return (
    <div className="App">
    <Header onSearch={(query) => setSearchQuery(query)} />
    <div className="results">
      {Array.isArray(searchResults.results) && searchResults.results.length > 0 ? (
        searchResults.results.map((video, index) => (
          <VideoCard key={index} video={video} query={searchQuery} />
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  </div>
  );
}

export default App;
