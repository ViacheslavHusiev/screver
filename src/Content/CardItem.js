import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardActionArea from '@material-ui/core/CardActionArea'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  cardType: {
    background: 'whitesmoke',
    borderRadius: '10px',
    height: '200px',
    width: '210px',
    margin: '15px',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      height: '130px',
      width: 'auto',
      flexDirection: 'row'
    }
  },
  defaultCardActionArea: {
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      display: 'flex',
      flexDirection: 'row',
      height: '130px',
      width: 'auto',
      justifyContent: 'flex-start'
    }
  },
  cardImg: {
    height: '150px',
    objectFit: 'cover',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      height: '100%',
      width: 'auto',
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

const CardItem = ({ src, footerHText, footerPText }) => {
  const classes = useStyles()

  return (
      <div className={classes.cardType}>
        <CardActionArea className={classes.defaultCardActionArea}>
          <img
            className={`${classes.cardImg} img-responsive`}
            src={src}
            alt={'Picture'}
          />
          <div className={classes.cardFooter}>
            <h5 className={classes.cardFooterTextH}>{footerHText}</h5>
            <p className={classes.cardFooterTextP}>{footerPText}</p>
          </div>
        </CardActionArea>
      </div>
  )
}

CardItem.propTypes = {
  src: PropTypes.any.isRequired,
  footerHText: PropTypes.string.isRequired,
  footerPText: PropTypes.string.isRequired
}

export default CardItem
