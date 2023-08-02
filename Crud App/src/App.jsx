import { useState } from 'react'
import './App.css'
import { AiOutlinePlusCircle } from "react-icons/ai"
import {collection, getDocs} from "firebase/firestore";
import { FiSearch } from "react-icons/fi"
import {db} from "./config/firebase";
 import Navbar from './Componerts/Navbar'

function App() {

  const [contact, setContact] = useState([])

  useState(() => {
    const getContacts = async () => {
      try {
const contactsRef=collection( db,"contact");
const contactSnapShot=await getDocs(contactsRef);
const contactList=  contactSnapShot.docs.map((doc)=>doc.data());
console.log(contactList);   
} catch (error) {
        console.log(error);
      }
    }
    getContacts();

  }, [])




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
          <AiOutlinePlusCircle />
        </div>
      </div>

    </div>
  )
}

export default App
