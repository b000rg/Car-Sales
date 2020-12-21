import React from 'react';
import { connect } from 'react-redux';
import {removeFeature} from '../actions/actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => {props.removeFeature(props.feature)}}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state, props) => {
  return props;
};

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
