import React, { useEffect } from "react";
import { connect } from "react-redux";
import Main from "./Main";
import { addPost, deletePost } from "../../redux/dataReducer";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import { compose } from "redux";
import { getStatus, putStatus, setError } from "../../redux/profileReducer";
import Preloader from "../Other/Preloader";

const MainContainer = (props) => {
  useEffect(() => {
    props.getStatus(props.id);
  }, []);

  console.log('main render');

  return props.statusIsFetching ? (
    <Preloader />
  ) : (
    <Main
      status={props.status}
      state={props.state}
      putStatus={props.putStatus}
      addPost={props.addPost}
      deletePost={props.deletePost}
      errorMessage={props.errorMessage}
      setError={props.setError}
    />
  );
};

const mapStateToProps = (state) => {
  //console.log("main mstp");
  return {
    state: state.data.main,
    status: state.profile.status,
    id: state.auth.id,
    statusIsFetching: state.profile.statusIsFetching,
    errorMessage: state.profile.errorMessage,
  };
};

export default compose(
  withAuthNavigate,
  connect(mapStateToProps, { addPost, deletePost, getStatus, putStatus, setError })
)(MainContainer);
