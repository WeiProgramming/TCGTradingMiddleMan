import { Button, ButtonGroup } from '@material-ui/core'
import React from 'react'
import './landing.css'
import { Link } from 'react-router-dom'

let exampleData = {
  id: 38369349,
  name: 'Manga Ryu-Ran',
  type: 'Toon Monster',
  desc:
    '(This card is always treated as a "Toon" card.)\nCannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) by Tributing 2 monsters, while you control "Toon World". Cannot attack the turn it is Special Summoned. You must pay 500 LP to declare an attack with this monster. If "Toon World" on the field is destroyed, destroy this card. Can attack your opponent directly, unless they control a Toon monster, in which case this card must target a Toon monster for its attacks.',
  atk: 2200,
  def: 2600,
  level: 7,
  race: 'Dragon',
  attribute: 'FIRE',
  archetype: 'Toon',
  card_sets: [
    {
      set_name: 'Dark Beginning 1',
      set_code: 'DB1-EN038',
      set_rarity: 'Common',
      set_rarity_code: '(C)',
      set_price: '1.08',
    },
  ],
  card_images: [
    {
      id: 38369349,
      image_url:
        'https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg',
      image_url_small:
        'https://storage.googleapis.com/ygoprodeck.com/pics_small/38369349.jpg',
    },
  ],
  card_prices: [
    {
      cardmarket_price: '0.08',
      tcgplayer_price: '0.13',
      ebay_price: '2.00',
      amazon_price: '0.78',
      coolstuffinc_price: '0.49',
    },
  ],
}

function LandingPage() {
  return (
    <div className="landing">
      <div className="landing__header">
        <h1>Trades Are Happening Now!</h1>
      </div>

      <section className="hero">
        <div className="hero__view-container">
          <div className="hero__left">
            <div className="hero__header">
              <div>
                <h2>Popular trades</h2>
              </div>
            </div>
            <div className="hero__trade-list">
              <div className="hero__img-container">
                <img
                  className="hero_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="hero__img-container">
                <img
                  className="hero_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="hero__img-container">
                <img
                  className="hero_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="hero__img-container">
                <img
                  className="hero_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="hero__img-container">
                <img
                  className="hero_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
            </div>
          </div>
          <div className="hero__right">
            <div className="hero__header">
              <div>
                <h2>Recent trades</h2>
              </div>
            </div>
            <div className="hero__trade-list">
              <div className="hero__img-container">
                <img
                  className="hero_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="hero__img-container">
                <img
                  className="hero_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="hero__img-container">
                <img
                  className="hero_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="hero__img-container">
                <img
                  className="hero_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="hero__img-container">
                <img
                  className="hero_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="hero__img-container">
                <img
                  className="hero_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="hero__img-container">
                <img
                  className="hero_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
              <div className="hero__img-container">
                <img
                  className="hero_img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hero__signup">
          <Button
            component={Link}
            to={'/auth'}
            variant="outlined"
            color="primary"
          >
            Sign Up Today
          </Button>
        </div>
      </section>
      <section className="about">
        <div className="about__header">
          <h1>Easy Trading</h1>
        </div>
        <div className="about__container">
          <div className="about__item">
            <div className="about__header">
              <h2>Post Up</h2>
            </div>
            <div className="about__description">
              <p>Put up your card you want to trade</p>
            </div>
          </div>
          <div className="about__item">
            <div className="about__header">
              <h2>Get Offers</h2>
            </div>
            <div className="about__description">
              <p>Others will contact you through our easy and intuitive ui</p>
            </div>
          </div>
          <div className="about__item">
            <div className="about__header">
              <h2>Trade it</h2>
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
    </div>
  )
}

export default LandingPage
