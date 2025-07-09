import { useState } from "react";

import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <UserProfile 
      name="Adejare" 
      age={26} 
      bio="I Love Coding!" 
      />
      <Footer />
    </>
  );
}

export default App;
