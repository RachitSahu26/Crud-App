import React from 'react'

import { Form, Formik, Field, connect } from "formik"
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
// import { collection } from 'firebase/firestore'

import { MdOutlineClose } from "react-icons/md"
import { toast } from 'react-toastify';
function Model({ onClose, isOpen, isUpdate,contact }) {

  const addContact = async (rachitdata) => {
    try {
      const userDetailRef = collection(db, "rachitdata");
      await addDoc(userDetailRef, rachitdata);
      toast.success("Contact added Successfully");
  
      onClose()
    } catch (error) {
      console.log(error)

    }

  }



  return (
    <>
      {


        isOpen &&
        (
          <>
            <div className=' relative z-50 min-h-[200px] rounded bg-white m-auto'>

              <div className="close-icon flex justify-end m-2 p-3 text-3xl ">
                <MdOutlineClose onClick={onClose} />
              </div>




              <Formik

                initialValues={
                    {
                      name: "",
                      email: ""
                    }

                }
                onSubmit={(values) => {
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

                  <button className='bg-red-400 border ml-8 m-3 rounded p-3
       text-1.5xl'> Contact</button>


                </Form>




              </Formik>

            </div>

            <div className=' z-80 absolute top-0 w-screen h-screen backdrop-blur' />

          </>

        )



      }

    </>



  )

}

export default Model
