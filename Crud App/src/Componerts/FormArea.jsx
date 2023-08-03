 import React from 'react'
import { Field, Form, Formik } from "formik";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
function FormArea() {

 const addContact= async(rachitdata)=>{
  try {
    const userDetailRef = collection(db, "rachitdata");
    await addDoc(userDetailRef,rachitdata);
  } catch (error) {
    console.log(error)
    
  }

 }
  return (
    <div>
      <Formik 
      initialValues={{
        name:"",
        email:""
      }}
      onSubmit={(values)=>{
        console.log(values)
        addContact(values);
      }}
      >
        <Form>
          <div className=' flex flex-col gap-1 p-5'>

            <label htmlFor='name' className='text-3xl'>Name</label>
            <Field name="name" className="border h-30" ></Field>
          </div>

          <div className=' flex flex-col gap-1 p-5'>

            <label htmlFor='name' className='text-3xl'>Email</label>
            <Field name="email" className="border  h-30" ></Field>
          </div>

      <button className='bg-red-400 border ml-8 m-3 rounded p-3 text-1.5xl'>Submit Button</button>

         
        </Form>
      </Formik>
    </div>
  )
}

export default FormArea;