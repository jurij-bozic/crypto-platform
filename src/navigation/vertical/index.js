// ** Icon imports
import Login from 'mdi-material-ui/Login'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import NewspaperIcon from 'mdi-material-ui/Newspaper';
import CurrencyBitcoin from 'mdi-material-ui/Bitcoin'

const navigation = () => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Personal Coin List',
      icon: CurrencyBitcoin,
      path: '/dashboard'
    },
    {
      title: 'Crypto News',
      icon: NewspaperIcon,
      path: '/news'
    },
    {
      sectionTitle: 'Account Actions'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    }
  ]
}

export default navigation
