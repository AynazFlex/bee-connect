import { connect } from "react-redux";
import Main from "./Main";
import { addPost, changeText } from "../../redux/dataReducer";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import { compose } from "redux";

const mapStateToProps = (state) => ({
  state: state.data.main,
});

export default compose(
  withAuthNavigate,
  connect(mapStateToProps, { addPost, changeText })
)(Main);
