import React, {useState} from 'react';

function CreateEvent() {
   const [userImg, setUserImg] = useState({
      fileName: '',
      fileUrl: 'https://via.placeholder.com/100x100.png?text=EVENT+PHOTO'
   });
   const [formData, setFormData] = useState({
      title: '',
      date: '',
      location: '',
      category: '',
      description: ''
   });

   function userImgHandler(file) {
      setUserImg({
         fileName: file,
         fileUrl: URL.createObjectURL(file)
      });
   }
   function formDataHandler(e) {
      const {name, value} = e.target;
      setFormData(state => ({...state, [name]: value}));
   }
   function formSubmitHandler() {

      

   }
   function formClearHandler() {
      setUserImg({
         fileName: '',
         fileUrl: 'https://via.placeholder.com/100x100.png?text=EVENT+PHOTO'
      });
      setFormData({
         title: '',
         date: '',
         location: '',
         category: '',
         description: ''
      });
   }

   // view hooks state during development
   console.log(userImg)
   console.log(formData)

   return (
      <section>
         <h1>Create Event</h1>
         <div>
            <div>
               <img src={userImg.fileUrl} alt='Event' />

               {/* IMAGE */}
               <span>
                  <input
                     type='file'
                     id='selectedFile'
                     style={{display: 'none'}}
                     onChange={e => userImgHandler(e.target.files[0])}
                  />
                  <button onClick={() => document.getElementById('selectedFile').click()}>Choose</button>
               </span>

               {/* TITLE */}
               <input
                  placeholder='title'
                  type='text'
                  value={formData.title}
                  name='title'
                  onChange={formDataHandler}
               />

               {/* DATE */}
               <input  
                  type='date'
                  value={formData.date}
                  name='date'
                  onChange={formDataHandler}
               />

               {/* LOCATION */}
               <input
                  placeholder='location'
                  type='text'
                  value={formData.location}
                  name='location'
                  onChange={formDataHandler}
               />

               {/* CATEGORY */}
               <select
                  value={formData.category}
                  name='category'
                  onChange={formDataHandler}
               >
                  <option value='' disabled selected>category</option>
                  <option value='food'>Food</option>
                  <option value='music'>Music</option>
                  <option value=''>More categories to populate from db</option>
               </select>
                  
               {/* DESCRIPTION */}
               <textarea
                  placeholder='event description'
                  value={formData.description}
                  name='description'
                  onChange={formDataHandler}
               />

               {/* FORM BUTTONS */}
               <div>
                  <button>Submit</button>
                  <button onClick={formClearHandler}>Cancel</button>
               </div>
            </div>

         </div>
      </section>
   )
}

export default CreateEvent;