import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  container: props => ({
    height: '100vH',
    overflow: 'hidden',
    background: `url('/images/login-background.jpg')`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',


  }),
  paper: {

    backgroundColor: 'red !important'
  }
}));

export default useStyles;