import { useState } from "react"
import classes from "./CheckoutForm.module.css"

const CheckoutForm = ({ onConfirm }) => {

  const [name, setName] = useState('')

  const [phone, setPhone] = useState('')

  const [email, setEmail] = useState('')

  const handleConfirm = (event) => {
    event.preventDefault()

    const userData = {
      name, phone, email
    }

    onConfirm(userData)
  }

  return(
    <div className={classes.contenedorFormulario}>
      <form className={classes.formulario} onSubmit={handleConfirm}>
        <input
          className={classes.contenedorText}
          type="text"
          value={name}
          onChange={({target}) => setName(target.value)}
        />
        <label className={classes.contenedorLabel}> nombre </label>
        <input
          className={classes.contenedorText}
          type="text"
          value={phone}
          onChange={({target}) => setPhone(target.value)}
        />
        <label className={classes.contenedorLabel}> teléfono </label>
        <input
          className={classes.contenedorText}
          type="text"
          value={email}
          onChange={({target}) => setEmail(target.value)}
        />
        <label className={classes.contenedorLabel}> email </label>
        <div>
          <button className={classes.botonCrear} type="submit"> Finalizar Compra </button>
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm