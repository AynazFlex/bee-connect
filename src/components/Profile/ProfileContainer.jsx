import { connect } from "react-redux";
import React, { useEffect } from "react";
import Preloader from "../Other/Preloader";
import { setProfile } from "../../redux/profileReducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import Api from "../../api/api";

const ProfileContainer = (props) => {
  const { userId } = useParams();

  useEffect(() => {
    Api.getProfile(userId).then((data) => props.setProfile(data));
  }, []);

  return !props.profile ? <Preloader /> : <Profile {...props.profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps, { setProfile })(ProfileContainer);
