import { Avatar, Box, Button, Checkbox, Container, createMuiTheme, CssBaseline, fade, FormControlLabel, Grid, Link, makeStyles, MuiThemeProvider, Paper, Snackbar, TextField, ThemeProvider, Typography } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import Copyright from "./Copyright";
import {useLightStyles,lightTheme} from "../Themes/InnermostTheme"
import {useDarkStyles,darkTheme as theme} from '../Themes/InnermostDarkTheme'
import Register from "./Register";
import { UserManager } from "oidc-client";
import { useHistory } from "react-router-dom";
import { Alert, Color } from "@material-ui/lab";

function SignIn(props:any){
  const classes=useDarkStyles();
  //Hooks
  const [account,setAccount]=useState("");
  const [password,setPassword]=useState("");
  const [accountType,setAccountType]=useState("Email");
  const [rememberMe,setRememberMe]=useState(false);
  const [passwordPatternError, setPasswordError] = useState({
    passwordPatternError:false,
    passwordErrorHelperText:""
  });
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<Color>();

  function handlePasswordChange(e:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>){
    setPassword(e.target.value);
    if(passwordPatternError.passwordPatternError){
      setPasswordError({passwordPatternError:false,passwordErrorHelperText:""});
    }
  }

  //发送登陆表单前的检查
  function checkValidationBeforeLogin():boolean{
    if(password.length<8||password.length>26){
      setPasswordError({passwordPatternError:true,passwordErrorHelperText:"密码必须为8-26个字符(数字、字母、特殊字符)"});
      return false;
    }
    return true;
  }
  
  //登陆请求
  async function login(data:any){
    if(!checkValidationBeforeLogin())
      return;

    await fetch("https://localhost:5106/Account/Login",{
      method:"POST",
      headers:{
        'Content-Type':"application/json",
        'Accept':"*/*"
      },
      mode: 'cors',
      body:JSON.stringify(data),
    })
    .then((response)=>{
      if(response.ok){
        setOpen(true);
        setSeverity("success");
        setMessage("登陆成功");
      }
      else if(response.status==401){
        setOpen(true);
        setSeverity("error");
        setMessage("账号或密码错误");
      }
    });
  }
  
  return(
    <Paper className={classes.paper} elevation={10}>
      
        <div className={classes.paper}>
          <Snackbar 
                autoHideDuration={1500}
                anchorOrigin={{vertical:'top',horizontal:'right'}}
                open={open}
                message={message}
                key={'top'+'right'}
                onClose={()=>{setOpen(false)}} > 
                <Alert onClose={()=>{setOpen(false)}} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>{/* 若将其放在ThemeProvider外面，颜色没错，但其出现后paper颜色不对。放进来反之 */}
            <Typography className={classes.loginPaperTitle} component="h1" variant="h4">
              Welcome to Innermost 🎉
            </Typography>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="account"
              label="Account"
              name="account"
              autoComplete="account"
              onChange={(e)=>{setAccount(e.target.value)}}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePasswordChange}
              error={passwordPatternError.passwordPatternError}
              helperText={passwordPatternError.passwordErrorHelperText}
            />
            <Grid container>
              <Grid item xs>
                <FormControlLabel
                  id="rememberMe"
                  control={<Checkbox value="remember" color="primary" onChange={(e)=>{setRememberMe(e.target.checked)}}/>}
                  label="Remember me"
                />
              </Grid>
              <Grid item>
                <Link href="#" className={classes.link}>忘记密码</Link>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs>
                <Button
                  //type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={()=>{login({
                    "account":account,
                    "password":password,
                    "accountType":accountType,
                    "rememberMe":rememberMe
                  })}}
                >
                  Sign In
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  href="../register"
                >
                  Register
                </Button>
              </Grid>
            </Grid>
        </div>
        <Box mt={3} mb={3}>
          <Copyright />
        </Box>
      </Paper>
    
  )
}

export default SignIn;