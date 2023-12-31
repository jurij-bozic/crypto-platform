// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
// ** Demo Components Imports
import NewsComponent from 'src/views/personalcoinlist/NewsComponent'
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from 'src/configs/firebase-config'

const News = () => {

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
                <NewsComponent />
              </Grid>
            </Grid>
            :
            <Typography variant='body2' sx={{ marginRight: 2 }}> You need to be logged in order to view your dash.</Typography>
      }
    </ApexChartWrapper>
  )
}

export default News
