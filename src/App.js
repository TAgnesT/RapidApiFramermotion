import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import { motion } from "framer-motion"

import Classes from './components/Classes'
import Races from './components/Races'
import Qualities from './components/Qualities'
import Factions from './components/Factions'

function App() {

  const [classes, setClasses] = useState([]);
  const [races, setRaces] = useState([]);
  const [qualities, setQualities] = useState([]);
  const [factions, setFactions] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
    headers: {
      'X-RapidAPI-Key': 'xxxxx',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  };

  useEffect(()=> {

      axios.request(options).then(function (response) {
        
        setClasses(response.data.classes);
        setRaces(response.data.races);
        setQualities(response.data.qualities);
        setFactions(response.data.factions);
        
        console.log(response.data);

      }).catch(function (error) {
        console.error(error);
      });

  },[])

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
  

  return (
    <>

      <h1>REACT HS API</h1>
     <div className="container">

    
        <motion.div className="classes" animate={{ x: 5 }}
        transition={{ type: "spring", stiffness: 100 }}>
          <h2>Klasszok:</h2>
            {classes.map(c => {

              return <Classes key={c} title={c} />
            })}
        </motion.div>

        <div className="races">
        <h2>Fajok:</h2>
            {races.map(r => {

              return <Races key={r} title={r} />
            })}
        </div>

        <div className="qualities">
        <h2>Kártyák minősége:</h2>
            {qualities.map(q => {

              return <Qualities key={q} title={q} />
            })}
        </div>

        <div className="factions">
        <h2>Frakciók:</h2>
            {factions.map(f => {

              return <Factions key={f} title={f} />
            })}
        </div>

     </div>
    </>
  );
}

export default App;
