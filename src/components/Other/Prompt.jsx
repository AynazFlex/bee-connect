import s from "./Prompt.module.css";

const Promt = (props) => {
  const x = props.info.getBoundingClientRect().left;
  const y = props.info.getBoundingClientRect().bottom + 5;
  return (
    <div style={{ left: x, top: y }} className={s.info}>
      {props.info.dataset.name}
    </div>
  );
};

export default Promt;
