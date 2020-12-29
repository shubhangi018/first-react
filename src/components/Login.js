import React from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const Login=()=>{
    return(
        <div>
              <div style={{ textAlign: "center" }}>
        <h1>login</h1>
        <TextField id="outlined-basic" style={{ marginTop: "20px" }} label="username" variant="outlined" /><br>
        </br>
        <TextField id="outlined-basic" style={{ marginTop: "20px" }} label="password" variant="outlined" /><br></br>
        <Button variant="outlined" label="submit"  style={{marginTop:"20px",backgroundColor:"greenyellow"}} href="#outlined-buttons">
         submit
          </Button>
      </div>
        
        
        </div>

    )
}
export default Login