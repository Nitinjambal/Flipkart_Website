import Navbar from "./Navbar";
import Banner from "./Banner";

import { styled, Box } from "@mui/material";
import { useEffect } from "react";
import { getProducts } from "../../redux/productReducer/action";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide.jsx";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;

function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productReducer.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        {products && products.length > 0 && (
          <MidSlide products={products} title="Deal of the Day" timer={true} />
        )}
        <MidSection />
        {products && products.length > 0 && (
          <>
            <Slide
              products={products}
              title="Discountes for You"
              timer={false}
            />
            <Slide products={products} title="Suggested Itmes" timer={false} />
            <Slide products={products} title="Top Selection" timer={false} />
            <Slide
              products={products}
              title="Recommended Items"
              timer={false}
            />
            <Slide products={products} title="Trending offers" timer={false} />
            <Slide
              products={products}
              title="Season's top picks"
              timer={false}
            />
            <Slide
              products={products}
              title="Top Deals on  Accessories"
              timer={false}
            />
          </>
        )}
      </Component>
    </>
  );
}

export default Home;
