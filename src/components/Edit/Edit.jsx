import React from "react";
import s from "./Edit.module.css";
import Button from "../Other/Button";
import Hr from "../Other/Hr";


const Edit = (props) => {

    const changeForm = (e) => {
        const action = {
            type: 'CHANGE_FORM_EDIT',
            name: e.target.name,
            value: e.target.value
        }
        
        props.dispatch(action)
    }

    const submitForm = (e) =>  {
        e.preventDefault();
        props.dispatch({ type: 'COMMIT_FORM_EDIT' });
    }

    return (
        <div className={s.formBlock}>
            <form>
                <label className={s.item}> Имя Фамилия:
                    <input 
                        className={s.input}
                        type="text"
                        name='fullname'
                        value={props.state.FullName}
                        onChange={changeForm}
                        placeholder="Имя Фамилия"
                    />
                </label>
                <label className={s.item}> Адрес:
                    <input 
                        className={s.input}
                        type="text"
                        name='address'
                        value={props.state.address}
                        onChange={changeForm}
                        placeholder="Адрес"
                    />
                </label>
                <label className={s.item}> День рождения:
                    <input 
                        className={s.input}
                        type="text"
                        name='birthday'
                        value={props.state.birthday}
                        onChange={changeForm}
                        placeholder="День рождения"
                    />
                </label>
                <label className={s.item}> Работа:
                    <input 
                        className={s.input}
                        type="text"
                        name='job'
                        value={props.state.job}
                        onChange={changeForm}
                        placeholder="Работа"
                    />
                </label>
                <Hr />
                <Button classname={s.modify} callback={submitForm} text="Сохранить" />
            </form>
        </div>
    )
}

export default Edit;