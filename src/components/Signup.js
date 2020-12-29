import React from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Signup =()=>{
  return (
    <div>
    <div style={{ textAlign: "center" }}>
    <h1> signup</h1>
      
  <TextField id="standard-basic"  style={{marginTop:"30px",color:"red"}} label="name" /><br></br>
  <TextField id="standard-basic"  style={{marginTop:"30px",textAlign:"center"}}  label="email" /><br></br>
  <TextField id="standard-basic"  style={{marginTop:"30px",textAlign:"center"}} label="password" /><br></br>
  <TextField id="standard-basic"  style={{marginTop:"30px",textAlign:"center"}} label="password" /> <br></br>
   <Button variant="contained" style={{marginTop:"20px",textAlign:"center"}} color="secondary">
     SignUp
      </Button>
  </div>
    </div>
  )}
export default Signup