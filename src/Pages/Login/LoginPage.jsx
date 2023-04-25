import Header from '../../Component/Header/Header';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import img from "./../../images/login-image/loginpage.png"
import { EmailValid, PasswordValid } from "./../../Component/InputRules/InputRules"
import { useState } from 'react';
import { useEffect } from 'react';
import { supabase } from "../../supabase"
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
const shouldRedirect = true;



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




export default function SignIn() {


    const user = useUser()
    const supabase = useSupabaseClient();


    async function submitHandler(e) {
        e.preventDefault()
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: mainInput.emailValue,
                password: mainInput.passwordValue,
            })
            if (error) {
                toast.warn('اطلاعات وارد شده اشتباه است', {
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
            toast.warn('اطلاعات وارد شده اشتباه است', {
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
    };

    const inputHandler = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: `VALID_${name.toUpperCase()}`,
            value,
            isValid: false
        });
    };

    const inputReducer = (state, action) => {
        switch (action.type) {
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
        isValidEmail: false,
        isValidPassword: false,
        emailValue: "",
        passwordValue: ""
    })

    const [btnDisabled, setBtnDisabled] = useState(true)
    useEffect(() => {

        if (!mainInput.isValidEmail && !mainInput.isValidPassword) {
            setBtnDisabled(false);
        }
        if (mainInput.emailValue.length === 0 || mainInput.passwordValue.length === 0) {
            setBtnDisabled(true);
        }
    }, [mainInput]);

    async function signOut() {
        const { error } = await supabase.auth.signOut()
    }

    return (
        <>
        <Header/>
            {user === null ?
                <>

                    <div className='main-login-page' >
                        <div className="login-title">
                            <img src={img} alt="#" className='w-24 m-auto ' />
                            <h3 className='p-2 text-center'>ورود</h3>
                        </div>
                        <Box component="form" noValidate sx={{ mt: 1, margin: "1rem auto", width: { md: "50%", xs: "80%" } }}>
                            <TextField
                                error={mainInput.isValidEmail}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="ایمیل"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={inputHandler}
                            />
                            <TextField
                                error={mainInput.isValidPassword}
                                margin="normal"
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
                                    <p style={{ fontSize: "14px", textAlign: "start", color: "red" }}>رمز باید حاوی رقم 1حرف بزرگ و1 حرف کوچک</p>
                                </>
                                :
                                <>
                                </>
                            }
                            <Button
                                onClick={submitHandler}
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                disabled={btnDisabled}
                            >
                                ورود
                            </Button>

                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                            <Link to="/users/signup" style={{ color: "green" }}>اکانت نداری ؟ اکانت بساز</Link>
                            <Link to="/users/signup" style={{ color: "green" }}>فراموشی رمز عبور</Link>
                        </Box>
                    </div>
                </>
                :
                <>
                    {shouldRedirect && <Navigate to="/" />}
                </>
            }
        </>
    );
}