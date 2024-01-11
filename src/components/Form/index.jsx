import React from 'react'
import "./Form.css"
import { FormControl, FormGroup, InputLabel, Input, Button, ThemeProvider, createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles'; 

const useStyle = makeStyles (() => ({
    formStyle: {
        width: "80%",
        margin: "auto",
        paddingTop: "20px",
        padding: "20px",
        border:"1px solid white",
        borderRadius:"2%",
        boxShadow: "0px 0px 10px",
        backgroundColor:'white',
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
    },
    myBtn:{
        marginTop:"15px",
        width:"10%",
        alignSelf:"center"
    },
    Inputs:{
        margin: "20px",
    }
}))


const theme = createTheme({
        palette: {
        primary: {
                main: '#4caf50', 
            },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
    });

export const Form = () => {

 const classes = useStyle();

  return (

      <ThemeProvider theme={theme}>
        <div className='formContainer'>
        <FormGroup className={classes.formStyle}>
        <h1>Enviame un Mensaje</h1>
          <FormControl  className={classes.Inputs}>
            <InputLabel>Nombre</InputLabel>
            <Input/>
          </FormControl>
          <FormControl className={classes.Inputs}>
            <InputLabel>Apellido</InputLabel>
            <Input />
          </FormControl>
          <FormControl className={classes.Inputs}>
            <Input aria-label="minimum height" minRows={3} maxRows={10} placeholder="Escribe tu consulta"  />
          </FormControl>
          <Button variant="contained" color="primary" className={classes.myBtn}>
            Enviar
          </Button>
        </FormGroup>
      </div>
    </ThemeProvider>

  )
}
