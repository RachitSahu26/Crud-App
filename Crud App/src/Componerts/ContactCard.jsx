import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi'
import { BsFillTrashFill } from 'react-icons/bs'
import { db } from '../config/firebase';
import { toast } from 'react-toastify'


function ContactCard({ contact ,onOpen }) {

  const onDelect = async (id) => {
    try {
      await deleteDoc(doc(db, "rachitdata",id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
console.log("here is error")
    }


  }


  return (
    <div
      key={contact.id}
      className="contact-area flex justify-between rounded-lg mt-3 bg-red-50"
    >
      <AiOutlineUserAdd className='m-3 text-5xl text-red-400' />
      <div className="user-detail mt-2 text-1xl">
        <h1>{contact.name}</h1>
        <p>{contact.email}</p>
      </div>
      <div className=" flex edit-section text-4xl justify-between m-3.5 gap-2">

        <BiEditAlt onClick={onOpen}className='cursor-pointer' />
        <BsFillTrashFill onClick={()=>onDelect(contact.id)} className='text-red-400 cursor-pointer ' />
      </div>
    </div>

  );
};

export default ContactCard
