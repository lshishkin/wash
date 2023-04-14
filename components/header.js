import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";

const drawerWidth = 240;
const navItems = [
  { title: "О нас", id: "about" },
  { title: "Фотогалерея", id: "photo" },
  { title: "Цены", id: "price" },
  { title: "Как нас найти", id: "price" }
];

export const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <AnchorLink href="#top" style={{ all: "unset", cursor: "pointer" }}>
          Ядрёна WASH
        </AnchorLink>
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ title, id }) => (
          <ListItem key={title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={
                  <AnchorLink
                    offset="60"
                    href={`#${id}`}
                    style={{ all: "unset" }}
                  >
                    {title}
                  </AnchorLink>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {" "}
      <AppBar component="nav">
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
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "left",
              display: { xs: "none", sm: "block" },
              fontWeight: "bold"
            }}
          >
            <AnchorLink href="#top" style={{ all: "unset", cursor: "pointer" }}>
              Ядрёна WASH
            </AnchorLink>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ title, id }) => (
              <Button key={title} sx={{ color: "#fff" }}>
                <AnchorLink
                  offset="60"
                  href={`#${id}`}
                  style={{ all: "unset" }}
                >
                  {title}
                </AnchorLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};
