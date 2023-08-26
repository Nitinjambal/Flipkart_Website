import {
  AppBar,
  Toolbar,
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import Search from "./Search";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
  background-color: #2874f0;
  height: 55px;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;

const Subheading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImge = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CustomBtnWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuBtn = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

function Header() {
  const [open, setOpen] = useState(false);

  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box styl={{ width: 200 }} onClick={handleClose}>
      <List>
        <ListItem button>
          <CustomButton />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <MenuBtn color="inherit" onClick={handleOpen}>
          <MenuIcon />
        </MenuBtn>

        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>

        <Component to="/">
          <img
            src={logoURL}
            alt="logo"
            style={{ width: 75, marginRight: 30 }}
          />
          <Box style={{ display: "flex" }}>
            <Subheading>
              Explore{" "}
              <Box component={"span"} style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </Subheading>
            <PlusImge src={subURL} alt="sub_logo" />
          </Box>
        </Component>
        <Search />
        <CustomBtnWrapper>
          <CustomButton />
        </CustomBtnWrapper>
      </Toolbar>
    </StyledHeader>
  );
}

export default Header;
