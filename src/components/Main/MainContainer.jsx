import { connect } from "react-redux";
import Main from "./Main";
import {
  addPostActionCreate,
  changeEntryActionCreate,
} from "../../redux/dataReducer";

const mapStateToProps = (state) => ({
  state: state.data.main,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: () => {
    dispatch(addPostActionCreate());
  },
  changeText: (event) => {
    const text = event.target.value;
    dispatch(changeEntryActionCreate(text));
  },
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
