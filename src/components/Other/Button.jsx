import s from './Button.module.css';

const Button = props => <button onClick={props.callback} className={s.button}>{props.text}</button>

export default Button;