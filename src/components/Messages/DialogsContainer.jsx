import { connect } from "react-redux";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import {
  sendMessage,
  closeMessage,
  openMessage,
} from "../../redux/dataReducer";
import Messages from "./Messages";
import { compose } from "redux";

const mapStateToProps = (state) => {
  //console.log("dialog mstp");
  return {
    avatar: state.data.avatar,
    shortName: state.data.shortName,
    state: state.data.messagesPage,
  };
};

export default compose(
  withAuthNavigate,
  connect(mapStateToProps, {
    sendMessage,
    closeMessage,
    openMessage,
  })
)(Messages)
