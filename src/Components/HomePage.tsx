import { Container, CssBaseline, Grid, Snackbar, ThemeProvider } from "@material-ui/core";
import React, { useState } from "react";
import SignIn from "./SignIn"
import {useLightStyles,lightTheme} from "../Themes/InnermostTheme"
import {useDarkStyles,darkTheme as theme} from '../Themes/InnermostDarkTheme'
import { Route, BrowserRouter as Router, Switch, useHistory, useLocation, Redirect } from "react-router-dom";
import Register from "./Register";
import { Button, message } from "antd";
import { Alert, Color } from "@material-ui/lab";
import { setServers } from "dns";

function HomePage(){
    const classes=useDarkStyles();
    // const [open, setOpen] = useState(false);
    // const [message, setMessage] = useState("");
    // const [severity, setSeverity] = useState<Color>();

    return (
        <Grid container component="main" className={classes.root}>
            <Grid item xs className={classes.background}>
                <CssBaseline/>
                <Container  maxWidth='sm'>
                    <ThemeProvider theme={theme}>
                        {/* <Snackbar 
                            autoHideDuration={800}
                            anchorOrigin={{vertical:'top',horizontal:'right'}}
                            open={open}
                            message={message}
                            key={'top'+'right'}
                            onClose={()=>{setOpen(false)}} > 
                            <Alert onClose={handleSnackBarClose} severity={severity}>
                                {message}
                            </Alert>
                        </Snackbar>若将其放在ThemeProvider外面，颜色没错，但其出现后paper颜色不对。放进来反之 */}
                        <Router>
                            <Switch> {/* 如果不使用 Switch，那么无论到那个页面都会进行重定向。Switch 的作用就是保证只唯一匹配。 */}
                                <Redirect exact path="/" to="login"/> {/*默认页面重定向到 /login */}
                                <Route path="/login" component={SignIn} />
                                <Route path="/register" component={Register} />
                            </Switch>
                        </Router>
                    </ThemeProvider>
                </Container>
            </Grid>
        </Grid>
    );
}

export default HomePage;