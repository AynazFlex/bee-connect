import React, {  useState, useEffect } from "react";
import MyProfile from "./MyProfile";
import Modal from "./Modal";

const Sidebar = (props) => {
  //console.log('sidebar render');

  const [ModalIsOpen, setModal] = useState(false);

  useEffect(() => { 
    setModal(false)
  }, [props.avatar]);

  return (
    <>
      <MyProfile {...props} setModal={setModal} />
      {ModalIsOpen && <Modal setModal={setModal} updatePhoto={props.updatePhoto} />}
    </>
  );
};

export default Sidebar;
