
import { Logo } from '../assets/images'
import { NavLink } from 'react-router-dom'
import { routeList } from '../components'
import { useState } from 'react'


const Navbar = () => {

    const [activeNav, setActiveNaw] = useState("/")

    return (

        < div className='w-[283px] pt-[31px] pr-[15px]' >

            <img className="mb-[49px]" src={Logo} alt='Logo' width={40} height={33} />


            <naw className="flex flex-col gap-[32px]">

                {routeList.map(item => (



                    <NavLink onClick={() => setActiveNaw(item.path)} to={item.path} className={"flex items-center gap-[20px] font-semibold text-[18px]   text-[#000000]"}>

                        {activeNav == item.path ? item.activeIcon : item.icon}
                        <span>{item.title}</span>


                    </NavLink>




                ))}



            </naw>


{/* <button classList='!py-[15px]  tw-[230px]  mt-[30px]'>tweet</button> */}







        </div >
    )
}

export default Navbar