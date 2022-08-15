import React, { useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Edit from "./Edit";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import { updateProfile } from "../../redux/dataReducer";
import { compose } from "redux";
import Preloader from "../Other/Preloader";

const EditContainer = (props) => {
  const profile = useSelector(state => state.data.profile);
  const initiated = useSelector(state => state.data.profileInitiated);
  const errorMessage = useSelector(state => state.data.errorMessage);
  const dispatch = useDispatch();
  const updateProfileDispatcher = useCallback((data) => dispatch(updateProfile(data)), [dispatch]);
  return initiated ? <Edit profile={profile} errorMessage={errorMessage} updateProfileDispatcher={updateProfileDispatcher} /> : <Preloader /> 
}

export default compose(
  withAuthNavigate,
)(EditContainer);
