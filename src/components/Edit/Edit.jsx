import React from "react";
import s from "./Edit.module.css";
import Button from "../Other/Button";
import Hr from "../Other/Hr";


const Edit = (props) => {

    return (
        <div className={s.formBlock}>
            <form>
                <label className={s.item}> Имя Фамилия:
                    <input 
                        className={s.input}
                        type="text"
                        name='fullname'
                        value={props.state.FullName}
                        onChange={props.changeForm}
                        placeholder="Имя Фамилия"
                    />
                </label>
                <label className={s.item}> Адрес:
                    <input 
                        className={s.input}
                        type="text"
                        name='address'
                        value={props.state.address}
                        onChange={props.changeForm}
                        placeholder="Адрес"
                    />
                </label>
                <label className={s.item}> День рождения:
                    <input 
                        className={s.input}
                        type="text"
                        name='birthday'
                        value={props.state.birthday}
                        onChange={props.changeForm}
                        placeholder="День рождения"
                    />
                </label>
                <label className={s.item}> Работа:
                    <input 
                        className={s.input}
                        type="text"
                        name='job'
                        value={props.state.job}
                        onChange={props.changeForm}
                        placeholder="Работа"
                    />
                </label>
                <Hr />
                <Button classname={s.modify} callback={props.submitForm} text="Сохранить" />
            </form>
        </div>
    )
}

export default Edit;