import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { AppActions } from './actions';

class App extends Component {
  componentWillMount() {
    setTimeout(this.props.testAction, 5000);
  }

  render() {
    const { test } = this.props;
    return (
      <h1>{ test }</h1>
    )
  }  
}

const mapStateToProps = (state) => {
  return {
    test: state.app.test
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { testAction: AppActions.testAction },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
