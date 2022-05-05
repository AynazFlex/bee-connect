import { connect } from "react-redux";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import {
  newMessageInput,
  sendMessage,
  closeMessage,
  openMessage,
} from "../../redux/dataReducer";
import Messages from "./Messages";

const mapStateToProps = (state) => ({
  avatar: state.data.avatar,
  shortName: state.data.shortName,
  state: state.data.messagesPage,
});

const DialogsContainer = connect(mapStateToProps, {
  newMessageInput,
  sendMessage,
  closeMessage,
  openMessage,
})(Messages);

export default withAuthNavigate(DialogsContainer);
