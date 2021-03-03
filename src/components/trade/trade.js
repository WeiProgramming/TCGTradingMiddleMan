import React, { useState, useEffect } from 'react'
import {
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Container,
  Paper,
  Checkbox,
  FormGroup,
  Button,
  InputLabel,
  MenuItem,
  Select
} from '@material-ui/core'
import axios from 'axios'
import { searchCard } from '../../services/api/ygo'
import './trade.css'

function TradeComponent() {
  let [searchWord, setSearchWord] = useState('')
  let [searchCards, setSearchCards] = useState({})
  let [condition, setCondition] = useState()
  let [leftActive, setLeftActive] = useState(true)
  let [rightActive, setRightActive] = useState(false)

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

  let handleOnRadioChange = (event) => {
    setCondition(event.target.value);
  }

  let handleOnHoverModal = (event) => {
    console.log(event, 'this is the event');
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


  return (
    <div className="trade">
      <form className="" noValidate autoComplete="off">
        <div className="trade-container">
          <Paper className={`trade-left-form ${leftActive ? 'active' : ''}`}>
              <div className="trade__input-container">
                <fieldset>
                  <legend>Find Your Card</legend>
                  <label for="search-input">Search Card</label>
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
                <img class="" src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="card"/>
              </div>
              <div className="trade__img-container">
                <img class="" src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="card"/>
              </div>
              <div className="trade__img-container">
                <img class="" src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="card"/>
              </div>
              <div className="trade__img-container">
                <img class="" src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="card"/>
              </div>
              <div className="trade__img-container">
                <img class="" src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="card"/>
              </div>
            </div>
            <div className="trade__dropdown-container">
              <fieldset>
                <legend>Card Set</legend>
              <label for="card-set-label">From which card set?</label>
              <select id="card-set-label" fullWidth={false}>
                <option value={'LOB'}>Legend Of Blue Eyes</option>
                <option value={'PS'}>Pharoah's Servant</option>
              </select>
              </fieldset>
            </div>
            <div className="trade__radio-container">
              <fieldset>
              <legend>Card Condition?</legend>
              <div>
                <label for="condition-new">New</label>
                <input type="radio" id="condition-new" name="card-condition"/>
              </div>
              <div>
                <label for="condition-new">New Used</label>
                <input type="radio" id="condition-new" name="card-condition"/>
              </div>
              <div>
                <label for="condition-new">Used</label>
                <input type="radio" id="condition-new" name="card-condition"/>
              </div>
              <div>
                <label for="condition-new">Heavily Used</label>
                <input type="radio" id="condition-new" name="card-condition"/>
              </div>
              </fieldset>
            </div>
            <div className="trade__radio-container">
              <fieldset>
              <legend>Edition?</legend>
              <div>
                <label for="edition-first">First</label>
                <input type="radio" id="edition-first" name="card-edition"/>
              </div>
              <div>
                <label for="condition-new">New Used</label>
                <input type="radio" id="condition-new" name="card-edition"/>
              </div>
              <div>
                <label for="condition-new">Used</label>
                <input type="radio" id="condition-new" name="card-edition"/>
              </div>
              <div>
                <label for="condition-new">Heavily Used</label>
                <input type="radio" id="condition-new" name="card-edition"/>
              </div>
              </fieldset>
            </div>
            <Button variant="outlined" color="primary" onClick={(event) => handleFormSubmitClick(event, 'left')}>Submit</Button>
          </Paper>

          <Paper className={`trade-right-form ${rightActive ? 'active' : ''}`}>
            <div className="trade__checkbox-container">
              <fieldset>
                <legend>What are you willing to trade it for?</legend>
                <div className="trade__checkbox-item">
                  <label>$ Money</label>
                  <input id="check-money" type="checkbox" name="check-money" value="money"/>
                </div>
                <div className="trade__checkbox-item">
                  <label>Cards</label>
                  <input id="check-card" type="checkbox" name="check-card" value="cards"/>
                </div>
              </fieldset>
            </div>
            <div className="trade__input-container">
                <fieldset>
                  <legend>Find Your Card</legend>
                  <label for="search-input">Search Card</label>
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
              <div className="trade__img-container">
                <img class="" src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="card"/>
              </div>
              <div className="trade__img-container">
                <img class="" src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="card"/>
              </div>
              <div className="trade__img-container">
                <img class="" src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="card"/>
              </div>
              <div className="trade__img-container">
                <img class="" src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="card"/>
              </div>
              <div className="trade__img-container">
                <img class="" src="https://storage.googleapis.com/ygoprodeck.com/pics/38369349.jpg" alt="card"/>
              </div>
            </div>

            <div className="trade__radio-container">
              <fieldset>
              <legend>Card Condition?</legend>
              <div>
                <label for="condition-new">New</label>
                <input type="radio" id="condition-new" name="card-condition"/>
              </div>
              <div>
                <label for="condition-new">New Used</label>
                <input type="radio" id="condition-new" name="card-condition"/>
              </div>
              <div>
                <label for="condition-new">Used</label>
                <input type="radio" id="condition-new" name="card-condition"/>
              </div>
              <div>
                <label for="condition-new">Heavily Used</label>
                <input type="radio" id="condition-new" name="card-condition"/>
              </div>
              </fieldset>
            </div>
              <Button variant="outlined" color="primary" onClick={(event) => handleFormSubmitClick(event, 'right')}>Submit</Button>
          </Paper>
        </div>
      </form>
    </div>
  )
}

export default TradeComponent
