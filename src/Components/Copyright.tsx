import { Link, Typography } from "@material-ui/core";
import React from "react";

function Copyright(){
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://innermost.site">
                Innermost
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export default Copyright;