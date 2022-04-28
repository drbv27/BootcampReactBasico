import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'


const ContactComponent = ({ contact }) => {
  return (
    <div>
                <h4>nombre:{ contact.name }</h4>
                <h5>apellido:{ contact.lastName }</h5>
                <h5>correo: { contact.email }</h5>
                <h5> conexion: { 
                contact.conected
                ? "🟢 Contacto en Linea"
                :"🔴 Contacto No Disponible" 
                }</h5>

    </div>
  )
};

ContactComponent.propTypes = {
    
    contact:PropTypes.instanceOf(Contact)
}

export default ContactComponent
