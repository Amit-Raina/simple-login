import { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';

function App(props) {
  return (
    <Fragment>
      <Switch>
        {props.token !== null && <Route path="/home" component={HomePage}/>}
        <Route path="/" component={LoginPage}/>
      </Switch>
    </Fragment>
  );
}

const mapStateToProps =(state) => {
  return {
    token : state.token
  }
}
export default connect(mapStateToProps,null)(App);
