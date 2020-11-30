import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import 'bootstrap/dist/css/bootstrap.min.css'
import Drawer from './Drawer'
import HeaderContent from './Content/HeaderContent'
import CardsSection from './Content/CardsSection'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      display: 'flex',
      flexDirection: 'column',
      minWidth: '250px'
    }
  },
  content: {
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
    ['@media (max-width: 285px)']: { // eslint-disable-line no-useless-computed-key
      padding: 0,
      paddingTop: 20,
      minWidth: '250px'
    }
  },
  contentGetStartText: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    color: 'white',
    marginLeft: '10px'
  }
}))

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Drawer/>
      <div className={classes.content}>
        < HeaderContent/>
        <div className={classes.contentGetStartText}>
          <h3>Get started with featured templates</h3>
          <p>
            These templates can help you start saving time right away,
            no matter which apps you use.
          </p>
        </div>
        <CardsSection/>
      </div>
    </div>
  )
}

export default App
