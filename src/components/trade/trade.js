import React, { useState, useEffect } from 'react'
import {
  Paper,
  Button
} from '@material-ui/core'
import axios from 'axios'
import { searchCard } from '../../services/api/ygo'
import './trade.css'

function TradeComponent() {
  let [searchWord, setSearchWord] = useState('')
  let [searchCards, setSearchCards] = useState({})
  let [selectedTradeCard, setSelectedTradeCard] = useState('');
  let [selectedOfferCard, setSelectedOfferCard] = useState('');
  let [leftActive, setLeftActive] = useState(true)
  let [rightActive, setRightActive] = useState(false)
  let [offerCheckBox, setOfferCheckBox] = useState([]);
  let [offerFormData, setOfferFormData] = useState({
    cardId: selectedOfferCard
  });
  let [tradeFormData, setTradeFormData] = useState({
    cardId: selectedTradeCard
  });

  useEffect(() => {
    console.log('exec ', searchCard(searchWord))
    async function getSearchedWord() {
      await axios
        .get(searchCard(searchWord))
        .then((res) => {
          if (res.data.hasOwnProperty('cards')) {
            let newCardObj = Object.assign({}, res.data)
            setSearchCards((prevSearchRes) => ({
              ...prevSearchRes,
              cards: [...newCardObj['cards']],
            }))
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }
    if (searchWord !== '') {
      getSearchedWord()
    }
  }, [])

  async function getSearchedWord() {
    await axios
      .get(searchCard(searchWord))
      .then((res) => {
        if (res.data.hasOwnProperty('cards')) {
          let newCardObj = Object.assign({}, res.data)
          setSearchCards((prevSearchRes) => ({
            ...prevSearchRes,
            cards: [...newCardObj['cards']],
          }))
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  let updateSearchWord = (event) => {
    setSearchWord(`${event.target.value}`)
  }

  let handleOnSearch = () => {
    console.log('searching ', searchWord)
    let searchResult = getSearchedWord()
    console.log('search result from click ', searchResult)
  }

  let handleFormSubmitClick = (event, formType) => {
    if(formType === 'left') {
      setRightActive(true);
      setLeftActive(false);
    } else if(formType === 'right') {
      setRightActive(false);
      setLeftActive(true);
    }
  }

  let handleSelectedCard = (cardId,formType) => {
    if(formType === 'left') {
      setSelectedOfferCard(cardId)
    }
    if(formType === 'right') {
      setSelectedTradeCard(cardId)
    }
  }

  let handleOfferFormChange = (e) => {
    setOfferFormData({
      ...offerFormData,
      [e.target.name]: e.target.value,
    })
  }
  
  let handleTradeFormChange = (e) => {
    setTradeFormData({
      ...tradeFormData,
      [e.target.name]: e.target.value,
    })
  }

console.table('trade form data ', tradeFormData);
console.table('offer form data ', offerFormData);
console.table(' ', offerCheckBox);
  return (
    <div className="trade">
      <form className="" noValidate autoComplete="off">
        <div className="trade-container">
          <div className={`trade-left-form ${leftActive ? 'active' : ''}`}>
              <div className="trade__input-container">
                <fieldset>
                  <legend>Find Your Card</legend>
                  <label htmlFor="search-input">Search Card</label>
                <div className="trade__search-inline">
                  <input id="search-input" placeholder={`${'Dark Magician'}`} className="search-input" name="search-input" value={searchWord} onChange={(e) => updateSearchWord(e)}/>
                  <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => handleOnSearch(e)}
                  className="trade__search-btn"
                >
                  Search
                </Button>
                </div> 
                </fieldset>
              </div>
            <div className="trade-left-form__card-search-container">
              {/* {searchCards.hasOwnProperty('cards') ? (
                searchCards['cards'].map((card) => {
                  return (
                    <div key={card['id']}>
                      <img
                        src={card['card_images'][0]['image_url_small']}
                        alt={card['card_images'][0]['image_url_small']}
                        className="trade-left-form__card-img"
                      />
                    </div>
                  )
                })
              ) : (
                <div>
                  <h1>None Found</h1>
                </div>
              )} */}
              <div className="trade__img-container">
                <img className="" src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="card" onClick={() => handleSelectedCard('cardId', 'left')} name="cardId"/>
              </div>
            </div>
            <div className="trade__dropdown-container">
              <fieldset>
                <legend>Card Set</legend>
              <label htmlFor="card-set-label">From which card set?</label>
              <select id="card-set-label" fullWidth={false} name="setName" onChange={(e) => {handleTradeFormChange(e)}}>
                <option value={'LOB'}>Legend Of Blue Eyes</option>
                <option value={'PS'}>Pharoah's Servant</option>
              </select>
              </fieldset>
            </div>
            <div className="trade__radio-container" onChange={(e) => {handleTradeFormChange(e)}}>
              <fieldset>
              <legend>Card Condition?</legend>
              <div>
                <label htmlFor="condition-new">New</label>
                <input type="radio" id="condition-new" name="card-condition" value="1"/>
              </div>
              <div>
                <label htmlFor="condition-new">New Used</label>
                <input type="radio" id="condition-new" name="card-condition" value="2"/>
              </div>
              <div>
                <label htmlFor="condition-new">Used</label>
                <input type="radio" id="condition-new" name="card-condition" value="3"/>
              </div>
              <div>
                <label htmlFor="condition-new">Heavily Used</label>
                <input type="radio" id="condition-new" name="card-condition" value="4"/>
              </div>
              </fieldset>
            </div>
            <div className="trade__radio-container" onChange={(e) => {handleTradeFormChange(e)}}>
              <fieldset>
              <legend>Edition?</legend>
              <div>
                <label htmlFor="edition-first">First</label>
                <input type="radio" id="edition-first" name="card-edition" value="1"/>
              </div>
              <div>
                <label htmlFor="condition-new">New Used</label>
                <input type="radio" id="condition-new" name="card-edition" value="2"/>
              </div>
              <div>
                <label htmlFor="condition-new">Used</label>
                <input type="radio" id="condition-new" name="card-edition" value="3"/>
              </div>
              <div>
                <label htmlFor="condition-new">Heavily Used</label>
                <input type="radio" id="condition-new" name="card-edition" value="4"/>
              </div>
              </fieldset>
            </div>
            <Button 
            variant="outlined" 
            color="primary" 
            onClick={(event) => handleFormSubmitClick(event, 'left')}>Go To Trade Form</Button>
          </div>

          <div className={`trade-right-form ${rightActive ? 'active' : ''}`}>
            <div className="trade__checkbox-container" >
              <fieldset>
                <legend>What are you willing to trade it for?</legend>
                <div className="trade__checkbox-item">
                  <label>$ Money</label>
                  <input 
                  id="check-money" 
                  type="checkbox" 
                  name="check-money" 
                  value="money"
                  onChange={(e) => {
                    setOfferCheckBox((prevArr) => 
                      [...prevArr, { isChecked: e.target.checked, [e.target.name]: e.target.value}]
                    )
                  }}/>
                  <div className="trade__search-inline">
                  <input id="search-input" placeholder={`${'Dark Magician'}`} className="search-input" name="search-input" value={searchWord} onChange={(e) => updateSearchWord(e)}/>
                  <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => handleOnSearch(e)}
                  className="trade__search-btn"
                >
                  Enter Amount
                </Button>
                </div> 
                </div>
                <div className="trade__checkbox-item">
                  <label>Cards</label>
                  <input 
                  id="check-card" 
                  type="checkbox" 
                  name="check-card" 
                  value="cards"
                  onChange={(e) => {
                    setOfferCheckBox((prev) => 
                      [...prev, {isChecked : e.target.checked, [e.target.name] : e.target.value}]
                    )
                    }}/>
                </div>
              </fieldset>
            </div>
            <div className="trade__input-container">
                <fieldset>
                  <legend>Find Your Card</legend>
                  <label htmlFor="search-input">Search Card</label>
                  <div className="trade__search-inline">
                    <input id="search-input" placeholder={`${'Dark Magician'}`} className="search-input" name="search-input" value={searchWord} onChange={(e) => updateSearchWord(e)}/>
                    <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => handleOnSearch(e)}
                >
                  Search
                    </Button>
                  </div> 
                
                </fieldset>
              </div>
            <div className="trade-right-form__card-search-container">
              {/* {searchCards.hasOwnProperty('cards') ? (
                searchCards['cards'].map((card) => {
                  return (
                    <div key={card['id']} onMouseEnter={(e) => {
                      handleOnHoverModal(e)
                    }}> 
                      <img
                        src={card['card_images'][0]['image_url_small']}
                        alt={card['card_images'][0]['image_url_small']}
                        className="trade-right-form__card-img"
                        onChange={(event) => {
                          updateSearchWord(event)
                        }}
                      />
                    </div>
                  )
                })
              ) : (
                <div>
                  <h1>None Found</h1>
                </div>
              )} */}
              <div className="trade__img-container" onClick={() => handleSelectedCard('cardId','right')}>
                <img className="" src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="card"/>
              </div>
            </div>

            <div className="trade__radio-container" onChange={(e) => {handleOfferFormChange(e)}}>
              <fieldset>
              <legend>Card Condition?</legend>
              <div>
                <label htmlFor="condition-new">New</label>
                <input type="radio" id="condition-new" name="card-condition" value="1"/>
              </div>
              <div>
                <label htmlFor="condition-new">New Used</label>
                <input type="radio" id="condition-new" name="card-condition" value="2"/>
              </div>
              <div>
                <label htmlFor="condition-new">Used</label>
                <input type="radio" id="condition-new" name="card-condition" value="3"/>
              </div>
              <div>
                <label htmlFor="condition-new">Heavily Used</label>
                <input type="radio" id="condition-new" name="card-condition" value="4"/>
              </div>
              </fieldset>
            </div>
            <Button
                  variant="contained"
                  color="primary"
                  onClick={(event) => handleFormSubmitClick(event, 'right')}
                >
                  Back
            </Button>
              <Button 
              variant="outlined" 
              color="primary" 
              onClick={(event) => handleFormSubmitClick(event, 'right')}>Submit</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TradeComponent
