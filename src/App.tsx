import React from 'react';
import s from './app.module.scss';
import {Footer} from "components/Footer/Footer";
import {Main} from "components/Main/Main";
import {Header} from "components/Header/Header";
import PurpleLight from "common/image/purple light.png";
import PurpleBall from "common/image/purple ball.png";
import RedBall from "common/image/red ball-1.png";
import RedBallSmall from "common/image/red ball.png";
import RedLight from "common/image/red light.png";

function App() {
  return (
    <div className={s.container}>
      <div className={s.backGroundBalls}>
        <img className={s.purpleLight} src={PurpleLight} alt="purple light"/>
        <img className={s.purpleBall} src={PurpleBall} alt="purple ball"/>
        <img className={s.redBall} src={RedBall} alt="red ball"/>
        <img className={s.redBallSmall} src={RedBallSmall} alt="red ball small"/>
        <img className={s.redLight} src={RedLight} alt="red light"/>
      </div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
