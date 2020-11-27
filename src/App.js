import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import 'bootstrap/dist/css/bootstrap.min.css'
import Drawer from './Drawer'
import HeaderContent from './Content/HeaderContent'
import CardsSection from './Content/CardsSection'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  content: {
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    background: 'linear-gradient(#6446da, #4564da);'
  },
  contentHeaderText: {
    marginTop: '-10px'
  },
  contentGetStartText: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '35px',
    color: 'white',
    marginLeft: '5%'
  }
}))

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Drawer/>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <div className={classes.content}>
              <div className='row row-no-gutters'>
                <div className='col'>
                  < HeaderContent/>
                </div>
              </div>
              <div className='row row-no-gutters'>
                <div className='col'>
                  <div className={classes.contentGetStartText}>
                    <h3>Get started with featured templates</h3>
                    <p className={classes.contentHeaderText}>
                      These templates can help you start saving time right away,
                      no matter which apps you use.
                    </p>
                  </div>
                </div>
              </div>
              <div className='row row-no-gutters'>
                <div className='col'>
                  <CardsSection/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
