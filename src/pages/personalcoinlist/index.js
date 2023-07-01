import Typography from '@mui/material/Typography'
// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from 'src/configs/firebase-config'

const PersonalCoinList = () => {
  const [userName, setUserName] = useState('')

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserIsAuthorized(true)
        setUserName(user.email)
      }
      else {
        setUserIsAuthorized(false)
        setUserName('')
      }
    })
  }, []);

  const [userIsAuthorized, setUserIsAuthorized] = useState(false)

  return (
    <ApexChartWrapper>     
      {userIsAuthorized ? 
            // <Grid container spacing={6}>
            //   <Grid item xs={12} md={4}>
            //     <Trophy />
            //   </Grid>
            //   <Grid item xs={12} md={6} lg={4}>
            //     <WeeklyOverview />
            //   </Grid>
            // </Grid>
            <div>
              <Typography variant='body1' sx={{ marginRight: 2, fontWeight: 'bold' }}>Welcome, {userName}!</Typography>
              <Typography variant='body2' sx={{ marginRight: 2, marginTop: '20%', display: 'flex', justifyContent: 'center' }}>. . . content to be implemented . . .</Typography>
            </div>
            :
            <Typography variant='body2' sx={{ marginRight: 2 }}> You need to be logged in order to view your dash.</Typography>
      }
    </ApexChartWrapper>
  )
}

export default PersonalCoinList
