import { connect } from 'react-redux';
import Navbar from './Navbar';


const mapStateToProps = (state) => {
  return {
    avatar: state.data.avatar,
  };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
