import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { loginRequest } from '../../actions/posts.js'
import { useHistory , Link } from "react-router-dom";
import { Container, Grow, Grid } from '@material-ui/core';
import { useLocation } from "react-router-dom";
import "./style.css"
const Login = (props) => {
    const [emailData, setemailData] = useState("");
    const [passwordData, setpasswordData] = useState("");
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
     
        const loginData = { email: emailData, password: passwordData, active: true }

        if(emailData.length < 11 || emailData.slice(emailData.length - 10) !== "@gmail.com" )
        {
            history.push({
                pathname: '/',
                state: { error_email : 'INVALID EMAIL' }
            });
        }
        else{
        dispatch(loginRequest(loginData));
        history.push(`/profile/${emailData}`)
        }
    };



    return (
        <>
        <Container maxWidth="lg">
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={4}>
              
        <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>
    

            <div className="form-group">
                <label>Email address</label>
                 {location.error_email ? <h6>INVALID_EMAIL</h6> :null}
                <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setemailData(e.target.value)}/>
              

            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setpasswordData(e.target.value)} />
            </div>

       

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <br/>
           
         
        </form>  
        <h5>Haven't Sign Up  , Sign Up now</h5>
             <Link to = "/signup">
            <button
                type='button'
            >Sign Up</button>
            </Link>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    </>
        )


}
export default Login;