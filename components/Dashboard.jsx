"use client";

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import FilterBAndWIcon from "@mui/icons-material/FilterBAndW";
import BuildIcon from "@mui/icons-material/Build";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Build, ExpandLess, ExpandMore } from "@mui/icons-material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Collapse, ListSubheader } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { Update } from "@mui/icons-material";

const drawerWidth = 240;
const navTitles = ["Ana Sayfa", "Blog", "Galeri", "Akış"];

function ResponsiveDrawer(props) {
  const { data: session } = useSession();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState({});
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (index) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index],
    }));
  };

  const handleLogOut = async () => {
    // Default callback URL
    let callbackUrl = "/";

    // Update the callback URL if on the client-side
    if (typeof window !== "undefined") {
      callbackUrl = `${window.location.origin}/`;
    }

    await signOut({
      redirect: false,
      callbackUrl: callbackUrl,
    });

    router.push("/");
  };

  const firstLinks = [
    { name: "Ana Sayfa", icon: <HomeIcon />, path:"/", hasNested: false },
    {
      name: "Blog Postları",
      icon: <WysiwygIcon />,
      path: "/dashboard/posts",
      hasNested: true,
    },
    {
      name: "Galeri",
      icon: <FilterBAndWIcon />,
      path: "/dashboard/gallery",
      hasNested: true,
    },
    {
      name: "Akış",
      icon: <RssFeedIcon />,
      path: "/dashboard/feed",
      hasNested: true,
    },
    {
      name: "Settings",
      icon: <BuildIcon />,
      path: "/dashboard/settings",
      hasNested: false,
    },
    {
      name: "Logout",
      icon: <ExitToAppIcon />,
      action: handleLogOut,
      hasNested: false,
    },
  ];

  const nestedLinks = [
    { name: "New", path: "/new" },
    { name: "Update", path: "/update" },
  ];

  const drawer = (
    <div>
      {/* ... */}
      <List>
        {firstLinks.map((link, index) => (
          <React.Fragment key={link.name}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={
                  link.action || (() => link.hasNested && handleClick(index))
                }
              >
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.name} />
                {link.hasNested &&
                  (open[index] ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            </ListItem>
            {link.hasNested && (
              <Collapse
                in={open[index]}
                timeout="auto"
                unmountOnExit
              >
                <List
                  component="div"
                  disablePadding
                >
                  {nestedLinks.map((nestedLink) => (
                    <ListItem
                      key={nestedLink.name}
                      disablePadding
                    >
                      <Link href={link.path + nestedLink.path}>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary={nestedLink.name} />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>

      {/* ... */}
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            Kullanıcı Paneli
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
