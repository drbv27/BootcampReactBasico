import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact'

const ContactListComponent = () => {

    const defaultContact = new Contact('Jon','Doe','jondoe@gmail.com',true)

   /*  const changeState = (id) => {
        console.log('TODO: cambiar el estado de una tarea')
    } */

  return (
    <div>
        <div>
            <h1>Contactos: </h1>
            <table>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Estado</th>
            </table>
        </div>
        {/* Pendiente mapear */}
        <ContactComponent contact={defaultContact} />
    </div>
  )
}


export default ContactListComponent