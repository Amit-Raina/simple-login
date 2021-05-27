import { Fragment } from "react";
import "./LoginPage.css"
import { useState } from 'react'
import axios from "axios";
import { getToken } from "../../redux/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const LoginPage = (props) => {

    const [data, setData] = useState({ "email": "", "password": "" });
    const [redirect, setRedirect] = useState("/")

    function submitData() {

        if(data.email !== "eve.holt@reqres.in" || data.password !== "cityslicka"){
            alert("Invalid Email or Password");
            return;
        }
        try {
            axios.post("https://reqres.in/api/login", data)
            .then((res) => {
                    props.getToken(res.data.token);
                    setRedirect("/home");
                });
        }
        catch (e) {
            console.log("Invalid Id or Password")
        }
    }
    return (
        <Fragment>
            <div className="login-div">
                <h1>Login Page</h1><br />
                <label>Email</label><br />
                <input type="text" placeholder="Enter Email" value={data.email} onChange={(event) => setData({ ...data, email: event.target.value })} /><br />
                <br />
                <label>Password</label><br />
                <input type="password" placeholder="Enter Password" value={data.password} onChange={(event) => setData({ ...data, password: event.target.value })} /><br />
                <br />
                <Redirect to={redirect}></Redirect>
                <button onClick={submitData}>Login</button>
            </div>
        </Fragment>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        getToken: (data) => dispatch(getToken(data))
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);