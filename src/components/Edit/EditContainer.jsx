import { connect } from "react-redux";
import Edit from "./Edit";
import { commitForm } from "../../redux/dataReducer";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import { compose } from "redux";

export default compose(
  withAuthNavigate,
  connect(null, { commitForm })
)(Edit);
