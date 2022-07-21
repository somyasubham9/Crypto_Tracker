import React, { useState, useEffect } from "react";
import axios from "axios";
import Monedas from "./components/Monedas";
const App = () => {
  const [monedas, setMonedas] = useState([]);
  const [search,setSearch]=useState('');


  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setMonedas(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
const changeHandler=(e)=>{
setSearch(e.target.value);
}
const filteredMonedas=monedas.filter((mon)=>mon.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="main">
      <div className="search">
      <h1 className="search-text">Search Currency</h1>
        <form onSubmit="return false;">
          <input type='text' className="input" placeholder="Search" onChange={changeHandler}></input>
        </form>
      </div>
      {filteredMonedas.map((mon)=>{
        return(
          <Monedas key={mon.id} 
            name={mon.name}
            image={mon.image}
            symbol={mon.symbol}
            price={mon.current_price}
            mkt_cap={mon.market_cap}
            volume={mon.total_volume}
            price_change={mon.price_change_percentage_24h}
          />
        )
      })}
    </div>
  );
};

export default App;
