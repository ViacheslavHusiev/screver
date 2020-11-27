import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import CardActionArea from '@material-ui/core/CardActionArea'
import firstCard from '../pictures/firstCard.png'
import pic1 from '../pictures/1pic.png'
import pic2 from '../pictures/2pic.png'
import pic3 from '../pictures/3pic.png'
import pic4 from '../pictures/4pic.png'
import pic5 from '../pictures/5pic.png'
import pic6 from '../pictures/6pic.png'
import pic7 from '../pictures/7pic.png'
import pic8 from '../pictures/8pic.png'
import pic9 from '../pictures/9pic.png'

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    marginRight: '5%',
    marginLeft: '5%',
    marginTop: '15px',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginLeft: 0
    }
  },
  cardsHeader: {
    display: 'flex',
    flexDirection: 'row',
    height: '50px',
    padding: '10px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  },
  buttonsCardsHeaderContainer: {
    display: 'flex'
  },
  buttonsCardsHeader: {
    background: '#6063dd',
    borderRadius: 20,
    color: 'white',
    fontSize: 14,
    textTransform: 'capitalize',
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    height: 35,
    [theme.breakpoints.down('xs')]: {
      height: 50,
      paddingTop: 20,
      paddingBottom: 20,
      borderRadius: 10
    }
  },
  searchAndSortColor: {
    color: '#9c81e7',
    fontSize: 14,
    textTransform: 'capitalize'
  },
  searchAndSortHeaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    flex: '1 0 auto',
    flexWrap: 'nowrap'
  },
  searchAndSortHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'nowrap'
  },
  searchHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '110px',
    marginRight: '10px'
  },
  sortHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  formControl: {
    width: 80
  },
  cardsContent: {
    display: 'flex',
    flexDirection: 'row',
    flex: '1 0 auto',
    flexWrap: 'wrap',
    padding: '5px',
    justifyContent: 'center'
  },
  firstCard: {
    width: '220px',
    margin: '15px',
    borderRadius: '15px'
  },
  cardType: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: 'whitesmoke',
    borderRadius: '10px',
    height: '200px',
    width: '220px',
    margin: '15px'
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px'
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'column'
  },
  cardFooterTextH: {
    marginTop: '0px',
    marginLeft: '10px'
  },
  cardFooterTextP: {
    color: 'darkgrey',
    marginTop: '-10px',
    marginLeft: '10px'
  }
}))

const CardsSection = () => {
  const classes = useStyles()

  return (
    <div className='container-fluid'>
      <div className='row row-no-gutters'>
        <div className='col'>
          <div className={classes.cardsContainer}>
            <div className={classes.cardsHeader}>
              <div className={classes.buttonsCardsHeaderContainer}>
                <Button
                  className={classes.buttonsCardsHeader}
                  variant={'outlined'}
                  size="small"
                >
                  Customer experience
                </Button>
                <Button
                  size="small"
                  className={classes.buttonsCardsHeader}
                >
                  All forms
                </Button>
                <Button
                  size="small"
                  className={classes.buttonsCardsHeader}
                >
                  All languages
                </Button>
              </div>
              {/* sort + search container */}
              <div className={classes.searchAndSortHeaderContainer}>
                <div className={classes.searchAndSortHeader}>
                  {/* search */}
                  <div className={classes.searchHeader}>
                    <IconButton className={classes.searchAndSortColor}>
                      <SearchIcon/>
                    </IconButton>
                    <InputBase className={classes.searchAndSortColor}
                               placeholder="Search..."
                    />
                  </div>
                  {/* sort */}
                  <div className={classes.sortHeader}>
                    <Typography
                      className={classes.searchAndSortColor}
                    >
                      Sort:
                    </Typography>
                    <FormControl
                      variant={'outlined'}
                      className={classes.formControl}
                    >
                      <InputLabel
                        className={classes.searchAndSortColor}
                      >
                        Newest
                      </InputLabel>
                      <Select >
                        <MenuItem>Newest</MenuItem>
                        <MenuItem>Oldest</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            {/* cards sections */}
            <div className={classes.cardsContent}>
              <div className={classes.firstCard}>
                <CardActionArea>
                  <img src={firstCard} height={'195px'} width={'auto'}
                       alt={'Picture'}/>
                </CardActionArea>
              </div>
              <div className={classes.cardType}>
                <CardActionArea>
                  <img
                    className={classes.cardImg}
                    src={pic1}
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
              <div className={classes.cardType}>
                <CardActionArea>
                  <img
                    className={classes.cardImg}
                    src={pic2}
                    height={'160px'}
                    width={'auto'}
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
                <CardActionArea>
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
                <CardActionArea>
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
                <CardActionArea>
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
                <CardActionArea>
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
                <CardActionArea>
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
                <CardActionArea>
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
                <CardActionArea>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsSection
