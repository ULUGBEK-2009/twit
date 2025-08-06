import  {  useState } from 'react'
import { Heading, Input } from '../../components'
import { Logo } from '../../assets/images'
import { Context } from '../../Context/Context'
import { useCookies } from 'react-cookie'


const Login = () => {
  const [_cookies, setCookie,] = useCookies(['token']);
  const [loading, setLoading] = useState(false)
  // const { setToken } = useContext(Context)



  function handleLogin(e) {
   
    e.preventDefault()
    setLoading(true)
    const data = {

      email: e.target.email.value,
      password: e.target.password.value,
    }

setTimeout(() =>{


  setCookie("token",data)

},1000)




  }


  return (
    <>
      <div className='w-[450px]  mx-auto  mt-[60px]  '>
        <img src={Logo} alt="Logo" width={50} height={41} />
        <Heading classList={'!my-[36px]'} type={"h1"} title={"Log in to Twitter"} />

        <form onSubmit={handleLogin} autoComplete='off' >


          <Input className="!mb-[25px] " name="email" type="text" placeholder="phone number, email address" />
          <Input className="!mb-[25px]" name="password" type="password" placeholder="password" />


          <button className='py-[18px] bg-[#1da1f2] cursor-pointer duration-300 hover:opacity-90 text-white font-bold text-[18px]  w-full  rounded-[76px] '>log in</button>



        </form>

      </div>


 
    </>
  )
}

export default Login