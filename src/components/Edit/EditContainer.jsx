import { connect } from "react-redux";
import Edit from "./Edit";
import { updateProfile } from "../../redux/dataReducer";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import { compose } from "redux";
import Preloader from "../Other/Preloader";

const EditContainer = (props) => {
  return props.initiated ? <Edit {...props} /> : <Preloader /> 
}

const mapStateToProps = (state) => ({
  profile: state.data.profile,
  initiated: state.data.profileInitiated,
  errorMessage: state.data.errorMessage,
})

export default compose(
  withAuthNavigate,
  connect(mapStateToProps, { updateProfile })
)(EditContainer);
