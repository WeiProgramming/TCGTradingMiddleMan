import { Button, ButtonGroup } from '@material-ui/core'
import React, {useState} from 'react'
import './landing.css'
import { Link } from 'react-router-dom'
import { BsUpload, BsCardText, BsFillReplyAllFill } from 'react-icons/bs'
import logo from '../../assets/icons/logo-placeholder.png'
import ygoLogo from '../../assets/images/ygo-logo.png'
import pokeLogo from '../../assets/images/pokemon-logo.png'
import mtgLogo from '../../assets/images/mtg-logo.png'

function LandingPage(props) {
  let [tcgType, setTcgType] = useState('all');

  let handleOnTcgClick = (tcgName) => {
    setTcgType(tcgName);
  }
  return (
    <div className="landing">
      <section className={`landing__banner ${tcgType}`}>
        <div className="landing__overlay"></div>
        <div className="landing__header">
          <img src={logo} alt="company logo"/>
          <h1>Trades Are Happening Now!</h1>
          <Button
            component={Link}
            to={'/login'}
            variant="contained"
            color="primary"
          >
            <strong>Sign Up Today</strong>
          </Button>
        </div>
      </section>
      <section className="tcg">
        <div className="tcg__item-container" onClick={(e) => handleOnTcgClick('all')}>
          <h3>Welcome</h3>
        </div>
        <div className="tcg__item-container" onClick={(e) => handleOnTcgClick('poke')}>
        <img src={pokeLogo}/>
        </div>
        <div className="tcg__item-container" onClick={(e) => handleOnTcgClick('mtg')}>
        <img src={mtgLogo}/>
        </div>
        <div className="tcg__item-container" onClick={(e) => handleOnTcgClick('ygo')}>
        <img src={ygoLogo}/>
        </div>
      </section> 
      <section className="trade">
        <div className="trade__view-container">
          <div className="trade__left">
            <div className="trade__header">
                <h1>Popular trades</h1>
            </div>
            <div className="trade__trade-list">
              <div className="trade__img-container">
                <img
                  className="trade_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="trade__img-container">
                <img
                  className="trade_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="trade__img-container">
                <img
                  className="trade_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="trade__img-container">
                <img
                  className="trade_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
            </div>
          </div>
          <div className="trade__right">
            <div className="trade__header">
                <h1>Recent trades</h1>
            </div>
            <div className="trade__trade-list">
              <div className="trade__img-container">
                <img
                  className="trade_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="trade__img-container">
                <img
                  className="trade_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="trade__img-container">
                <img
                  className="trade_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="trade__img-container">
                <img
                  className="trade_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="trade__img-container">
                <img
                  className="trade_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="trade__img-container">
                <img
                  className="trade_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="trade__img-container">
                <img
                  className="trade_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="trade__img-container">
                <img
                  className="trade_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="trade__signup">
          <Button
            component={Link}
            to={'/auth'}
            variant="contained"
            color="primary"
          >
            <strong>Sign Up Today</strong>
          </Button>
        </div>
      </section>
      <section className="about">
        <div className="about__section-header">
          <h1>Easy Trading</h1>
        </div>
        <div className="about__container">
          <div className="about__item">
            <div className="about__header">
              <h2>
                Post Up <BsUpload />
              </h2>
            </div>
            <div className="about__description">
              <p>Put up your card you want to trade</p>
            </div>
          </div>
          <div className="about__item">
            <div className="about__header">
              <h2>
                Get Offers <BsCardText />
              </h2>
            </div>
            <div className="about__description">
              <p>Others will contact you through our easy and intuitive ui</p>
            </div>
          </div>
          <div className="about__item">
            <div className="about__header">
              <h2>
                Trade it <BsFillReplyAllFill />
              </h2>
            </div>
            <div className="about__description">
              <p>
                Once confirmed we will mail you a top loader and a prepaid mail,
                send your card and we will do the rest.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="newsletter">
        <div className="newsletter__container">
          <h4>Sign up to our newsletter for the latest news and exclusive deals</h4>
            <Button
            component={Link}
            to={'/auth'}
            variant="contained"
            color="primary"
            >
            <strong>Sign Up Today</strong>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
