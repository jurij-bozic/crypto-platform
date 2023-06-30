// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import CryptoStats from 'src/views/dashboard/CryptoStats'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import store from '../redux/store';
import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import { cryptoApi } from 'src/services/cryptoApi'
import useAxios from "axios-hooks";
import millify from 'millify';

// ** MUI Imports
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

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
