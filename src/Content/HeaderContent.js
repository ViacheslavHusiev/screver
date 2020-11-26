import Button from '@material-ui/core/Button'
import pictureForHeader from '../pictures/pictureForHeader.png'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  contentHeader: {
    flexDirection: 'row',
    background: '#433ea8',
    display: 'flex',
    borderRadius: '15px',
    marginTop: '20px',
    marginLeft: '3%',
    marginRight: '3%',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      marginLeft: '15%',
      marginRight: '15%'
    }
  },
  contentHeaderTextButton: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    flexWrap: 'nowrap',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center'
    }
  },
  contentHeaderText: {
    marginTop: '-10px'
  },
  buttonCreate: {
    background: '#2f79f7',
    borderRadius: 5,
    color: 'white',
    width: 100,
    marginTop: 15,
    fontSize: 14,
    textTransform: 'capitalize'
  },
  contentHeaderPicture: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center'
    }
  }
}))

const HeaderContent = () => {
  const classes = useStyles()

  const createButton = 'Create >'

  return (
    <div className='container-fluid'>
      <div className={classes.contentHeader}>
        <div className='row'>
          <div className='col-xs-12 col-sm-7 col-md-8 col-lg-7'>
            <div className={classes.contentHeaderTextButton}>
              <h2 className={classes.contentHeaderText}>
                No data yet, let’s get you set up!
              </h2>
              <p className={classes.contentHeaderText}>
                Create survey or quiz and start collecting employees
                feedback.
                Simply start by selecting the type of campaign.
              </p>
              <Button
                className={classes.buttonCreate}
              >
                {createButton}
              </Button>
            </div>
          </div>
          <div className='col-xs-12 col-sm-5 col-md-4 col-lg-5'>
            <div className={classes.contentHeaderPicture}>
              <img
                src={pictureForHeader}
                className='img-responsive'
                alt={'Picture'}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default HeaderContent
