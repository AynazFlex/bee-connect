import { connect } from "react-redux";
import Edit from "./Edit";
import { commitForm, changeForm } from "../../redux/dataReducer";

const mapStateToProps = (state) => ({
    state: state.data.edit,
});

const EditContainer = connect(mapStateToProps, {changeForm, commitForm})(Edit);


export default EditContainer;