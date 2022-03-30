import React, { useEffect, useState } from 'react'
import CoinCard from '../CoinCard/CoinCard'

const Coins = () => {
    const [coins, setCoins] = useState([])
    console.log(coins)

    useEffect(() => {
        fetch(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
        )
            .then(res => res.json())
            .then(data => setCoins(data))
    }, [])
    return (
        <div>
            <h1 className="text-center text-2xl font-bold mt-14">Available Crypto Currencies</h1>
            <p className="text-center">Total coins {coins.length}</p>
            <div className="grid md:grid-cols-4 gap-y-5 gap-x-14 px-28 py-10">
                {coins.map((coin, index) => (
                    <CoinCard key={index} coin={coin}></CoinCard>
                ))}
            </div>
        </div>
    )
}

export default Coins
