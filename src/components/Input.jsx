import React from 'react'

const Input = ({classList, type, placeholder, name}) => {
  return (
    <input  name={name} className={`${classList}'py-[23px]   rounded-[6px] pl-[20px] w-full outline-none border-[1px]  border-[#00000033]`} required  type={type} placeholder={placeholder} />
  )
}

export default Input