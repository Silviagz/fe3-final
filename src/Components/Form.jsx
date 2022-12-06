import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [values, setValues] = useState({
    name: "",
    email: "",
  })

  const [validation, setValidation] = useState(false)


  const validateName = () => {

    let nameUser = values.name.split(" ")

    if (nameUser.length < 2) return alert("por favor ingrese Nombre y apellido")
    if (nameUser[0].length < 3 || nameUser[1].length < 3) return alert("por favor ingrese un nombre/apellido valido")

    return true

  }

  const validateEmail = () => {

    let emailUser = values.email.split("@")
    if (emailUser.length < 2) return alert("Email incorrecto, debe contener una '@' y una extension valida como '.com'")

    let dotCom = emailUser[1].split(".")
    if (dotCom.length < 2) return alert("Email incorrecto, debe contener una '@' y una extension valida como '.com'")

    return true

  }

  const handleChange = (e) => {

    const { target } = e
    const { name, value } = target

    const newValues = {
      ...values,
      [name]:value,
    }

    setValues(newValues)

  }

  const handleSubmit = (e) => {

    e.preventDefault()

    let nameValidation = validateName()

    let emailValidation = validateEmail()

    if (nameValidation && emailValidation) {
      setValidation(true)
    }

  }

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="input-form" onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" className="input-form" onChange={handleChange} />
        <button type="submit" className="btn-form">SUBMIT</button>
      </form>
      {validation ? <h3 className="h3">Gracias por comunicarse con nosotros {values.name}, un asistente se contactará lo antes posible!</h3> : ""}
    </div>
  );
};

export default Form;
