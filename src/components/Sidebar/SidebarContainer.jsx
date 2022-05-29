import { connect } from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = (state) => {
  return {
    avatar: state.data.avatar,
    profile: state.data.profile,
    auth: state.auth,
  };
};

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
