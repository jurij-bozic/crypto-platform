// ** MUI Imports
import Grid from '@mui/material/Grid'
// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'
// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
// ** Demo Components Imports
import CryptoStats from 'src/views/personalcoinlist/CryptoStats'
import { useEffect, useState } from 'react';
import { cryptoApi } from 'src/services/cryptoApi'
import useAxios from "axios-hooks";
import millify from 'millify';
// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const HomePage = () => {
  const [{ data, loading, error }] = useAxios(cryptoApi.coins)
  const [topTwentyCoins, setToptwentyCoins] = useState([])
  const [cryptoStats, setCryptoStats] = useState({})
  const organizeCoinData = () => {
    if (data?.data?.coins.length > 0) {
      setToptwentyCoins(data.data.coins.slice(0, 20))
    }

    if (data?.data?.stats) {
      setCryptoStats(data.data.stats)
    }
  }
  
  useEffect(() => {
    if (data) {
      organizeCoinData()
      console.log(data)
    }
  }, [data]);

  useEffect(() => {
    console.log(topTwentyCoins)
  }, [topTwentyCoins]);

  useEffect(() => {
    let test = cryptoStats
    console.log(cryptoStats)
    // debugger
  }, [cryptoStats]);

  return (
    <ApexChartWrapper style={{ maxWidth: 840 }}>     
      <div>
        <div >
          <CryptoStats 
            total24hVolume={(cryptoStats.total24hVolume ? millify(cryptoStats.total24hVolume) : 0)}
            totalCoins={(cryptoStats.totalCoins ? millify(cryptoStats.totalCoins) : 0)}
            totalExchanges={(cryptoStats.totalExchanges ? millify(cryptoStats.totalExchanges) : 0)}
            totalMarketCap={(cryptoStats.totalMarketCap ? millify(cryptoStats.totalMarketCap) : 0)}
            />
        </div>
      </div>
      <br/>
      <div style={{ display: 'flex', justifyContent: 'normal', flexWrap: 'wrap' }}>
        {(topTwentyCoins.length > 0 ? topTwentyCoins.map((coin, index) => (
            <Grid item xs={7} sx={{ marginTop: 10, marginRight: 8 }} key={index}>
              <CardStatisticsVerticalComponent
                stats={'$' + millify(coin.price)}
                title={coin.name}
                trend={(coin.change[0] == '-' ? 'negative' : 'positive')}
                color='secondary'
                trendNumber={coin.change + '%'}
                subtitle='24 Hours'
                icon={coin.iconUrl}
              />
            </Grid>
        ))
          : <></>
        )}
      </div>
  </ApexChartWrapper>
 
  )
}

export default HomePage
