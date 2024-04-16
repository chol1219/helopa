import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'react-i18next';
import i18n from "i18next";

export default function LanguageDropDownMenu({language, setLanguage}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { t }  = useTranslation(['page']);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);

    if(lang === 'Deutsch') {
      i18n.changeLanguage('de');
    } else if(lang === 'English') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('fr');
    }
    handleClose();
  };

  return (
    <div>
      <a
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {language}
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
        sx={{ left: -20, top: 10}}
      >
        <MenuItem onClick={() => {changeLanguage('Deutsch')}}>Deutsch</MenuItem>
        <MenuItem onClick={() => {changeLanguage('English')}}>English</MenuItem>
        <MenuItem onClick={() => {changeLanguage('Français')}}>Français</MenuItem>
      </Menu>
    </div>
  );
}