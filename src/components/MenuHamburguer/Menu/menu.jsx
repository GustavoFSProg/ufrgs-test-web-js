import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import { MenuContainer } from './styled-menu'
import { Link } from 'react-router-dom'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <MenuContainer>
      <Button aria-controls="simple-menu" aria-haspopup="true"
    
       onClick={handleClick}>
        <MenuIcon style={{ color: 'white', fontSize: '34px' }} />
      </Button>
     

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{marginTop: '24px', width: '300px'}}
      >
        <MenuItem onClick={handleClose}>
        <span >
            HOME
          </span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <span >
            POST
          </span>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>
          <Link style={{ textDecoration: 'none' }} to="/register-post">
            CADASTRO DE POST
          </Link>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>BLOG</MenuItem> */}
       
      </Menu>
    </MenuContainer>
  )
}
