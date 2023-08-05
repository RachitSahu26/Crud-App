import { useEffect, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlinePlusCircle } from "react-icons/ai"
import { collection, doc, deleteDoc, getDocs, onSnapshot } from "firebase/firestore"
import { db } from "./config/firebase";

<Model />


import { FiSearch } from "react-icons/fi"
import Navbar from './Componerts/Navbar'
import ContactCard from './Componerts/ContactCard';
import Model from './Componerts/Model';
import AddAndUpdate from './Componerts/AddAndUpdate';











function App() {


  // fetch data from data base and store in contact through useState
  const [contact, setContact] = useState([])


  useEffect(() => {
    const getContacts = async () => {
      try {
        const userDetailRef = collection(db, "rachitdata");

        onSnapshot(userDetailRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {

            return {
              id: doc.id,
              ...doc.data(),
            }
          });

          setContact(contactList);
          return contactList
        })

      } catch (error) {
        console.log(error);
      }
    }
    getContacts();

  }, [])








  // onclick for useState
  const [isOpen, setIsOpen] = useState(false);

  // .......function for on click....
  const onOpen = () => {
    setIsOpen(true);
  }
  const onClose = () => {
    setIsOpen(false);
  }

  // ...........fitered contact.concat.........
  const filteredContact = (e) => {
  const  value = e.target.value;




    const userDetailRef = collection(db, "rachitdata");

    onSnapshot(userDetailRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {

        return {
          id: doc.id,
          ...doc.data(),
        }
      });
      const filteredContacts = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContact(filteredContacts);
      return filteredContacts;

    })

    }

    

  



  // .....................delete function..............

  // const deletedContact = async (id) => {
  //   try {
  //     await deleteDoc(doc(db, "rachitdata", id))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }



  return (
    <div className="max-w-[370px] mx-auto">

      <Navbar />
      <div className='flex '>
        <div className="inputbox flex px-4 relative flex-grow">
          <FiSearch className='text-3xl text-center absolute mt-1.5 ml-2 text-white' />
          <input onChange={filteredContact} type='text' className='  text-white flex-grow bg-transparent pl-10 border h-[40px] border-white rounded'>
          </input>
        </div>

        <div className="add-area text-white gap-2 cursor-pointer text-5xl rounded">
          {/* plus icon to add new contact */}
          <AiOutlinePlusCircle onClick={onOpen} />
        </div>

      </div>













      {/* ............contact-information.......... */}

      <div className='mt-3'>
        {
          // fetched data from database used here 
          contact.map((contact) => (

            <ContactCard key={contact.id} onOpen={onOpen} contact={contact} />

          ))}

      </div>
















      {/* ..............model component ........... */}

      <AddAndUpdate onClose={onClose} isOpen={isOpen} />
      <ToastContainer position='bottom-center' />
      {/* ..........main-div-ended......  */}
    </div>
  )
}

export default App
