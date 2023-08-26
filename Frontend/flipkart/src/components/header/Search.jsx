import React, { useEffect, useState } from "react";
import { Box, InputBase, List, ListItem, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/productReducer/action/";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  background-color: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background-color: #ffffff;
  color: #000;
  margin-top: 36px;
`;

function Search() {
  const [text, setText] = useState("");
  const dispatch = useDispatch("");
  const { products } = useSelector((store) => store.productReducer.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };

  
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for Products,Brand and more"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper>
          {products
            ?.filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => setText("")}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                  }}
                >
                  <img
                    style={{
                      height: "30px",
                      marginRight: "5px",
                      textAlign: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    src={product.url}
                    alt={text}
                  />
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
}

export default Search;
