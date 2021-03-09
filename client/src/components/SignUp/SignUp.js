import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Grow, Grid } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import {SignIn} from '../../actions/posts.js'
import "./style.css"
const SignUp = (props) => {
    const [emailData, setemailData] = useState("");
    const [passwordData, setpasswordData] = useState("");
    const [ NameData, setnameData] = useState("");
    const [numberData, setnumberData] = useState(0);
    const history = useHistory();

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
    dispatch(SignIn({email : emailData , password : passwordData , Name : NameData , Phone_Number : numberData  }));
    history.push('/')
    };



    return (
        <Container maxWidth="lg">
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={4}>
            
        <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter Name" onChange={(e) => setnameData(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setemailData(e.target.value)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setpasswordData(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Number</label>
                <input type="phone" className="form-control" placeholder="Enter Phone" onChange={(e) => setnumberData(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
        </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
        )


}

export default SignUp; 