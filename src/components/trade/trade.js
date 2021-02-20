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
            <FormControl component="fieldset">
              <FormLabel component="legend">Search Your Card</FormLabel>
              <FormGroup>
                <TextField
                  id="card-search"
                  label="Card Name..."
                  helperText="Find your Yu-Gi-Oh card to trade"
                  fullWidth
                  variant="outlined"
                  value={searchWord}
                  onChange={(e) => updateSearchWord(e)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => handleOnSearch(e)}
                >
                  Search
                </Button>
              </FormGroup>
            </FormControl>
            <FormControl>
            <div className="trade-left-form__card-search-container">
              {searchCards.hasOwnProperty('cards') ? (
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
              )}
            </div>
            </FormControl>
            <FormControl>
              <InputLabel id="card-set-label">From which card set?</InputLabel>
              <Select labelId="card-set-label" fullWidth={false}>
                <MenuItem value={'LOB'}>Legend Of Blue Eyes</MenuItem>
                <MenuItem value={'PS'}>Pharoah's Servant</MenuItem>
              </Select>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Condition?</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={condition} row onChange={(e) => {
                handleOnRadioChange(e);
              }}>
                <FormControlLabel value="new" control={<Radio />} label="New" />
                <FormControlLabel
                  value="newused"
                  control={<Radio />}
                  label="New Used"
                />
                <FormControlLabel
                  value="used"
                  control={<Radio />}
                  label="Used"
                />
                <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
              </RadioGroup>
            </FormControl>
            <RadioGroup>
              <FormLabel>First Edition?</FormLabel>
              <FormControlLabel value="no" label="No" control={<Radio/>}/>
              <FormControlLabel value="yes" label="Yes" control={<Radio/>}/>
            </RadioGroup>
            <Button variant="outlined" color="primary" onClick={(event) => handleFormSubmitClick(event, 'left')}>Submit</Button>
          </Paper>

          <Paper className={`trade-right-form ${rightActive ? 'active' : ''}`}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                What are you willing to accept?
              </FormLabel>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox />}
                  label="$ Money"
                  labelPlacement="start"
                ></FormControlLabel>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Card"
                  labelPlacement="start"
                ></FormControlLabel>
              </FormGroup>
            </FormControl>
            <TextField
              id="card-search"
              label="Card Name..."
              helperText="Find your Yu-Gi-Oh card to trade"
              fullWidth
              variant="outlined"
            />
            <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => handleOnSearch(e)}
                >
                  Search
            </Button>
            <div className="trade-right-form__card-search-container">
              {searchCards.hasOwnProperty('cards') ? (
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
              )}
            </div>

            <FormControl component="fieldset">
              <FormLabel component="legend">Condition?</FormLabel>
              <FormGroup row>
                <FormControlLabel
                  value="new"
                  control={<Checkbox />}
                  label="New"
                />
                <FormControlLabel
                  value="newused"
                  control={<Checkbox />}
                  label="New Used"
                />
                <FormControlLabel
                  value="used"
                  control={<Checkbox />}
                  label="Used"
                />
                <FormControlLabel
                  value="Bad"
                  control={<Checkbox />}
                  label="Bad"
                />
              </FormGroup>
              <Button variant="outlined" color="primary" onClick={(event) => handleFormSubmitClick(event, 'right')}>Submit</Button>
            </FormControl>
          </Paper>
        </div>
      </form>
    </div>
  )
}

export default TradeComponent
