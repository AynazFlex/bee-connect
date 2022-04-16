import { connect } from "react-redux";
import Edit from "./Edit";
import { commitFormActionCreate, changeFormActionCreate } from "../../redux/dataReducer";

const mapStateToProps = (state) => ({
    state: state.data.edit,
});

const mapDispatchToProps = (dispatch) => ({
    changeForm: (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(changeFormActionCreate(name, value));
    },

    submitForm: (e) => {
        e.preventDefault();
        dispatch(commitFormActionCreate());
    }
});

const EditContainer = connect(mapStateToProps, mapDispatchToProps)(Edit);


export default EditContainer;