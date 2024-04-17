import React, { useState, useEffect } from "react";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import './App.css';
import ScrollToTopButton from './components/scrolltobottom/ScrollToTopButton';
import Loader from './components/loader/Loader';
import Ticket from "./pages/tickets/Ticket";
import SellTicket from "./pages/sell/SellTicket";
import RequestEvent from "./pages/requestEvent/RequestEvent";
import ContactUs from "./pages/contact/ContactUs";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TicketDetail from "./components/ticketDetail/TicketDetail";
import Login from "./pages/Login/Login";
import OrderDetail from "./pages/orderDetail/OrderDetail";
import Checkout from "./pages/checkout/Checkout";
import ChatIcon from "./components/chat/ChatIcon";
// import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
// import TawkMessenger from "@tawk.to/tawk-messenger-react";


function App() {
  const [loading, setLoading] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const measureLoadingTime = () => {
      const { domContentLoadedEventEnd, loadEventEnd } = window.performance.timing;
      const loadingTime = loadEventEnd - domContentLoadedEventEnd; // Calculate loading time
      const minLoadingTime = 1000;

      // Set the loading time as the timeout duration, with a minimum loading time
      setTimeout(() => {
        setLoading(false);
      }, Math.max(loadingTime, minLoadingTime));
    };

    // Check if the performance timing information is available
    if (window.performance && window.performance.timing) {
      measureLoadingTime();
    } else {
      // Fallback to a default loading time if performance timing information is not available
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Default loading time: 1 second
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      // Once loading is complete, set pageLoaded to true
      setPageLoaded(true);
    }
  }, [loading]);

  // Render Loader while loading, and render Header, Home, Footer, and ScrollToTopButton only after the page is loaded
  if (loading) {
    return <Loader />; // Display the Loader component while loading
  }
  if (!pageLoaded) {
    // Display nothing until page loading is complete
    return null;
  }

  return (
    <>

<Router>
      <div>
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ticket" element={<Ticket />} />
          <Route path="/TicketDetail" element={<TicketDetail />} />
          <Route path="/SellTicket" element={<SellTicket />} />
          <Route path="/RequestEvent" element={<RequestEvent />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/OrderDetail" element={<OrderDetail />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
        <ChatIcon/>
      </div>
    </Router>
    {/* <TawkMessengerReact
                propertyId="property_id"
                widgetId="default"/> */}
    </>
  )
}

export default App;
