import { createMuiTheme, makeStyles } from "@material-ui/core";

export const darkTheme=createMuiTheme({
    palette:{
        type:'dark',
        primary:{
            light:'#4dabf5',
            main:'#2196f3',
            dark:'#1769aa'
        }
    }
})

export const useDarkStyles=makeStyles((theme)=>({
    root: {
        height: '100vh',
      },
      background:{
        backgroundImage: 'url(https://innermost-img-resources-1300228246.cos.ap-nanjing.myqcloud.com/innermost.identity/star-bg.svg)',//https://source.unsplash.com/random
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.grey[900],
        backgroundSize: 'cover',
        //backgroundPosition:'center'
      },
      paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius:20
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(4),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      link:{
        textAlign:"right",

      },
      loginPaperTitle:{
        marginBottom:theme.spacing(6)
      },
      registerHeaderText:{
        margin:theme.spacing(5)
      },
      genderSelector:{
        margin:theme.spacing(2,0),
      }
}))