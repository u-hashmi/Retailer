import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MainScreen from "../screens/MainScreen";
import Container from "@mui/material/Container";

//Material UI Icons
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

//Components
import ConfirmationDialog from "../components/ConfirmationDialog";
import HeaderBar from "./HeaderBar";
import { COLORS, GRADIENT, CONSTS } from "../theme";

const drawerWidth = 80;

const menuItems = [
  { icon: <DashboardOutlinedIcon />, screenName: "Dashboard" },
  { icon: <PhoneEnabledOutlinedIcon />, screenName: "Contacts" },
  { icon: <AssignmentOutlinedIcon />, screenName: "Tasks" },
  { icon: <InsightsOutlinedIcon />, screenName: "Analysis" },
  { icon: <MailOutlineOutlinedIcon />, screenName: "Messages" },
  { icon: <StorageOutlinedIcon />, screenName: "Database" },
  { icon: <SecurityOutlinedIcon />, screenName: "Security" },
  { icon: <SettingsOutlinedIcon />, screenName: "Settings" },
  { icon: <SpeedOutlinedIcon />, screenName: "Performance" }
];

const NavigationDrawer = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [appHeaderTitle, setAppHeaderTitle] = useState("Dashboard");
  const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [screenName, setScreenName] = useState("Dashboard");

  const handleItemClick = (index, screenName) => {
    setSelectedItem(index);
    setScreenName(screenName);
    setAppHeaderTitle(screenName);
  };

  const handleLogoutClick = () => {
    setLogoutDialogOpen(true);
  };

  const handleLogoutConfirm = () => {
    // Handle the logout logic here
    setLogoutDialogOpen(false);
  };

  const handleLogoutCancel = () => {
    setLogoutDialogOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <HeaderBar title={appHeaderTitle} />
      <Drawer
        fixed
        sx={{
          background: GRADIENT.gradient,
          justifyContent: "center",
          display: "block",
          flexDirection: "column",
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            background: GRADIENT.primaryGradient,
            alignItems: "center",
            width: drawerWidth,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflowX: "hidden"
          }
        }}
        variant="permanent"
        anchor="left"
      >
        {/* Application Title at the Top */}
        <List disablePadding>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton sx={{ minHeight: 65, justifyContent: "center" }}>
              <ListItemIcon sx={{ justifyContent: "center" }}>
                <Typography
                  sx={{
                    color: COLORS.iconFaded,
                    fontWeight: "bold",
                    fontSize: 18,
                    display: "flex",
                    justifyContent: "center",
                    margin: 0,
                    fontFamily: "'Gabarito', sans-serif"
                  }}
                >
                  CRM
                </Typography>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
        {/* Application Icons in the Middle */}
        <List>
          {menuItems.map((menuItem, index) => (
            <ListItem disablePadding key={index} sx={{ display: "block" }}>
              <ListItemButton
                selected={index === selectedItem}
                onClick={() => handleItemClick(index, menuItem.screenName)}
                sx={{
                  minHeight: 48,
                  width: 48,
                  marginBottom: "5px",
                  display: "flex",
                  borderRadius: 80,
                  color: COLORS.iconFaded,
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor:
                      index !== selectedItem ? "default" : COLORS.secondary
                  },
                  "&.Mui-selected": {
                    backgroundColor: COLORS.secondary
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                    color: index === selectedItem ? COLORS.white : "inherit"
                  }}
                >
                  {menuItem.icon}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Application Logout at the Bottom */}
        <List sx={{ paddingBottom: 0 }}>
          <Divider />
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={handleLogoutClick}
              sx={{ minHeight: 48, justifyContent: "center" }}
            >
              <ListItemIcon sx={{ justifyContent: "center" }}>
                <LogoutRoundedIcon sx={{ color: COLORS.iconFaded }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <ConfirmationDialog
        open={isLogoutDialogOpen}
        onClose={handleLogoutCancel}
        onConfirm={handleLogoutConfirm}
        title="Logout Confirmation"
        content="Are you sure you want to logout?"
      />
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "92.8vh",
          marginTop: "66px",
          padding: "0px 10px"
        }}
      >
        <MainScreen class="mainArea" screenName={screenName} />
      </Box>
    </Box>
  );
};

export default NavigationDrawer;
