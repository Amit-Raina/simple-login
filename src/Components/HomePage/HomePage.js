import { Fragment } from "react";
import { connect } from "react-redux";
import { getToken } from "../../redux/actions";
import "./HomePage.css"

const HomePage = (props) => {
    return (
        <Fragment>
            <div className="home-div">
                <h1>Home Page</h1>
                <h2>Successful Login</h2>
                <h3>Token :  {props.token}</h3>
                <br/>
                <button onClick={() => props.getToken(null)}>Logout</button>
            </div>
        </Fragment>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        getToken : (data) => dispatch(getToken(data))
    }
}
const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);