import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../img.png';
import '@fontsource/roboto/300.css';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DiamondIcon from '@mui/icons-material/Diamond';
import PeopleIcon from '@mui/icons-material/People';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {Link} from "react-router-dom";

const pages = [
    {icon: <RecordVoiceOverIcon fontSize={"small"}/> , pageTitle: 'Podcast', href: '/podcast'},
    {icon: <FormatListBulletedIcon fontSize={"small"} />, pageTitle:' Shownotes', href: '/shownotes'},
    {icon: <DiamondIcon fontSize={"small"} />, pageTitle: ' Resources', href: '/resources'},
    {icon: <PeopleIcon fontSize={"small"} />, pageTitle: ' Community', href: '/community'},
    {icon: <AlternateEmailIcon fontSize={"small"} />, pageTitle: ' Team', href: '/about'},
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const logoSize = {height: 100};
  return (
    <AppBar position="static" style={{ background: '#351c75ff'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <img src={logo} alt="Logo" style={logoSize} onClick={() => window.location.href = '/'}/>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#00ffff1e"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                   <Link to={page.href}>
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography color={"#00ffffff"}>{page.pageTitle}</Typography>
                </MenuItem>
                    </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.3rem',
              color: '#00ffffff',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                href={page.href}
                sx={{ my: 2, color: '#00ffffff', display: 'block',
              ':hover': { transform: 'scale(1.1)', color: '#ff00ffff', transition: 'all 0.3s ease-in-out',}}}
              >
                  {page.pageTitle}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;