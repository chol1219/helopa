import * as React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'react-i18next';

export default function ServiceDropDownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { t }  = useTranslation(['page']);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  return (
    <div>
      <a
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {t('services')}
      </a>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{ top: 10}}
      >
        <MenuItem onClick={() => { navigate('/service1')}} >{t('service_title_1_small')}</MenuItem>
        <MenuItem onClick={() => { navigate('/service2')}} >{t('service_title_2_small')}</MenuItem>
        <MenuItem onClick={() => { navigate('/service3')}} >{t('service_title_3_small')}</MenuItem>
        <MenuItem onClick={() => { navigate('/service4')}} >{t('service_title_4_small')}</MenuItem>
      </Menu>
    </div>
  );
}