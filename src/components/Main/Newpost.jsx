import s from './Newpost.module.css'
import Button from '../Other/Button';


function Newpost() {
    return (
        <div className={s.post}>
            <div contenteditable="true" className={s.input}>Что у вас нового?</div>
            <Button text='Опубликовать' />
        </div>
    )
}

export default Newpost;