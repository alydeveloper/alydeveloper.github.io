import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

import Landing from './components/Landing';
// import Register from './components/Register';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import MyListings from './components/MyListings';
// import NewListing from './components/NewListing';
// import EditListing from './components/EditListing';
// import PublishListing from './components/PublishListing';
// import ListingRequests from './components/ListingRequests';
// import BookingRequest from './components/BookingRequest';
// import ListingInfo from './components/ListingInfo';

const PageList = () => {
//   const [token, setToken] = React.useState(null);

//   React.useEffect(() => {
//     const checktoken = localStorage.getItem('token');
//     if (checktoken) {
//       setToken(checktoken);
//     }
//   }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        {/* <Route path='/register' element={<Register token={token} setToken={setToken} />} />
        <Route path='/login' element={<Login token={token} setToken={setToken} />} />
        
        <Route path='/mylistings' element={<MyListings token={token} setToken={setToken} />} />
        <Route path='/newlisting' element={<NewListing token={token} setToken={setToken} />} />
        <Route path='/editlisting/:listingId' element={<EditListing token={token} setToken={setToken} />} />
        <Route path='/publishlisting/:listingId' element={<PublishListing token={token} setToken={setToken} />} />
        <Route path='/listingrequests/:listingId' element={<ListingRequests token={token} setToken={setToken} />} />
        <Route path='/bookingRequest/:listingId' element={<BookingRequest token={token} setToken={setToken} />} />
        <Route path='/listings/:listingId' element={<ListingInfo token={token} setToken={setToken} />} /> */}
      </Routes>
    </>
  );
}

export default PageList;
