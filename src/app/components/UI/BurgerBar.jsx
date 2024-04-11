"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { logo } from "../../assets";
import Link from "next/link";
import Image from 'next/image'

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 3),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

export default function BurgerBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <IconButton
        style={{ color: "black" }}
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 1, marginLeft: "20px", ...(open && { display: "none" }) }}
      >
        <MenuIcon sx={{ height: "40px", width: "40px" }} />
      </IconButton>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            display: "flex",
            padding: "10px 10px",
            zIndex: 999,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <a href="/">
            <Image className="navLeft__logo burger__logo" src={logo} alt="" />
          </a>
        </DrawerHeader>

        <div className="burger__list">
          <div className="burger__list--container">
            <div className="burger__list--wrapper">
              <Link
                onClick={handleDrawerClose}
                href="/about-us"
                className="burger__list--header"
              >
                About Us
              </Link>
            </div>
            <div className="burger__list--wrapper">
              <Link
                onClick={handleDrawerClose}
                href="/gallery"
                className="burger__list--header"
              >
                Gallery
              </Link>
            </div>
            <div className="burger__list--wrapper">
              <Link
                onClick={handleDrawerClose}
                href="/pressure-ashing"
                className="burger__list--header"
              >
                Pressure Washing
              </Link>
            </div>
            <div className="burger__list--wrapper">
              <Link
                onClick={handleDrawerClose}
                href="/window-cleaning"
                className="burger__list--header"
              >
                Window Cleaning
              </Link>
            </div>
            <div className="burger__list--wrapper">
              <Link
                onClick={handleDrawerClose}
                href="/gutter-cleaning"
                className="burger__list--header"
              >
                Gutter Cleaning
              </Link>
            </div>
            <div className="burger__list--wrapper">
              <Link
                onClick={handleDrawerClose}
                href="/sealing"
                className="burger__list--header"
              >
                Driveway Sealing
              </Link>
            </div>
            <div className="burger__list--wrapper">
              <a
                onClick={handleDrawerClose}
                href="https://www.instagram.com/totalexteriorcleaning_/"
                className="burger__list--header"
              >
                Follow Us!
              </a>
            </div>
            <div className="burger__list--wrapper">
              <Link
                onClick={handleDrawerClose}
                href="/areas-of-service"
                className="burger__list--header"
              >
                Areas Serviced
              </Link>
            </div>
            <div className="burger__list--wrapper">
              <Link
                onClick={handleDrawerClose}
                href="/contact-us"
                className="burger__list--header"
              >
                Contact Us
              </Link>
            </div>
          </div>
          {/* <ul className="burger__links--wrapper">
            <a
              onClick={handleDrawerClose}
              href="#services"
              className="burger__links"
            >
              <BiHelpCircle />
              <p className="burger__link">Help Center</p>
            </a>
            <li className="burger__links">
              <BsPerson />
              <p className="burger__link">Account</p>
            </li>
            <li className="burger__links">
              <BiCart />
              <p className="burger__link">Basket</p>
            </li>
          </ul> */}
        </div>
      </Drawer>
    </Box>
  );
}
