import React, { useState, useEffect } from 'react';
import Header from '../src/component/Header';
import VideoCard from '../src/component/VideoCard';
import '../src/style.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      fetch(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${searchQuery}&numResults=10`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('API Response:', data); // Log the response to the console
          setSearchResults(data.results);
          setError(null); // Clear any previous errors
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setSearchResults([]); // Clear search results on error
          setError(error.message); // Set the error message
        });
    }
  }, [searchQuery]);

  return (
    <div className="App">
      <Header onSearch={(query) => setSearchQuery(query)} />
      <div className="results">
        {error ? (
          <p>Error: {error}</p>
        ) : searchResults && searchResults.length > 0 ? (
          searchResults.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
