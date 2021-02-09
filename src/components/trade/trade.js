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
} from '@material-ui/core'
import axios from 'axios'
import { searchCard } from '../../services/api/ygo'
import './trade.css'

function TradeComponent() {
  let [searchWord, setSearchWord] = useState('')
  let [searchCards, setSearchCards] = useState([])
  useEffect(() => {
    console.log('exec ', searchCard(searchWord))
    async function getSearchedWord() {
      let searchRes = await axios
        .get(searchCard(searchWord))
        .then((res) => {
          return res.data
        })
        .catch((e) => {
          console.log(e)
        })
      console.log('client returned ', searchRes)
      setSearchCards((searchCards) =>
        searchRes?.cards ? [...searchRes['cards']] : searchCards,
      )
      console.log('executed search', searchCards)
    }
    getSearchedWord()
  }, [searchWord, setSearchWord])

  let handleOnSearch = (event) => {
    setSearchWord(`${event.target.value}`)
    console.log('searching ', searchWord)
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
                  variant="filled"
                  value={searchWord}
                  onChange={(e) => handleOnSearch(e)}
                />
              </FormGroup>
            </FormControl>
            <FormControl></FormControl>
            <div className="trade-left-form-card-search-container">
              {/* {Object.keys(searchCards).map((cardIndex) => {
                Object.keys(searchCards[cardIndex]).map((attributes) => {
                  if (attributes === 'card_images') {
                      //  {console.log(searchCards[cardIndex][attributes]["0"]["image_url_small"])}
                    return (
                      <div key={searchCards[cardIndex][attributes]["0"]["id"]}>
                        <p>https://storage.googleapis.com/ygoprodeck.com/pics_small/76080032.jpg</p>
                        <img
                          className="trade-left-form-search-card-img"
                          src={searchCards[cardIndex][attributes]["0"]["image_url_small"]}
                          alt="ygo-card"
                        />
                      </div>

                    )
                  }
                })
              })} */}
              {searchCards.map((card) => {
                return (
                  <div>
                    <img
                      src={card['card_images'][0]['image_url_small']}
                      alt={card['card_images'][0]['image_url_small']}
                    />
                  </div>
                )
              })}
              <div>
                <img
                  className="trade-left-form-search-card-img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics_small/76080032.jpg"
                  alt="ygo-card"
                />
              </div>
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
              variant="filled"
            />
            <div className="trade-right-form-card-search-container">
              <div className="trade-right-form-search-card-container">
                <img
                  className="trade-right-form-search-card-img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics_small/6983839.jpg"
                />
              </div>
              <div className="trade-right-form-search-card-container">
                <img
                  className="trade-right-form-search-card-img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics_small/6983839.jpg"
                />
              </div>
              <div className="trade-right-form-search-card-container">
                <img
                  className="trade-right-form-search-card-img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics_small/6983839.jpg"
                />
              </div>
              <div className="trade-right-form-search-card-container">
                <img
                  className="trade-right-form-search-card-img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics_small/6983839.jpg"
                />
              </div>
              <div className="trade-right-form-search-card-container">
                <img
                  className="trade-right-form-search-card-img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics_small/6983839.jpg"
                />
              </div>
              <div className="trade-right-form-search-card-container">
                <img
                  className="trade-right-form-search-card-img"
                  src="https://storage.googleapis.com/ygoprodeck.com/pics_small/6983839.jpg"
                />
              </div>
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
