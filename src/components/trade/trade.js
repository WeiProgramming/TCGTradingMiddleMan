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
} from '@material-ui/core'
import axios from 'axios'
import { searchCard } from '../../services/api/ygo'
import './trade.css'

function TradeComponent() {
  let [searchWord, setSearchWord] = useState('')
  let [searchCards, setSearchCards] = useState({})
  useEffect(() => {
    console.log('exec ', searchCard(searchWord))
    async function getSearchedWord() {
      await axios
        .get(searchCard(searchWord))
        .then((res) => {
          if(res.data.hasOwnProperty("cards")) {
            setSearchCards((prevSearchRes) => ({...prevSearchRes, cards: [...res.data["cards"]]}));
          }
        })
        .catch((e) => {
          console.log(e)
        })
    }
    if(searchWord !== '') {
      getSearchedWord()
    }
  }, [])

  async function getSearchedWord() {
    await axios
      .get(searchCard(searchWord))
      .then((res) => {
        if(res.data.hasOwnProperty("cards")) {
          setSearchCards((prevSearchRes) => ({...prevSearchRes, cards: [...res.data["cards"]]}));
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
    let searchResult = getSearchedWord();
    console.log('search result from click ', searchResult);
  }
  return (
    <div>
      <h1>What would you like to trade?</h1>
      <form className="" noValidate autoComplete="off">
        <div className="trade-container">
          <Paper className="trade-left-form">
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
                <Button variant="contained" color="primary" onClick={() => handleOnSearch()}>Search</Button>
              </FormGroup>
            </FormControl>
            <FormControl></FormControl>
            <div className="trade-left-form-card-search-container">
              {searchCards.hasOwnProperty("cards") ? searchCards["cards"].map((card) => {
                return (
                  <div key={card["id"]}>
                    <img
                      src={card['card_images'][0]['image_url_small']}
                      alt={card['card_images'][0]['image_url_small']}
                      className="trade-left-form-search-card-img"
                    />
                  </div>
                )}) : <div><h1>None Found</h1></div>}
            </div>

            <FormControl component="fieldset">
              <FormLabel component="legend">Condition?</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value="" row>
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
          </Paper>
          <Paper className="trade-right-form">
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
            <div className="trade-right-form-card-search-container">
            {searchCards.hasOwnProperty("cards") ? searchCards["cards"].map((card) => {
                return (
                  <div key={card["id"]}>
                    <img
                      src={card['card_images'][0]['image_url_small']}
                      alt={card['card_images'][0]['image_url_small']}
                      className="trade-left-form-search-card-img"
                    />
                  </div>
                )}) : <div><h1>None Found</h1></div>}
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
            </FormControl>
          </Paper>
        </div>
      </form>
    </div>
  )
}

export default TradeComponent
