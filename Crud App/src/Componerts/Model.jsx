
import React from 'react'


import { MdOutlineClose } from "react-icons/md"
import FormArea from './FormArea'
function Model({ isopen, onclose, }) {
    return (
        <>
            {
                isopen &&
                (
                    <>
                        <div className=' relative z-50 min-h-[200px] rounded bg-white m-auto'>

                            <div className="close-icon flex justify-end m-2 p-3 text-3xl ">
                                <MdOutlineClose onClick={onclose} />
                            </div>
                            {/* .............form .................. */}
<FormArea/>


                        </div>

                        <div className=' z-80 absolute top-0 w-screen h-screen backdrop-blur' />

                    </>

                )



            }

        </>
    )
}

export default Model