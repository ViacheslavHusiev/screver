import React from 'react'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import Screver from './pictures/screver.png'
import firstCard from './pictures/firstCard.png'
import avatar from './pictures/avatar.jpg'
import pictureForHeader from './pictures/pictureForHeader.png'
import pic1 from './pictures/1pic.png'
import pic2 from './pictures/2pic.png'
import pic3 from './pictures/3pic.png'
import pic4 from './pictures/4pic.png'
import pic5 from './pictures/5pic.png'
import pic6 from './pictures/6pic.png'
import pic7 from './pictures/7pic.png'
import pic8 from './pictures/8pic.png'
import pic9 from './pictures/9pic.png'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import CardActionArea from '@material-ui/core/CardActionArea'

const useStyles = makeStyles((theme) => ({
  buttonScrever: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    color: 'white',
    margin: 5
  },
  textScrever: {
    fontSize: 12
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: 5
  },
  button: {
    background: '#232c40',
    borderRadius: 10,
    color: 'white',
    margin: 5
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
  buttonsCardsHeader: {
    background: '#6063dd',
    borderRadius: 20,
    color: 'white',
    fontSize: 14,
    textTransform: 'capitalize',
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    maxHeight: 30
  },
  searchAndSortColor: {
    color: '#9c81e7'
  }
}))

const App = () => {
  const classes = useStyles()

  const createButton = 'Create >'

  return (
    <div className='root'>
      {/* left drawer */}
      <div className='drawer'>
        <div>
          <IconButton size="large" className={classes.buttonScrever} >
            <div>
              <Icon>
                <img src={Screver} height={27} width={27}/>
              </Icon>
              <Typography className={classes.textScrever}>
                Screver
              </Typography>
            </div>
          </IconButton>
        </div>
        <div>
          <IconButton size="large" className={classes.button} >
            <AddIcon />
          </IconButton>
        </div>
        <div className='avatarC'>
          <Avatar src={avatar} className={classes.avatar}/>
        </div>
      </div>
      {/* all content */}
      <div className='content'>
        {/* header */}
        <div className='contentHeaderContainer'>
          <div className='contentHeader'>
            <div className='contentHeaderTextButton'>
              <h2 className='contentHeaderText'>
                No data yet, let’s get you set up!
              </h2>
              <p className='contentHeaderText'>
                Create survey or quiz and start collecting employees feedback.
                Simply start by selecting the type of campaign.
              </p>
              <Button
                className={classes.buttonCreate}
                variant="text"
              >
                {createButton}
              </Button>
            </div>
            <div className='contentHeaderPicture'>
              <img src={pictureForHeader} height={'210vmax'} width={'auto'}/>
            </div>
          </div>
        </div>
        {/* middle text */}
        <div className='contentGetStartText'>
          <h3>Get started with featured templates</h3>
          <p className='contentHeaderText'>
            These templates can help you start saving time right away,
            no matter which apps you use.
          </p>
        </div>
      {/* cards with header */}
      <div className='cardsContainer'>
        <div className='cardsHeader'>
          <div className='buttonsCardsHeaderContainer'>
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
          <div className='searchAndSortHeaderContainer'>
            <div className='searchAndSortHeader'>
              {/* search */}
              <div className='searchHeader'>
                <IconButton className={classes.searchAndSortColor}>
                  <SearchIcon/>
                </IconButton>
                <InputBase className={classes.searchAndSortColor}
                  placeholder="Search..."
                />
              </div>
              {/* sort */}
              <div className='sortHeader'>
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
                  <Select style={{ width: 100 }}>
                    <MenuItem>Newest</MenuItem>
                    <MenuItem>Oldest</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
        {/* cards sections */}
        <div className='cardsContent'>
          <div className='firstCard'>
            <CardActionArea>
              <img src={firstCard} height={'200px'} width={'auto'}/>
            </CardActionArea>
          </div>
          <div className='cardType'>
            <CardActionArea>
              <img
                className='cardImg'
                src={pic1}
                height={'160px'}
                width={'auto'}
              />
              <div className='cardFooter'>
                <h4 className='cardFooterTextH'>Meeting feedback</h4>
                <p className='cardFooterTextP'>Customer service | 15 qns</p>
              </div>
            </CardActionArea>
          </div>
          <div className='cardType'>
            <CardActionArea>
              <img
                className='cardImg'
                src={pic2}
                height={'160px'}
                width={'auto'}
              />
              <div className='cardFooter'>
                <h4 className='cardFooterTextH'>Work-life Balance</h4>
                <p className='cardFooterTextP'>Customer service | 24 qns</p>
              </div>
            </CardActionArea>
          </div>
          <div className='cardType'>
            <CardActionArea>
              <img
                className='cardImg'
                src={pic3}
                height={'160px'}
                width={'auto'}
              />
              <div className='cardFooter'>
                <h4 className='cardFooterTextH'>Team Effectiveness</h4>
                <p className='cardFooterTextP'>Customer service | 8 qns</p>
              </div>
            </CardActionArea>
          </div>
          <div className='cardType'>
            <CardActionArea>
              <img
                className='cardImg'
                src={pic4}
                height={'160px'}
                width={'auto'}
              />
              <div className='cardFooter'>
                <h4 className='cardFooterTextH'>Employee engagement survey</h4>
                <p className='cardFooterTextP'>Customer service | 12 qns</p>
              </div>
            </CardActionArea>
          </div>
          <div className='cardType'>
            <CardActionArea>
              <img
                className='cardImg'
                src={pic5}
                height={'160px'}
                width={'auto'}
              />
              <div className='cardFooter'>
                <h4 className='cardFooterTextH'>Team Effectiveness</h4>
                <p className='cardFooterTextP'>Customer service | 15 qns</p>
              </div>
            </CardActionArea>
          </div>
          <div className='cardType'>
            <CardActionArea>
              <img
                className='cardImg'
                src={pic6}
                height={'160px'}
                width={'auto'}
              />
              <div className='cardFooter'>
                <h4 className='cardFooterTextH'>Exit survey</h4>
                <p className='cardFooterTextP'>Customer service | 15 qns</p>
              </div>
            </CardActionArea>
          </div>
          <div className='cardType'>
            <CardActionArea>
              <img
                className='cardImg'
                src={pic7}
                height={'160px'}
                width={'auto'}
              />
              <div className='cardFooter'>
                <h4 className='cardFooterTextH'>Culture</h4>
                <p className='cardFooterTextP'>Customer service | 15 qns</p>
              </div>
            </CardActionArea>
          </div>
          <div className='cardType'>
            <CardActionArea>
              <img
                className='cardImg'
                src={pic8}
                height={'160px'}
                width={'auto'}
              />
              <div className='cardFooter'>
                <h4 className='cardFooterTextH'>Survey after job interview</h4>
                <p className='cardFooterTextP'>Customer service | 15 qns</p>
              </div>
            </CardActionArea>
          </div>
          <div className='cardType'>
            <CardActionArea>
              <img
                className='cardImg'
                src={pic9}
                height={'160px'}
                width={'auto'}
              />
              <div className='cardFooter'>
                <h4 className='cardFooterTextH'>Meeting feedback</h4>
                <p className='cardFooterTextP'>Customer service | 15 qns</p>
              </div>
            </CardActionArea>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
