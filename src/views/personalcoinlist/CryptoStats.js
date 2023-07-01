// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'
import Cash from 'mdi-material-ui/Animation';
import Exchange from 'mdi-material-ui/Bank';
import MarketCap from 'mdi-material-ui/CurrencyUsd';
import DotsVertical from 'mdi-material-ui/DotsVertical'

const CryptoStats = (props) => {
  return (
    <Card>
      <CardHeader
        title='Crypto Statistics'
        titleTypographyProps={{ sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' } }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(2.25)} !important` }}>
        <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h4' sx={{ fontWeight: 600, fontSize: '2.125rem !important' }}>
            {'$' + props.total24hVolume}
          </Typography>
          {/* <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
          </Box> */}
        </Box>

        <Typography component='p' variant='caption' sx={{ mb: 10 }}>
          Total 24h volume
        </Typography>
        <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Avatar
                variant='rounded'
                sx={{
                  mr: 3,
                  width: 40,
                  height: 40,
                  backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.04)`
                }}
              >
                <Cash sx={{ color: '#f3ba2f' } }/>
              </Avatar>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                    Total amount
                  </Typography>
                  <Typography variant='caption'>The total amount of crypto coins that currently exist in the world</Typography>
                </Box>

                <Box sx={{ minWidth: 85, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
                    {props.totalCoins}
                  </Typography>
                  {/* <LinearProgress color={item.color} value={item.progress} variant='determinate' /> */}
                </Box>
              </Box>
            </Box>
            <br/>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Avatar
                variant='rounded'
                sx={{
                  mr: 3,
                  width: 40,
                  height: 40,
                  backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.04)`
                }}
              >
                <Exchange sx={{ color: '#3cc8c8' }} />
              </Avatar>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                    Total exchanges
                  </Typography>
                  <Typography variant='caption'>The total exchanges in the world</Typography>
                </Box>
                <Box sx={{ minWidth: 85, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
                    {props.totalExchanges}
                  </Typography>
                  {/* <LinearProgress color={item.color} value={item.progress} variant='determinate' /> */}
                </Box>
              </Box>
            </Box>
            <br/>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Avatar
                variant='rounded'
                sx={{
                  mr: 3,
                  width: 40,
                  height: 40,
                  backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.04)`
                }}
              >
                <MarketCap sx={{ color: '#53ae94' }}/>
              </Avatar>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                    Total marketcap
                  </Typography>
                  <Typography variant='caption'>The total crypto marketcap globally</Typography>
                </Box>
                <Box sx={{ minWidth: 85, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
                    {'$' + props.totalMarketCap}
                  </Typography>
                  {/* <LinearProgress color={item.color} value={item.progress} variant='determinate' /> */}
                </Box>
              </Box>
            </Box>
      </CardContent>
    </Card>
  )
}

export default CryptoStats
