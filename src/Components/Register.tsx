import { Box, Container, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import {useLightStyles,lightTheme} from "../Themes/InnermostTheme"
import {useDarkStyles,darkTheme as theme} from '../Themes/InnermostDarkTheme'
import Copyright from "./Copyright";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function Register(){
    const classes=useDarkStyles();

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };
    const [gender, setGender] = useState<string|null>(null);


    return(
        <Paper className={classes.paper} elevation={10}>
            <Grid>
                <Typography align={'center'} component="h1" variant="h4" className={classes.registerHeaderText}>
                    Be with Innermost 👾
                </Typography>
                
                <Grid container spacing={2}>
                    <Grid item xs>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                        />
                    </Grid>

                    <Grid item xs>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="username"
                            label="UserName"
                            type="username"
                            id="username"
                        />
                    </Grid>
                </Grid>

                <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                />

                <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="confirmpassword"
                        label="ComfirmPassword"
                        type="confirmpassword"
                        id="confirmpassword"
                />
                <Grid container spacing={2}>
                    <Grid item xs>
                        <FormControl required fullWidth variant={'outlined'}  className={classes.genderSelector}>
                            <InputLabel id="register-gender-label">Gender</InputLabel>
                            <Select
                            labelId="register-gender-label"
                            id="register-gender-label"
                            value={gender}
                            onChange={(e)=>{setGender(e.target.value as string)}}
                            label="Gender"
                            >   
                                <MenuItem value={'MALE'}>男 🦸‍♂️</MenuItem>
                                <MenuItem value={'FEMALE'}>女 🦸‍♀️</MenuItem>
                                <MenuItem value={'OTHER'}>其它 👼</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                    required
                                    variant="inline"
                                    inputVariant="outlined"
                                    format="yyyy/MM/dd"
                                    margin="normal"
                                    id="birthday-datetime-picker"
                                    label="Birthday"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
                
            </Grid>
            <Box mt={3} mb={3}>
                <Copyright />
            </Box>
        </Paper>
    );
}

export default Register;