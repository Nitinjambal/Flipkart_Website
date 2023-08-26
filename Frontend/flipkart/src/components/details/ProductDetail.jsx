import {
  Typography,
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  styled,
} from "@mui/material";
import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(LocalOfferIcon)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;

const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;

  & > td {
    font-size: 14px;
     margin-top: 10px;
     border: none;
  }
`;

function ProductDetail({ product }) {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
      <Typography>{product?.title?.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 Ratings & 1 Reviews
        <Box component="span">
          <img
            src={fassured}
            alt="assured"
            style={{ width: 77, marginLeft: 20 }}
          />
        </Box>
      </Typography>

      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product?.price?.cost}
        </Box>{" "}
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product?.price?.mrp}</strike>
        </Box>{" "}
        <Box component="span" style={{ color: "#388E3C" }}>
          {product?.price?.discount}
        </Box>
      </Typography>

      <Typography>Available Offers</Typography>

      <SmallText>
        <Typography>
          {" "}
          <StyledBadge /> Get extra 20% off upto ₹50 on 1 item(s) T&C
        </Typography>
        <Typography>
          {" "}
          <StyledBadge /> Get extra 20% off upto ₹50 on 1 items
        </Typography>
        <Typography>
          {" "}
          <StyledBadge /> Sign up for Flipkart Pay later and get Flipkart Gift
          Card worth ₹100 * Know more{" "}
        </Typography>
        <Typography>
          {" "}
          <StyledBadge /> Get 10% off by Axis Bank Card
        </Typography>
        <Typography>
          {" "}
          <StyledBadge /> No Cost EMI with Gift Card worth ₹100 * Know more{" "}
        </Typography>
      </SmallText>

      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: "600" }}>
              Delivery by {date.toDateString()} | ₹40{" "}
            </TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box
                component="span"
                style={{ fontWeight: "600", color: "#2874f0" }}
              >
                SuperComNet
              </Box>
              <Typography>GST invoice enable</Typography>
              <Typography>
                View more seller starting from ₹{product?.price?.cost}{" "}
              </Typography>
            </TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell colSpan={2}>
              <img src={adURL} style={{ width: 390 }} alt="flipkartpoints" />
            </TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
}

export default ProductDetail;
