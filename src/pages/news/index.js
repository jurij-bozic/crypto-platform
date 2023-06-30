// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/CryptoStats'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from 'src/configs/firebase-config'
// import { isUserAuthorized } from 'src/auth/authChecker'

const News = () => {

  // const [isTriggered, setIsTriggered] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserIsAuthorized(true)
      }
      else {
        setUserIsAuthorized(false)
      }
    })
  }, []);

  const [userIsAuthorized, setUserIsAuthorized] = useState(false)

  return (
    <ApexChartWrapper>     
      {userIsAuthorized ? 
            <Grid container spacing={6}>
              <Grid item xs={12} md={12} lg={8}>
                <DepositWithdraw />
              </Grid>
            </Grid>
            :
            <Typography variant='body2' sx={{ marginRight: 2 }}> You need to be logged in order to view your dash.</Typography>
      }
    </ApexChartWrapper>
  )
}

export default News
