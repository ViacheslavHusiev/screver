import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import Screver from './pictures/screver.png'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import Avatar from '@material-ui/core/Avatar'
import avatar from './pictures/avatar.jpg'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// xs<768 sm=768 md=992 lg=1200

const useStyles = makeStyles((theme) => ({
  drawer: {
    background: '#0b142b',
    width: '75px',
    bottom: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      display: 'flex',
      flexDirection: 'row',
      width: '100%'
    }
  },
  buttonScrever: {
    borderRadius: '10px',
    color: 'white',
    margin: '5px'
  },
  screverIcon: {
    height: 30,
    width: 30
  },
  addIcon: {
    height: 22,
    width: 22
  },
  textScrever: {
    fontSize: 14
  },
  buttonAddContainer: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flex: '1 0 auto',
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      flexDirection: 'row',
      justifyContent: 'flex-end'
    }
  },
  buttonAdd: {
    background: '#232c40',
    borderRadius: 10,
    color: 'white',
    alignSelf: 'center',
    margin: '10px'
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  avatarC: {
    margin: '10px'
  }
}))

const Drawer = () => {
  const classes = useStyles()

  return (
  <div className={classes.drawer}>
    <IconButton className={classes.buttonScrever}>
      <div>
        <Icon className={classes.screverIcon}>
          <img src={Screver} height={'100%'} width={'100%'}
               alt={'Picture'}/>
        </Icon>
        <Typography className={classes.textScrever}>
          Screver
        </Typography>
      </div>
    </IconButton>
    <div className={classes.buttonAddContainer}>
      <IconButton size="large" className={classes.buttonAdd}>
        <AddIcon className={classes.addIcon}/>
      </IconButton>
      <div className={classes.avatarC}>
        <Avatar src={avatar} className={classes.avatar}/>
      </div>
    </div>
  </div>
  )
}

export default Drawer
