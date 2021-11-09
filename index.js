const api = require("./api");
const express = require("express");
const cors = require("cors");

const app = express();

const port = 3001

app.use(express.json());

const corsOptions = {
  origin: '*',
  optionSucessStatus: 200
};
app.use(cors(corsOptions));

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`)
  })
app.get(`/api/summonerName`, async(req,res) =>{
  const  { summonerName } = req.query
  try {
    const  { data } = await api.get(`/summoner/v4/summoners/by-name/${summonerName}/`)

    return res.send(data)
  } catch (error) {
    res.send({error: error.message})
  }
})

app.get(`/api/summonerTier`, async(req,res) =>{
  const  { summonerId } = req.query
  try {
    const  { data } = await api.get(`/league/v4/entries/by-summoner/${summonerId}/`)

    return res.send(data)
  } catch (error) {
    res.send({error: error.message})
  }
})