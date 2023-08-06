import React from 'react'

import { Form, Formik, Field, connect, ErrorMessage } from "formik"
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
// import { collection } from 'firebase/firestore'
import * as Yup from "Yup"

import { MdOutlineClose } from "react-icons/md"
import { toast } from 'react-toastify';

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),

})
function Model({ onClose, isOpen, isUpdate, contact }) {


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
          <div>
            <div className=' z-80 absolute  top-0 h-100 w-80 ml-5 mt-40 backdrop-blur '>




              <div className=' relative z-50 min-h-[100px] grid
             rounded bg-white'>



                {/* ........form close button..... */}
                <div className="close-icon flex w-15  ml-64 rounded  mt-5 m-2 p-3 text-3xl bg-red-500 ">
                  <MdOutlineClose className='cursor-pointer' onClick={onClose} />

                </div>




                <Formik
                  validationSchema={contactSchemaValidation}
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
                      <div className='text-red-400'>
                        <ErrorMessage name='name' />
                      </div>

                    </div>

                    <div className=' flex flex-col gap-1 p-5'>

                      <label htmlFor='name' className='text-3xl'>Email</label>
                      <Field name="email" className="border  h-30" ></Field>
                      <div className='text-red-400'>
                        <ErrorMessage name='email' />
                      </div>
                    </div>

                    <button className='bg-red-400 border ml-8 m-3 rounded p-3
                    text-1.5xl'> Contact</button>


                  </Form>




                </Formik>

              </div>
            </div>



          </div >

        )



      }

    </>



  )

}

export default Model
