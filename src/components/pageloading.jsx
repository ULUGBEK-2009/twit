import React from 'react'
import { Logo,  } from "../assets/images"



const PageLoading = () => {
    return (
        <div className='flexed right-0 left-0 top-0 bottom-0 flex justify-center items-center'>


            <img className="loading-img" src={Logo} alt="Logo" width={100} height={100} />

        </div>
    )
}

export default PageLoading