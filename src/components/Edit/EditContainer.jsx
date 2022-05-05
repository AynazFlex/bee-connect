import { connect } from "react-redux";
import Edit from "./Edit";
import { commitForm, changeForm } from "../../redux/dataReducer";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import { compose } from "redux";

const mapStateToProps = (state) => ({
  state: state.data.edit,
});

export default compose(
  withAuthNavigate,
  connect(mapStateToProps, { changeForm, commitForm })
)(Edit);
