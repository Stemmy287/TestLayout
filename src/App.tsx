import React from 'react';
import s from './app.module.scss';
import {Footer} from "components/Footer/Footer";
import {Main} from "components/Main/Main";
import {Header} from "components/Header/Header";

function App() {
  return (
    <div className={s.container}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
