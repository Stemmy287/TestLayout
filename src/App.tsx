import React from 'react';
import s from './app.module.scss';
import {Footer} from "components/Footer/Footer";
import {Main} from "components/Main/Main";
import {Header} from "components/Header/Header";
import {Light} from "common/components/Light/Ligth";

function App() {
  return (
    <div className={s.container}>
      <Light/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
