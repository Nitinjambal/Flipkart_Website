import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Typography, styled } from "@mui/material";
import { Link, Navigate } from "react-router-dom";

const Container = styled(Box)`
  /* border: 1px solid brown; */
  width: 60%;
  height: 50vh;
  margin: auto;
  padding: 10% 30%;
`;

const CheckBox = styled(Box)`
  color: green;
  padding: 20px;
  display: flex;
  margin: auto;
  padding: auto;
`;

const HomeLink = styled(Typography)`
  margin: 0 50px 0 50px;
`;

function OrderSuccess() {
  return (
    <Container>
      <CheckBox>
        <CheckCircleIcon />
        <Typography variant="h3">Order Placed Successfully</Typography>
      </CheckBox>
      <Box>
        <HomeLink>
          {" "}
          <Link style={{ textDecoration: "none" }} to={"/"}>
            {" "}
            Back to home page
          </Link>
        </HomeLink>
      </Box>
    </Container>
  );
}

export default OrderSuccess;
