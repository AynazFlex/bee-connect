import s from './Prompt.module.css'

function Promt(props) {
    let x = props.info.getBoundingClientRect().left;
    let y = props.info.getBoundingClientRect().bottom + 5;
    return (
        <div style={{left: x, top: y}} className={s.info}>{props.info.dataset.name}</div>
    )
}

export default Promt;