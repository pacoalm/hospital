/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import Box from '@mui/material/Box';
import { fontFamily, fontSize, gray1, gray2, gray5 } from '../Styles/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FilterFrames from '@mui/icons-material/FilterFrames';
import HandyMan from '@mui/icons-material/Handyman';
import Quirofano from '@mui/icons-material/ManageHistory';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useNavigate } from 'react-router';
import Link from '@mui/material/Link';

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const Navigate = useNavigate();
  const handleClose = (Codigo: string) => {
    setAnchorEl(null);
    switch (Codigo) {
      case 'Consultas':
        Navigate('/DietarioConsultas');
    }
  };

  return (
    <div
      css={css`
        position: fixed;
        box-sizing: border-box;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #fff;
        border-bottom: 1px solid ${gray5};
        box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
      `}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar variant="dense">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" underline="none">
            <Typography variant="h5">Hospital San Juan de Dios</Typography>
          </Link>

          <Button
            id="btn-dietarios"
            variant="contained"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{ flexGrow: 0, ml: 2 }}
          >
            Dietarios
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={() => handleClose('Consultas')}>
              <ListItemIcon>
                <FilterFrames fontSize="small" />
              </ListItemIcon>
              Consultas
            </MenuItem>
            <MenuItem onClick={() => handleClose('Pruebas')}>
              <ListItemIcon>
                <HandyMan fontSize="small" />
              </ListItemIcon>
              Pruebas
            </MenuItem>

            <MenuItem onClick={() => handleClose('Quirofano')}>
              <ListItemIcon>
                <Quirofano fontSize="small" />
              </ListItemIcon>
              Quirófanos
            </MenuItem>
          </Menu>
          <Box
            //margin
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{ flexGrow: 1 }}
          >
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </Box>
    </div>
  );
};
