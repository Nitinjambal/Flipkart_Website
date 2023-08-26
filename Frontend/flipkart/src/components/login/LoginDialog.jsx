import React, { useContext, useState } from "react";
import {
  Dialog,
  styled,
  TextField,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { loginUser, signupUser } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import { Link } from "react-router-dom";


const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 82%;
  width: 28%;
  padding: 45px 35px;
  & > p,
  h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginBtn = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 40px;
  border-radius: 2px;
  :hover {
    background: #fb641b;
    color: #fff;
  }
`;

const RequestOtp = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;

  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const initialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const signupInitinalValue = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValue = {
  email: "",
  password: "",
};

function LoginDialog({ open, setOpen }) {
  const [account, toggleAccount] = useState(initialValue.login);
  const [signup, setSignup] = useState(signupInitinalValue);
  const { setAccount } = useContext(DataContext);
  const [login, setLogin] = useState(loginInitialValue);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(initialValue.login);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAccount(initialValue.signup);
  };

  const toggleLogin = () => {
    toggleAccount(initialValue.login);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    let res = await signupUser(signup);
    if (!res) return;
    handleClose();
    setAccount(signup.firstname + signup.lastname);
  };


  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUer = async () => {
    let res = await loginUser(login);
    if (res.status == 200) {
      handleClose();
      setAccount(res.data.isUserPresent.firstname);
    } else {
      setError(true);
    }
  };


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                type="email"
                onChange={(e) => onValueChange(e)}
                name="email"
                label="Enter Email"
              />
              {error && <Error>Please enter valid email or password</Error>}
              <TextField
                variant="standard"
                type="password"
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginBtn onClick={() => loginUer()}>Login</LoginBtn>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOtp>Request OTP</RequestOtp>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                name="firstname"
                type="text"
                label="Enter Firstname"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                variant="standard"
                name="lastname"
                type="text"
                label="Enter Lastname"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                variant="standard"
                name="email"
                type="email"
                label="Enter Email"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                variant="standard"
                type="text"
                name="password"
                label="Enter Password"
                onChange={(e) => onInputChange(e)}
              />

              <TextField
                variant="standard"
                name="phone"
                type="number"
                label="Enter Phone"
                onChange={(e) => onInputChange(e)}
              />
              <LoginBtn onClick={() => handleSignup()}>Continue</LoginBtn>
              <RequestOtp onClick={() => toggleLogin()}>
                Existing User? Log in
              </RequestOtp>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
}

export default LoginDialog;
