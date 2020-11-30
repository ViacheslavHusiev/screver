import Button from '@material-ui/core/Button'
import pictureForHeader from '../pictures/pictureForHeader.png'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  contentHeader: {
    background: '#433ea8',
    display: 'flex',
    borderRadius: '15px',
    padding: '20px',
    alignItems: 'center',
    alignSelf: 'center',
    maxWidth: '1200px',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      flexDirection: 'column-reverse'
    }
  },
  text: {
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      textAlign: 'center'
    }
  },
  contentHeaderTextButton: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      alignItems: 'center'
    }
  },
  buttonCreate: {
    background: '#2f79f7',
    borderRadius: 5,
    color: 'white',
    width: 100,
    marginTop: 15,
    fontSize: 14,
    textTransform: 'capitalize',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      width: '100%',
      height: 60
    }
  },
  contentHeaderPicture: {
    width: 400,
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      width: 'auto',
      maxWidth: '520px'
    }
  }
}))

const HeaderContent = () => {
  const classes = useStyles()

  const createButton = 'Create >'

  return (

      <div className={classes.contentHeader}>
            <div className={classes.contentHeaderTextButton}>
              <h2 className={classes.text}>
                No data yet, let’s get you set up!
              </h2>
              <p className={classes.text}>
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
            <div className={classes.contentHeaderPicture}>
              <img
                src={pictureForHeader}
                height={'100%'}
                width={'100%'}
                alt={'Picture'}
              />
          </div>
      </div>
  )
}

export default HeaderContent
