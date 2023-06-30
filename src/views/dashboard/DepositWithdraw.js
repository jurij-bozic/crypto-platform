// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiDivider from '@mui/material/Divider'
import { useEffect, useState } from 'react';
import { cryptoApi } from 'src/services/cryptoApi'
import useAxios from "axios-hooks";
import millify from 'millify';
import Icon from '@mui/material/Icon';
import NewsItem from 'mdi-material-ui/Newspaper';


// Styled Divider component
const Divider = styled(MuiDivider)(({ theme }) => ({
  margin: theme.spacing(5, 0),
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
    margin: theme.spacing(0, 5),
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}))

const DepositWithdraw = () => {
  const [{ data, loading, error }] = useAxios(cryptoApi.news)
  const [news, setNews] = useState([])

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data]);

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'column', 'row'] }}>
      <Box sx={{ width: '100%' }}>
        <CardHeader
          title='News from the crypto world'
          sx={{ pt: 5.5, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={<Typography variant='caption'>View All</Typography>}
          titleTypographyProps={{
            variant: 'h6',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
          {data?.value.length > 0 ? 
            data.value.map((item, index) => {
              return (
                <Box
                  key={item.name}
                  sx={{ display: 'flex', alignItems: 'center', mb: index !== data.value.length - 1 ? 6 : 0 }}
                >
                  <Box sx={{ minWidth: 38, display: 'flex', justifyContent: 'center' }}>
                    {item?.image?.thumbnail?.contentUrl ? 
                      <div style={{
                        width: 150,
                        height: 150,
                        marginRight: 4, 
                        backgroundImage: 'url("' + item.image.thumbnail.contentUrl + '")', 
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain'
                      }}></div>
                      :
                      <Icon size='small' aria-label='settings' className='card-more-options' sx={{ 
                        width: 150,
                        height: 150,
                        color: 'text.secondary',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                        }}>
                        <NewsItem style={{ fontSize: 80 }}/>
                      </Icon>
                    }
                  </Box>
                  <Box
                    sx={{
                      ml: 4,
                      width: '100%',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                      <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.name}</Typography>
                      <br/>
                      <Typography variant='caption'>{item.description}</Typography>
                    </Box>
                    <br/>
                    <Typography variant='subtitle2' sx={{ fontWeight: 600, color: 'success.main' }}>
                      {item._type}
                    </Typography>
                  </Box>
                </Box>
              )
            })
              :
              <></>
          }
        </CardContent>
      </Box>
    </Card>
  )
}

export default DepositWithdraw
