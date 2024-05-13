import React, { useState } from 'react';
import { School, Menu } from '@mui/icons-material';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
    };
  }

  toggleDrawer = (open) => () => {
    this.setState({ isDrawerOpen: open });
  };

  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <School fontSize="large"  style={{ marginRight: '10px', marginLeft: '10px' }} />
          Study Mate
        </div>

        {/* Menu Icon */}
        

        {/* Drawer */}
        <Drawer anchor="right" open={this.state.isDrawerOpen} onClose={this.toggleDrawer(false)}>
          <List>
          <ListItem button component={Link} to="/studymate">
              <ListItemText primary="Home Page" />
            </ListItem>
            <ListItem button component={Link} to="/studentdashboard">
              <ListItemText primary="Dashboard" />
            </ListItem>
            {/* Add other list items as needed */}
            <ListItem button component={Link} to="/notes">
              <ListItemText primary="Notes" />
            </ListItem>
            <ListItem button component={Link} to="/allsubjects">
              <ListItemText primary="Predictor" />
            </ListItem>
            <ListItem button component={Link} to="/selectionform">
              <ListItemText primary="Company Selection Form" />
            </ListItem>
            <ListItem button component={Link} to="/domains">
              <ListItemText primary="Roadmap to New Domain" />
            </ListItem>
            <ListItem button component={Link} to="/findoutpage">
              <ListItemText primary="Find out Selections" />
            </ListItem>
            
           
            <ListItem button component={Link} to="/community">
              <ListItemText primary="Community" />
            </ListItem>
            <ListItem button component={Link} to="/placementstatistics">
              <ListItemText primary="Placement Statistics" />
            </ListItem>
            <ListItem button component={Link} to="/mentors">
              <ListItemText primary="Mentors" />
            </ListItem>
          </List>

        </Drawer>

        {/* Menu */}
        <ul className="menu">
          <li>
            <Link to="/">Logout</Link>
          </li>
         
          <Menu fontSize="large" style={{ cursor: 'pointer',color:"white" }} onClick={this.toggleDrawer(true)} />
        </ul>
      </div>
    );
  }
}

export default Navbar;
