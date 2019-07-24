import React, {useState} from 'react';
import Axios from 'axios';
import "../styles/Contact.css"

function Contact(props) {

   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
   });

   function handleInputChange(e) {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value })
   }

   function handleFormSubmit(e) {

      e.preventDefault();
      const {name, email, message} = formData;
      if(!name || !email || !message) return alert('One or more fields are empty');

      Axios
         .post('/api/contact', {name, email, message})
         .then(res => {
            alert(res.data);
            props.history.push('/');
         })
         .catch(err => {
            console.log(err);
            alert('Something went wrong :(');
         });
   }

   function handleFormClear(e) {
      if (e) e.preventDefault();
      setFormData({name: '', email: '', message: ''})
   }

   return (
      <section id='contact_form' className="main-block">
         <h1>Contact</h1>

         <div id='form_inputs'>
            <form onSubmit={handleFormSubmit}>
               <label>Name</label>
               <input
                  type='text'
                  value={formData.name}
                  name='name'
                  onChange={handleInputChange}
               />
               
               <label>Email</label>
               <input
                  type='text'
                  value={formData.email}
                  name='email'
                  onChange={handleInputChange}
               />

               <label>Message</label>
               <textarea
                  value={formData.message}
                  name='message'
                  onChange={handleInputChange}
               />

               <span>
                  <button onClick={handleFormClear}>Clear</button>
                  <button type='submit'>Submit</button>
               </span>
            </form>  
         </div>
         <div>
            
         </div>
      </section>
   )
}

export default Contact;