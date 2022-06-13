import React from "react";
import s from "./Edit.module.css";
import Button from "../Other/Button";
import Hr from "../Other/Hr";
import { useForm } from "react-hook-form";

const createInput = (
  Type,
  name,
  label,
  required,
  defaultValue,
  placeholder,
  register,
  className
) => {
  return (
    <label className={s.item}>
      {" "}
      {label + ":"}
      <Type
        {...register(name, {
          required: required,
        })}
        defaultValue={defaultValue}
        className={className}
        placeholder={placeholder}
      />
    </label>
  );
};

const Edit = ({ profile, updateProfile, errorMessage }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const submit = (data) => {
    console.log(data.lookingForAJob);
    updateProfile(data);
    reset();
  };

  //console.log('edit render');

  return (
    <div className={s.formBlock}>
      <form onSubmit={handleSubmit(submit)}>
        {createInput(
          "input",
          "fullName",
          "Full name",
          true,
          profile.fullName,
          "full name",
          register,
          s.input
        )}
        {errors?.fullName && (
          <div className={s.validation}>enter full name</div>
        )}
        {createInput(
          "textarea",
          "aboutMe",
          "Обо мне",
          true,
          profile.aboutMe,
          "Обо мне",
          register,
          s.inputText
        )}
        {errors?.aboutMe && <div className={s.validation}>enter about me</div>}
        {createInput(
          "textarea",
          "lookingForAJobDescription",
          "Мои навыки",
          true,
          profile.lookingForAJobDescription,
          "Описание моих навыков",
          register,
          s.inputText
        )}
        {errors?.lookingForAJobDescription && (
          <div className={s.validation}>
            enter looking for a job description
          </div>
        )}
        {createInput(
          "input",
          "contacts.website",
          "website",
          false,
          profile.contacts.website,
          "https://blabla.xxx/",
          register,
          s.input
        )}
        {createInput(
          "input",
          "contacts.facebook",
          "facebook",
          false,
          profile.contacts.facebook,
          "https://facebook.com/",
          register,
          s.input
        )}
        {createInput(
          "input",
          "contacts.github",
          "github",
          false,
          profile.contacts.github,
          "https://github.com/",
          register,
          s.input
        )}
        {createInput(
          "input",
          "contacts.instagram",
          "instagram",
          false,
          profile.contacts.instagram,
          "https://instagram.com/",
          register,
          s.input
        )}
        {createInput(
          "input",
          "contacts.twitter",
          "twitter",
          false,
          profile.contacts.twitter,
          "https://twitter.com/",
          register,
          s.input
        )}
        {createInput(
          "input",
          "contacts.vk",
          "vk",
          false,
          profile.contacts.vk,
          "https://vk.com/",
          register,
          s.input
        )}
        {createInput(
          "input",
          "contacts.youtube",
          "youtube",
          false,
          profile.contacts.youtube,
          "https://youtube.com/",
          register,
          s.input
        )}
        <label className={s.itemForChecbox}>
          {" "}
          Ищу работу:
          <input
            {...register("lookingForAJob")}
            className={s.inputCheckbox}
            type="checkbox"
          />
        </label>
        <Hr />
        <Button classname={s.modify} text="Сохранить" />
        {errorMessage && <div className={s.validation}>{errorMessage}</div>}
      </form>
    </div>
  );
};

export default Edit;
