import React from 'react';
import SearchBar from './SearchBar'; 


const Header = ({ onSearch }) => {
 
  const handleSearch = (query) => {
    onSearch(query);
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-moVWfx26y6qHQIbijIMgY_Yo1Rvp6FRpw&usqp=CAU'
          alt='logo'
          width="200"
          height='90'
          
        />
        <span className='logo-text'>Personal Trainer</span>
      </div>
      <SearchBar onSearch={handleSearch} />
      <h3 className="text">welcome to your personal fitness</h3>
      <div className="profile-image">
        <img
          src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png'
          alt="Profile"
          width='100'
          height='100'
        />
      </div>
    </header>
  );
};

export default Header;
