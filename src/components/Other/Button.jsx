import s from './Button.module.css';

const Button = props => <button className={s.button}>{props.text}</button>

export default Button;