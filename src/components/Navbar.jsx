import Logo from '../assets/images/brand_logo.png'
import '../App.css'

function Navbar() {
  return (
    <div className='flex justify-between mx-20 mt-5'>
      <div className=''>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <ul className='nav-links flex space-x-10 font-medium'>
            <li className=''><a href='#'>MENU</a></li>
            <li><a href='#'>LOCATION</a></li>
            <li><a href='#'>ABOUT</a></li>
            <li><a href='#'>CONTACT</a></li>
        </ul>
      </div>
      <div>
        <button className='btn rounded-none bg-[#D01C28] px-3 py-2 text-white font-medium'>LOGIN</button>
      </div>
    </div>
  )
}

export default Navbar
