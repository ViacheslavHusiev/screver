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
import Cards from './Cards'
import Menu from '@material-ui/core/Menu'
import StorageIcon from '@material-ui/icons/Storage'

const useStyles = makeStyles(() => ({
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '15px'
  },
  cardsHeader: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    ['@media (max-width: 767px)']: { // eslint-disable-line no-useless-computed-key
      borderRadius: '40px',
      background: '#5f6dde',
      justifyContent: 'center',
      minWidth: '250px'
    }
  },
  buttonsCardsHeader: {
    background: '#6063dd',
    borderRadius: 20,
    color: 'white',
    fontSize: 14,
    textTransform: 'capitalize',
    height: 35,
    marginRight: 5
  },
  buttonCustomerExperience: {
    border: '1px solid white'
  },
  searchAndSortColor: {
    color: '#9c81e7',
    fontSize: 14,
    textTransform: 'capitalize',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      color: 'white'
    }
  },
  searchAndSortHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      flex: '1 0 auto',
      alignSelf: 'auto'
    }
  },
  formControl: {
    width: 85
  },
  searchHeader: {
    display: 'flex',
    flexDirection: 'row',
    width: 110,
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      flex: '1 0 auto'
    }
  },
  sortHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
}))

const options = [
  'Customer experience',
  'All forms',
  'All languages'
]

const CardsSection = () => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.cardsContainer}>
      <div className={classes.cardsHeader}>
        <div className='hidden-xs'>
          <Button
            className={
              `${classes.buttonCustomerExperience}
               ${classes.buttonsCardsHeader}`
            }
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
              <Select>
                <MenuItem>Newest</MenuItem>
                <MenuItem>Oldest</MenuItem>
              </Select>
            </FormControl>
            <div className='hidden-sm hidden-md hidden-lg'>
              <IconButton
                onClick={handleClick}
              >
                <StorageIcon className={classes.searchAndSortColor}/>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    selected={option === 'Customer experience'}
                    onClick={handleClose}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <Cards/>
    </div>
  )
}

export default CardsSection
