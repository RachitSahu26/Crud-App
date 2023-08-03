import { useState } from 'react'
import './App.css'
import { AiOutlinePlusCircle } from "react-icons/ai"
import { collection,doc, deleteDoc, getDocs } from "firebase/firestore"
import { db } from "./config/firebase";
import { IoMdTrash } from "react-icons/io"

import { RiEdit2Line } from "react-icons/ri"

import { HiOutlineUserCircle } from "react-icons/hi"

// import {collection, getDocs} from "firebase/firestore";
import { FiSearch } from "react-icons/fi"
import Navbar from './Componerts/Navbar'
// import ContactInfo from './Componerts/ContactInfo'
import Model from './Componerts/Model'

function App() {

  const [contact, setContact] = useState([])

  useState(() => {
    const getContacts = async () => {
      try {
        const userDetailRef = collection(db, "rachitdata");
        const contactSnapShot = await getDocs(userDetailRef);
        const contactList = contactSnapShot.docs.map((doc) => {

          return {
            id: doc.id,
            ...doc.data(),
          }
        });
        setContact(contactList);

      } catch (error) {
        console.log(error);
      }
    }
    getContacts();

  }, [])
  const [isopen, setIsopen] = useState(false);
  const onopen = () => {
    setIsopen(true);
  }

  const onclose = () => {
    setIsopen(false);
  }



// .....................delete function..............

const deletedContact= async(id)=>{
try {
  await deleteDoc(doc(db,"rachitdata",id))
} catch (error) {
  console.log(error)
}
}

  return (
    <div className="max-w-[370px] mx-auto">

      <Navbar />
      <div className='flex '>

        <div className="inputbox flex px-4 relative flex-grow">
          <FiSearch className='text-3xl text-center absolute mt-1.5 ml-2 text-white' />
          <input type='text' className='  text-white flex-grow bg-transparent pl-10 border h-[40px] border-white rounded'>
          </input>
        </div>

        <div className="add-area text-white gap-2 cursor-pointer text-5xl rounded">
          <AiOutlinePlusCircle onClick={onopen} />
        </div>

      </div>
      {/* ............contact-information.......... */}
      <div className='flex-col'>
   {

    contact.map((rachitdata) =>(

          <div
            key={rachitdata.id}
            className="contact-area flex justify-between rounded-lg mt-3 bg-red-50"
          >
            <HiOutlineUserCircle className='m-3 text-5xl text-red-400' />
            <div className="user-detail mt-2 text-1xl">
              <h1>{rachitdata.name}</h1>
              <p>{rachitdata.email}</p>
            </div>
            <div className=" flex edit-section text-4xl justify-between m-3.5 gap-2">

              <RiEdit2Line />
              <IoMdTrash onClick={()=>deletedContact(rachitdata.id)} className='text-red-400 cursor-pointer ' />
            </div>
          </div>
          ))
}

 

      </div>


      <Model isopen={isopen}
        onclose={onclose}

      >


      </Model>







      {/* ..........main-div-ended......  */}
    </div>
  )
}

export default App
