
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import{ Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Main=()=>
{

    const [coins ,setCoins]=useState([]);
    const [search ,setSearch]=useState('');
    let i=1;
    
    useEffect(() => {
     
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=120&page=1&sparkline=false`)
      .then(res => {
        const responce = res.data;
        console.log(responce);
          setCoins(responce);
         // <input type="text" placeholder="enter the text" onChange={input} />
        // const input=(e)=>
           //{
         //    setSearch(e.target.value);
             
       //  }
     
                   
      })
          

    }, [search]);

   
     return(
<div id="body"  >

  
  


<Table  className="table"  >
<thead>
    <tr>
      <th scope="col">Rank</th>
      <th scope="col">Coin</th>
      <th scope="col">Name</th>
      <th scope="col">Symbol</th>
      <th scope="col"> Price</th>
      <th scope="col">Market Cap</th>
      <th scope="col">Volume(24h)</th>
      <th scope="col">High(24h)</th>
      <th scope="col">Low(24h)</th>

    
    </tr>
  </thead>  

  <tbody>
  {coins.map((coin,index)=>{
      if(index>=1){
          i++
      }
      let color="green";
  
      if(coin.price_change_percentage_24h<0){
           color="red";
      }

     

     
    return(
      
      
 
    <tr>
      
      <td>{i}</td>
      <td scope="row"> <img src={coin.image}  height="30" width="30"></img></td>
      <th scope="row"> {coin.name}</th>
      <td scope="row"> {coin.symbol.toUpperCase()}</td>
      <td scope="row"> {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD'}).format(coin.current_price)}</td>
      <td scope="row"> {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD'}).format(coin.market_cap)}</td>
      <td scope="row" style={{color:color}}>{coin.price_change_percentage_24h}(%)</td>
      <td scope="row" style={{color:color}}> {coin.high_24h}(%)</td>
      <td scope="row" style={{color:color}}> {coin.low_24h}(%)</td>
      
    </tr>


    
  
    )
})
}
</tbody>
</Table>


  </div>          

    

     )
}
export default Main;
