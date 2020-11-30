import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardActionArea from '@material-ui/core/CardActionArea'
import firstCard from '../pictures/firstCard.png'
import firstCardXs from '../pictures/firstCardXs.png'
import pic1 from '../pictures/1pic.png'
import pic2 from '../pictures/2pic.png'
import pic3 from '../pictures/3pic.png'
import pic4 from '../pictures/4pic.png'
import pic5 from '../pictures/5pic.png'
import pic6 from '../pictures/6pic.png'
import pic7 from '../pictures/7pic.png'
import pic8 from '../pictures/8pic.png'
import pic9 from '../pictures/9pic.png'

const useStyles = makeStyles(() => ({
  cardsContent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '5px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstCard: {
    width: '220px',
    height: '200px',
    margin: '15px',
    borderRadius: '15px',
    alignSelf: 'center',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      height: 'auto',
      width: '100%',
      margin: 0,
      marginTop: 15
    }
  },
  cardImgForFirstCard: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      height: '100%',
      width: '100%',
      flexDirection: 'row',
      alignSelf: 'flex-start',
      borderTopRightRadius: '0px',
      borderBottomLeftRadius: '10px'
    }
  },
  cardType: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: 'whitesmoke',
    borderRadius: '10px',
    height: '200px',
    width: '220px',
    margin: '15px',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      height: '130px',
      width: '100%',
      flexDirection: 'row'
    }
  },
  defaultCardActionArea: {
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      display: 'flex',
      flexDirection: 'row',
      height: '130px',
      width: '100%',
      justifyContent: 'flex-start'
    }
  },
  cardImg: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      height: '100%',
      width: '50%',
      flexDirection: 'row',
      alignSelf: 'flex-start',
      borderTopRightRadius: '0px',
      borderBottomLeftRadius: '10px'
    }
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'column'
  },
  cardFooterTextH: {
    marginTop: '5px',
    marginLeft: '10px',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      order: 2
    }
  },
  cardFooterTextP: {
    color: 'darkgrey',
    marginTop: '-15px',
    marginLeft: '10px',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      marginTop: 5,
      order: 1
    }
  }
}))

const Cards = () => {
  const classes = useStyles()

  return (
    <div className={classes.cardsContent}>
      <div className='hidden-sm hidden-md hidden-lg'>
      <div className={classes.firstCard}>
          <CardActionArea>
            <img
              className={classes.cardImgForFirstCard}
              src={firstCardXs}
              alt={'Picture'}
            />
          </CardActionArea>
        </div>
      </div>
      <div className={classes.firstCard}>
        <div className='hidden-xs'>
          <CardActionArea>
            <img
              className={classes.cardImgForFirstCard}
              src={firstCard}
              alt={'Picture'}
            />
          </CardActionArea>
        </div>
      </div>
      <div className={classes.cardType}>
        <CardActionArea className={classes.defaultCardActionArea}>
          <img
            className={classes.cardImg}
            src={pic1}
            alt={'Picture'}
          />
          <div className={classes.cardFooter}>
            <h5 className={classes.cardFooterTextH}>Meeting
              feedback</h5>
            <p className={classes.cardFooterTextP}>Customer service
              | 15
              qns</p>
          </div>
        </CardActionArea>
      </div>
      <div className={classes.cardType}>
        <CardActionArea className={classes.defaultCardActionArea}>
          <img
            className={classes.cardImg}
            src={pic2}
            alt={'Picture'}
          />
          <div className={classes.cardFooter}>
            <h5 className={classes.cardFooterTextH}>Work-life
              Balance</h5>
            <p className={classes.cardFooterTextP}>Customer service
              | 24
              qns</p>
          </div>
        </CardActionArea>
      </div>
      <div className={classes.cardType}>
        <CardActionArea className={classes.defaultCardActionArea}>
          <img
            className={classes.cardImg}
            src={pic3}
            height={'160px'}
            width={'auto'}
            alt={'Picture'}
          />
          <div className={classes.cardFooter}>
            <h5 className={classes.cardFooterTextH}>Team
              Effectiveness</h5>
            <p className={classes.cardFooterTextP}>Customer service
              | 8
              qns</p>
          </div>
        </CardActionArea>
      </div>
      <div className={classes.cardType}>
        <CardActionArea className={classes.defaultCardActionArea}>
          <img
            className={classes.cardImg}
            src={pic4}
            height={'160px'}
            width={'auto'}
            alt={'Picture'}
          />
          <div className={classes.cardFooter}>
            <h5 className={classes.cardFooterTextH}>Employee
              engagement
              survey</h5>
            <p className={classes.cardFooterTextP}>Customer service
              | 12
              qns</p>
          </div>
        </CardActionArea>
      </div>
      <div className={classes.cardType}>
        <CardActionArea className={classes.defaultCardActionArea}>
          <img
            className={classes.cardImg}
            src={pic5}
            height={'160px'}
            width={'auto'}
            alt={'Picture'}
          />
          <div className={classes.cardFooter}>
            <h5 className={classes.cardFooterTextH}>Team
              Effectiveness</h5>
            <p className={classes.cardFooterTextP}>Customer service
              | 15
              qns</p>
          </div>
        </CardActionArea>
      </div>
      <div className={classes.cardType}>
        <CardActionArea className={classes.defaultCardActionArea}>
          <img
            className={classes.cardImg}
            src={pic6}
            height={'160px'}
            width={'auto'}
            alt={'Picture'}
          />
          <div className={classes.cardFooter}>
            <h5 className={classes.cardFooterTextH}>Exit survey</h5>
            <p className={classes.cardFooterTextP}>Customer service
              | 15
              qns</p>
          </div>
        </CardActionArea>
      </div>
      <div className={classes.cardType}>
        <CardActionArea className={classes.defaultCardActionArea}>
          <img
            className={classes.cardImg}
            src={pic7}
            height={'160px'}
            width={'auto'}
            alt={'Picture'}
          />
          <div className={classes.cardFooter}>
            <h5 className={classes.cardFooterTextH}>Culture</h5>
            <p className={classes.cardFooterTextP}>Customer service
              | 15
              qns</p>
          </div>
        </CardActionArea>
      </div>
      <div className={classes.cardType}>
        <CardActionArea className={classes.defaultCardActionArea}>
          <img
            className={classes.cardImg}
            src={pic8}
            height={'160px'}
            width={'auto'}
            alt={'Picture'}
          />
          <div className={classes.cardFooter}>
            <h5 className={classes.cardFooterTextH}>Survey after job
              interview</h5>
            <p className={classes.cardFooterTextP}>Customer service
              | 15
              qns</p>
          </div>
        </CardActionArea>
      </div>
      <div className={classes.cardType}>
        <CardActionArea className={classes.defaultCardActionArea}>
          <img
            className={classes.cardImg}
            src={pic9}
            height={'160px'}
            width={'auto'}
            alt={'Picture'}
          />
          <div className={classes.cardFooter}>
            <h5 className={classes.cardFooterTextH}>Meeting
              feedback</h5>
            <p className={classes.cardFooterTextP}>Customer service
              | 15
              qns</p>
          </div>
        </CardActionArea>
      </div>
    </div>
  )
}

export default Cards
