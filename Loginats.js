import React from 'react'
import { Avatar, Button, Grid, Paper, Stack, TextField, Typography,Link,InputAdornment } from '@mui/material'
import './Logincss.css';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import Face6Icon from '@mui/icons-material/Face6';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';



function Loginats() {
  const navigate = useNavigate();
    const initialvalues ={
        email:'',
        password:'',
    }
    const validationSchema=Yup.object({
        email:Yup.string().email('invalid email format').required('Required!'),
        password:Yup.mixed('must be 1 speciai charactor,capital letter & number').required('Required!'),
    })
    const onSubmit = (values,onSubmitProps) =>{
        console.log(values);
        // console.log('submit props', onSubmitProps);
              // onSubmitProps.setSubmitting(false);
              // onSubmitProps.resetForm();
              const loggeduser = JSON.parse(localStorage.getItem("user"));
              if(values.email ===loggeduser.email && loggeduser.password){
                localStorage.setItem("loggedin: ",true);
                navigate("/home");
              }else{
                alert("wrong Email (or) Password")
              }
             
    }
    const fun=()=>{
      navigate('/Register')
    }
  return (
    <div>
      <section>
        <div className='conailer-log'>
            <div className='log1'>
                <img src='image/ats1.jpg' width={800}/>
            </div>
            <div className='log2'>
            <Grid >
        <Paper elevation={2} className='paper-log'>
            <div className='full'>
           <Grid alignContent={'center'}>
              <Avatar alt='ben' src='image/atslogo.jpg' style={{ width:60,height:50,marginLeft:210,padding:10}} />
           <h2 style={{fontSize:30,textAlign:'center'}} >ATS</h2>
           <h3 style={{fontSize:30,textAlign:'center'}}> LOGIN</h3>
           </Grid>
           <Formik initialValues={initialvalues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnMount>
            {formik =>{
                console.log("form values",formik);
                return(
                    <Form>
           <Field as={TextField} type='email' name='email' label='email' placeholder='enter your email' style={{padding:'10px',margin:'10px 90px'}} autoFocus
           InputProps={{
            endAdornment:<InputAdornment position='end'><Face6Icon /></InputAdornment>
        }} /><br />
           <ErrorMessage name='email'>
            {error =><div style={{color:'red',paddingLeft:'50px'}}>{error}</div>}
           </ErrorMessage>
            <Field as={TextField} type='password' name='password' label='password' placeholder='enter your password' style={{padding:'10px',margin:'10px 90px'}} 
            InputProps={{
              endAdornment:<InputAdornment position='end'><VisibilityOutlinedIcon /></InputAdornment>
          }} /><br />
          
            <ErrorMessage name='password'>
            {error =><div style={{color:'red',paddingLeft:'50px'}}>{error}</div>}
           </ErrorMessage>
            <Link className='link'>Reset Password</Link>
            
            <Button variant='contained' type='submit' style={{margin:'30px 40px',padding:'10px',width:'400px'}} > LOGIN</Button>
            <Typography>
              you Don't have a account 
              <NavLink to={"/register"} >SIGNUP</NavLink> 
              <Button variant='contained' color='success' style={{marginLeft:'10px'}} onClick={fun}>SIGNUP</Button>
            </Typography>
            </Form>
                )
            }}
           </Formik>
           </div>
           </Paper>
           </Grid>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Loginats
