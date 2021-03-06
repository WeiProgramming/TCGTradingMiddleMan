import React, { useState, useEffect, useContext } from 'react'
import {
  Button
} from '@material-ui/core'
import axios from 'axios'
import { searchCard } from '../../services/api/ygo'
import './trade.css'
import { AuthContext } from '../../firebase-context';
import { addFireStoreUserTradePost} from '../../services/api/firebase-trade';
import { InputValidatorComponent } from './input-validator';
import { LoadingComponent } from '../utils/loading';

function TradeComponent() {
  let { currentUser } = useContext(AuthContext);
  let [searchWord, setSearchWord] = useState('');
  let [searchCards, setSearchCards] = useState({});

  let [selectedTradeCard, setSelectedTradeCard] = useState({});
  let [selectedTradeForCard, setSelectedTradeForCard] = useState({});

  let [leftActive, setLeftActive] = useState(true)
  let [rightActive, setRightActive] = useState(false)

  let [tradeForCheckBox, setTradeForCheckBox] = useState([]);
  let [tradeForAmount, setTradeForAmount] = useState("0");

  let [tradeFormData, setTradeFormData] = useState({
    card: {}
  });
  let [tradeForFormData, setTradeForFormData] = useState({
    want: [{}, {}],
    card: {}
  });

  let [isLoading, setIsLoading] = useState(false);


  useEffect(() => {

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
      getSearchedWord();
      setIsLoading(false);
    }
  }, [])

  async function postUserTrade() {
    addFireStoreUserTradePost(currentUser, tradeFormData, tradeForFormData);
  }

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
    setIsLoading(true);
    let searchResult = getSearchedWord();
  }

  let handleFormSubmitClick = () => {
    setTradeForFormData(prev => ({
      ...prev,
      want: [...tradeForCheckBox],
      amount: tradeForAmount
    }))
    postUserTrade();
    clearForm();
  }

  let handleFormTransitionClick = (event, formType) => {
    if (formType === 'left') {
      setRightActive(true);
      setLeftActive(false);
      setSearchWord('');
      setSearchCards((prevSearchRes) => ({
        ...prevSearchRes,
        cards: [],
      }));
    } else if (formType === 'right') {
      setRightActive(false);
      setLeftActive(true);
      setSearchWord('');
      setSearchCards((prevSearchRes) => ({
        ...prevSearchRes,
        cards: [],
      }));
    }
  }

  let handleSelectedCard = (formType, card) => {
    if (formType === 'left') {
      setSelectedTradeCard({ ...card })
      setTradeFormData({
        card: { ...card },
        setName: card["card_sets"][0]["set_code"]
      })
    }
    if (formType === 'right') {
      setSelectedTradeForCard(card)
      setTradeForFormData({
        card: { ...card }
      })
    }
  }

  let handleTradeForFormChange = (e) => {
    setTradeForFormData({
      ...tradeForFormData,
      [e.target.name]: e.target.value,
    })
  }

  let handleTradeFormChange = (e) => {
    setTradeFormData({
      ...tradeFormData,
      [e.target.name]: e.target.value,
    })
  }

  let clearForm = () => {
    setSearchCards((prevSearchRes) => ({
      ...prevSearchRes,
      cards: [],
    }));
    setSearchWord('');
    setSelectedTradeForCard({});
  }

  console.table('trade form data ', tradeFormData);
  console.table('tradeFor form data ', tradeForFormData);
  return (
    <div className="trade">
      <form className="" noValidate autoComplete="off">
        <div className="trade-container">
          <div className={`trade-left-form ${leftActive ? 'active' : ''}`}>
            <div className="trade__input-container">
              <fieldset>
                <legend>Find Your Card</legend>
                <label htmlFor="searchInput">Search Card</label>
                <div className="trade__search-inline">
                  <input id="searchInput" className="searchInput" name="searchInput" value={searchWord} onChange={(e) => updateSearchWord(e)} />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => handleOnSearch(e)}
                    className="trade__search-btn"
                  >
                    Search
                </Button>
                </div>
                <InputValidatorComponent name={"searchInput"} value={searchWord} />
              </fieldset>
            </div>
            <div className="trade-left-form__card-search-container">
              {searchCards.hasOwnProperty('cards') && isLoading ? (
                <LoadingComponent>
                    {searchCards['cards'].map((card) => {
                  return (
                    <div key={card['id']} className="trade__img-container" >
                      <img
                        src={card['card_images'][0]['image_url_small']}
                        alt={card['name']}
                        className=""
                        key={card['id']}
                        onClick={() => {
                          handleSelectedCard('left', card);
                        }}
                      />
                    </div>
                  )
                })}
                </LoadingComponent>
                ) : (
                <div>
                  <p>No Cards found</p>
                </div>
              )}
            </div>
            <div className="trade__dropdown-container">
              <fieldset>
                <legend>Card Set</legend>
                <label htmlFor="card-set-label">From which card set?</label>
                <select id="card-set-label" name="setName" onClick={(e) => { handleTradeFormChange(e) }}>
                  {selectedTradeCard.hasOwnProperty('card_sets') ? selectedTradeCard["card_sets"]?.map((set) => {
                    return (
                      <option value={set['set_code']}>{set["set_name"]} - {set["set_rarity"]}</option>
                    )
                  }) : (<option name="setName" value="">No Sets found</option>)}
                </select>
              </fieldset>
              <InputValidatorComponent value={tradeFormData["setName"]} />
            </div>
            <div className="trade__form-group-inline">
              <div className="trade__radio-container" onChange={(e) => { handleTradeFormChange(e) }}>
                <fieldset>
                  <legend>Card Condition?</legend>
                  <div className="trade__radio-item">
                    <label htmlFor="condition-new">New</label>
                    <input type="radio" id="condition-new" name="cardCondition" value="1" />
                  </div>
                  <div className="trade__radio-item">
                    <label htmlFor="condition-new">New Used</label>
                    <input type="radio" id="condition-new" name="cardCondition" value="2" />
                  </div>
                  <div className="trade__radio-item">
                    <label htmlFor="condition-new">Used</label>
                    <input type="radio" id="condition-new" name="cardCondition" value="3" />
                  </div>
                  <div className="trade__radio-item">
                    <label htmlFor="condition-new">Heavily Used</label>
                    <input type="radio" id="condition-new" name="cardCondition" value="4" />
                  </div>
                </fieldset>
                <InputValidatorComponent value={tradeFormData["cardCondition"]} />
              </div>
              <div className="trade__radio-container" onChange={(e) => { handleTradeFormChange(e) }}>
                <fieldset>
                  <legend>Edition?</legend>
                  <div className="trade__radio-item">
                    <label htmlFor="edition-first">First</label>
                    <input type="radio" id="edition-first" name="cardEdition" value="1" />
                  </div>
                  <div className="trade__radio-item">
                    <label htmlFor="condition-new">New Used</label>
                    <input type="radio" id="condition-new" name="cardEdition" value="2" />
                  </div>
                  <div className="trade__radio-item">
                    <label htmlFor="condition-new">Used</label>
                    <input type="radio" id="condition-new" name="cardEdition" value="3" />
                  </div>
                  <div className="trade__radio-item">
                    <label htmlFor="condition-new">Heavily Used</label>
                    <input type="radio" id="condition-new" name="cardEdition" value="4" />
                  </div>
                </fieldset>
                <InputValidatorComponent />
              </div>
            </div>
            <Button
              variant="outlined"
              color="primary"
              onClick={(event) => handleFormTransitionClick(event, 'left')}>Go To Trade Form</Button>
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
                      setTradeForCheckBox((prevArr) => {
                        let items = prevArr;
                        let item = { ...prevArr[0], isChecked: e.target.checked, [e.target.name]: e.target.value };
                        items[0] = item;
                        setTradeForCheckBox(items);
                      })
                    }} />
                  <div className="trade__amount-inline">
                    <label>How much? </label>
                    <input id="money-amount" type="number" className="searchInput" name="amount" value={tradeForAmount} onChange={(e) => {
                      setTradeForAmount(e.target.value);
                    }} />
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
                      setTradeForCheckBox((prevArr) => {
                        let items = prevArr;
                        let item = { ...prevArr[1], isChecked: e.target.checked, [e.target.name]: e.target.value };
                        items[1] = item;
                        setTradeForCheckBox(items);
                      })
                    }} />
                </div>
              </fieldset>
            </div>
            <div className="trade__input-container">
              <fieldset>
                <legend>Find Your Card</legend>
                <label htmlFor="searchInput">Search Card</label>
                <div className="trade__search-inline">
                  <input id="searchInput" className="searchInput" name="searchInput" value={searchWord} onChange={(e) => updateSearchWord(e)} />
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
              {searchCards.hasOwnProperty('cards') ? (
                searchCards['cards'].map((card) => {
                  return (
                    <div key={card['id']} className="trade__img-container" >
                      <img
                        src={card['card_images'][0]['image_url_small']}
                        alt={card['name']}
                        className=""
                        key={card['id']}
                        onClick={() => {
                          handleSelectedCard('right', card);
                        }}
                      />
                    </div>
                  )
                })
              ) : (
                <div>
                  <h1>None Found</h1>
                </div>
              )}
            </div>
            <div className="trade__dropdown-container">
              <fieldset>
                <legend>Card Set</legend>
                <label htmlFor="card-set-label">From which card set?</label>
                <select id="card-set-label" fullWidth={false} name="setName" onClick={(e) => { handleTradeForFormChange(e, 'right') }}>
                  {selectedTradeForCard.hasOwnProperty('card_sets') ? selectedTradeForCard["card_sets"]?.map((set) => {
                    console.log('this is the set ', set);
                    return (
                      <option key="{}" value={set['set_code']}>{set["set_name"]} - {set["set_rarity"]}</option>
                    )
                  }) : (<option>No Sets found</option>)}
                </select>
              </fieldset>
            </div>
            <div className="trade__form-group-inline">
            <div className="trade__radio-container" onChange={(e) => { handleTradeForFormChange(e) }}>
              <fieldset>
                <legend>Card Condition?</legend>
                <div className="trade__radio-item">
                  <label htmlFor="condition-new">New</label>
                  <input type="radio" id="condition-new" name="cardCondition" value="1" />
                </div>
                <div className="trade__radio-item">
                  <label htmlFor="condition-new">New Used</label>
                  <input type="radio" id="condition-new" name="cardCondition" value="2" />
                </div>
                <div className="trade__radio-item">
                  <label htmlFor="condition-new">Used</label>
                  <input type="radio" id="condition-new" name="cardCondition" value="3" />
                </div>
                <div className="trade__radio-item">
                  <label htmlFor="condition-new">Heavily Used</label>
                  <input type="radio" id="condition-new" name="cardCondition" value="4" />
                </div>
              </fieldset>
            </div>
            <div className="trade__radio-container" onChange={(e) => { handleTradeForFormChange(e) }}>
              <fieldset>
                <legend>Edition?</legend>
                <div className="trade__radio-item">
                  <label htmlFor="edition-first">First</label>
                  <input type="radio" id="edition-first" name="cardEdition" value="1" />
                </div>
                <div className="trade__radio-item">
                  <label htmlFor="condition-new">New Used</label>
                  <input type="radio" id="condition-new" name="cardEdition" value="2" />
                </div>
                <div className="trade__radio-item">
                  <label htmlFor="condition-new">Used</label>
                  <input type="radio" id="condition-new" name="cardEdition" value="3" />
                </div>
                <div className="trade__radio-item">
                  <label htmlFor="condition-new">Heavily Used</label>
                  <input type="radio" id="condition-new" name="cardEdition" value="4" />
                </div>
              </fieldset>
            </div>
            </div>
            <div className="btn-group-inline">
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => handleFormTransitionClick(event, 'right')}
            >
              Back
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={(event) => handleFormSubmitClick(event, 'right')}>Submit</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TradeComponent
