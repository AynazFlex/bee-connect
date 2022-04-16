import { connect } from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = (state) => ({
  avatar: state.data.avatar,
  profile: state.data.profile,
});

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
