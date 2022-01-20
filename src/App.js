import './App.css';
import { useEffect, useState} from "react";
import Axios from 'axios';
import Coin from './component/Coin';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("")


  useEffect(()=> {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0 ").then((res)=>{
      console.log(res.data.coins)
      setCoins(res.data.coins);
    });

  }, []);

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  });

  return (
    <div className="App">
      <div className='header'>
        <input type="text" placeholder='COIN...' onChange={(e) => setSearch(e.target.value)} />
      </div>
      
      <div className='crypto'>
        {filteredCoins.map((coin)=>(
          <Coin
          key={coin.id}
          name={coin.name}
          price={coin.price}
          logo={coin.icon}
          symbol={coin.symbol}/>
        ))}
      </div>
    </div>
  );
}

export default App;
