import React, { useEffect } from "react";
import { connect } from "react-redux";
import Main from "./Main";
import { addPost, changeText } from "../../redux/dataReducer";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import { compose } from "redux";
import { getStatus, putStatus } from "../../redux/profileReducer";

const MainContainer = (props) => {
  useEffect(() => {
    props.getStatus(props.id);
  }, []);

  return (
    <Main
      status={props.status}
      state={props.state}
      putStatus={props.putStatus}
    />
  );
};

const mapStateToProps = (state) => ({
  state: state.data.main,
  status: state.profile.status,
  id: state.auth.id,
});

export default compose(
  withAuthNavigate,
  connect(mapStateToProps, { addPost, changeText, getStatus, putStatus })
)(MainContainer);
