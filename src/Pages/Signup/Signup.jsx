import React, { useState, useEffect, useReducer } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import img from "./../../images/login-image/loginpage.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { supabase } from "../../supabase"
import { maxValidtions, minValidtions, UserValid, LastNameValid, EmailValid, PasswordValid } from "./../../Component/InputRules/InputRules"
import { useUser } from '@supabase/auth-helpers-react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../../Component/Header/Header';
const shouldRedirect = true;



export default function SignUp(props) {

  const user = useUser()

  const [allInputsData, setAllInputsData] = useState({});

  async function submitHandler(e) {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp({
        email: allInputsData.email,
        password: allInputsData.password,
      })
      console.log(error, data);
      if (data) {
        toast.success('لطفا ایمیل خود را چک کنید', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.warn('خطایی رخ داده است', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

  }


  // const [name, setName] = useState(false)
  // const [lastNames, setLastName] = useState(false)
  // const [email, setEmail] = useState(false)
  // const [password, setPassword] = useState(false)
  // const [boolean, setBoolean] = useReducer({
  //   name: true,
  //   lastNames: true,
  //   email: true,
  //   password: true,
  // })


  // const [inputLastInfo, setInputLastInfo] = useState()


  // const gmailPattern = /[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/ig
  // const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
  // const inputHandler = (e) => {
  //   const { name, value } = e.target;
  //   setName(value)
  //   setLastName(value)
  //   setEmail(value)
  //   setPassword(value)


  //   if (name === "name") {
  //     setName(value);
  //     if (value.length >= 4) {
  //       setBoolean({ ...boolean, name: false });
  //     } else {
  //       setBoolean({ ...boolean, name: true });
  //     }
  //   } else if (name === "lastNames") {
  //     setLastName(value);
  //     if (value.length >= 4) {
  //       setBoolean({ ...boolean, lastNames: false });
  //     } else {
  //       setBoolean({ ...boolean, lastNames: true });
  //     }
  //   } else if (name === "email") {
  //     setEmail(value);
  //     if (gmailPattern.test(value)) {
  //       setBoolean({ ...boolean, email: false });
  //     } else {
  //       setBoolean({ ...boolean, email: true });
  //     }
  //   } else if (name === "password") {
  //     setPassword(value);
  //     if (passwordPattern.test(value)) {
  //       setBoolean({ ...boolean, password: false });
  //     } else {
  //       setBoolean({ ...boolean, password: true });
  //     }
  //   }
  // }

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setAllInputsData((prevState) => ({ ...prevState, [name]: value }));
    console.log(allInputsData);
    dispatch({

      type: `VALID_${name.toUpperCase()}`,
      value,
      isValid: false
    });
  };

  const inputReducer = (state, action) => {
    switch (action.type) {
      case "VALID_USER": {
        return {
          ...state,
          userValue: action.value,
          isValidUser: UserValid(action.value, action)
        };
      }
      case "VALID_LAST_NAME": {
        return {
          ...state,
          lastNameValue: action.value,
          isValidLastName: LastNameValid(action.value, action)
        };
      }
      case "VALID_EMAIL": {
        return {
          ...state,
          emailValue: action.value,
          isValidEmail: EmailValid(action.value, action)
        };
      }
      case "VALID_PASSWORD": {
        return {
          ...state,
          passwordValue: action.value,
          isValidPassword: PasswordValid(action.value, action)
        };
      }
      default: {
        return state;
      }
    }
  };
  const [mainInput, dispatch] = useReducer(inputReducer, {
    isValidUser: false,
    isValidLastName: false,
    isValidEmail: false,
    isValidPassword: false,
    userValue: "",
    lastNameValue: "",
    emailValue: "",
    passwordValue: ""
  })

  const [btnDisabled, setBtnDisabled] = useState(true)
  useEffect(() => {

    if (!mainInput.isValidEmail && !mainInput.isValidPassword) {
      setBtnDisabled(false);
    }
    if (mainInput.passwordValue.length === 0 || mainInput.passwordValue.length === 0) {
      setBtnDisabled(true);
    }
  }, [mainInput]);

  return (
    <>
    <Header/>
      {user === null ?
        <>
          <div className='main-login-page' >

            <div className="login-title">
              <img src={img} alt="#" className='w-24 m-auto '/>
              <h3 className='p-2 text-center'>ثبت نام</h3>
            </div>

            <Box component="form" onSubmit={submitHandler} noValidate sx={{ margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: "1rem", width: { md: "50%", xs: "80%" } }}>

              <TextField
                error={mainInput.isValidEmail}
                margin="normal"
                required
                fullWidth
                name="email"
                label="ایمیل"
                type="email"
                id="email"
                onChange={inputHandler}
                autoComplete="email"
              />

              <TextField
                error={mainInput.isValidPassword}
                required
                fullWidth
                name="password"
                label="رمز عبور"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={inputHandler}
              />
              {mainInput.isValidPassword === true ?
                <>
                  <small style={{ fontSize: "14px", textAlign: "start" }}>رمز باید حاوی رقم 1حرف بزرگ و1 حرف کوچک</small>
                </>
                :
                <>

                </>
              }
              <Button

                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={btnDisabled}
              >
                ثبت نام
              </Button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <ToastContainer />
              <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <Link to="/users/login" style={{ color: "green" }}>اکانت داری ؟ وارد شوید</Link>
              </Box>
            </Box>
          </div>
        </>
        :
        <>
          {shouldRedirect && <Navigate to="/" />}
        </>}
    </>

  );
}