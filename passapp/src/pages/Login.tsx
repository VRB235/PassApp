import {
  TextField,
  Button,
  Typography,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import React from "react";
import classes from "./Login.module.css";

const Login: React.FC = (props) => {
  const [open, setOpen] = React.useState(false);

  const submitHandler = (event: React.FormEvent) => {
    handleToggle();
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.login}>
      <Typography variant="h1" component="div" className={classes.title}>
        PassApp
      </Typography>
      <TextField
        id="outlined-basic"
        label="Usuario"
        variant="outlined"
        required
        type="text"
        className={classes.user}
        fullWidth
      />
      <TextField
        id="outlined-basic"
        label="Contraseña"
        variant="outlined"
        required
        type="password"
        className={classes.password}
        fullWidth
      />
      <Button
        variant="contained"
        onClick={submitHandler}
        className={classes.enter}
      >
        Entrar
      </Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Login;
