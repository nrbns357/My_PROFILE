import React from 'react';
import "./App.css";
import Footer from "./page/footerBar/FooterBar";
import Main from "./page/mainBar/MainBar"

document.title ="코딩 마법사 금현호입니다.";

const App = () => {
  return (
    <>
      <Main/>
      <Footer/>
    </>
  );
};

export default App;