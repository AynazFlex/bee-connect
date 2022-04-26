import { connect } from "react-redux";
import Main from "./Main";
import {
  addPost,
  changeText,
} from "../../redux/dataReducer";

const mapStateToProps = (state) => ({
  state: state.data.main,
});

const MainContainer = connect(mapStateToProps, {addPost, changeText})(Main);

export default MainContainer;
