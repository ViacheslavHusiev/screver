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
import CardItem from './CardItem'

const useStyles = makeStyles(() => ({
  firstCard: {
    height: '200px',
    margin: '15px',
    borderRadius: '15px',
    alignSelf: 'center',
    border: '2px dashed #c7cdff',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      height: 'auto',
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
  }
}))

const cardData = [
  {
    pic: pic1,
    hText: 'Meeting feedback',
    pText: 'Customer service | 15 qns'
  },
  {
    pic: pic2,
    hText: 'Work-life Balance',
    pText: 'Customer service | 24 qns'
  },
  {
    pic: pic3,
    hText: 'Team Effectiveness',
    pText: 'Customer service | 8 qns'
  },
  {
    pic: pic4,
    hText: 'Employee engagement survey',
    pText: 'Customer service | 15 qns'
  },
  {
    pic: pic5,
    hText: 'Team Effectiveness',
    pText: 'Customer service | 15 qns'
  },
  {
    pic: pic6,
    hText: 'Exit survey',
    pText: 'Customer service | 15 qns'
  },
  {
    pic: pic7,
    hText: 'Culture',
    pText: 'Customer service | 15 qns'
  },
  {
    pic: pic8,
    hText: 'Survey after job interview',
    pText: 'Customer service | 15 qns'
  },
  {
    pic: pic9,
    hText: 'Meeting feedback',
    pText: 'Customer service | 15 qns'
  }
]

const Cards = () => {
  const classes = useStyles()

  return (
        <div className='row'>
          <div className='col-xs-12 hidden-sm hidden-md hidden-lg'>
            <div className={classes.firstCard}>
              <CardActionArea>
                <img
                  className={`${classes.cardImgForFirstCard} img-responsive`}
                  src={firstCardXs}
                  alt={'Picture'}
                />
              </CardActionArea>
            </div>
          </div>
          <div className='hidden-xs col-sm-6 col-md-4 col-lg-3'>
            <div className={classes.firstCard}>
              <CardActionArea>
                <img
                  className={`${classes.cardImgForFirstCard}  img-responsive`}
                  src={firstCard}
                  alt={'Picture'}
                />
              </CardActionArea>
            </div>
          </div>
          {cardData.map((card) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
                <CardItem
                  key={card.pic}
                  src={card.pic}
                  footerHText={card.hText}
                  footerPText={card.pText}
                />
              </div>
            )
          })}
        </div>
  )
}

export default Cards
