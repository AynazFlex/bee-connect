import { connect } from "react-redux";
import React, { useEffect } from "react";
import * as axios from "axios";
import Preloader from "../Other/Preloader";
import { setProfile } from "../../redux/profileReducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";

const ProfileContainer = (props) => {

  const { userId } = useParams();

  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => props.setProfile(response.data));
  }, []);

  return !props.profile ? <Preloader /> : <Profile {...props.profile} />
};

const mapStateToProps = (state) => ({
    profile: state.profile.profile,
});

export default connect(mapStateToProps, {setProfile})(ProfileContainer);
