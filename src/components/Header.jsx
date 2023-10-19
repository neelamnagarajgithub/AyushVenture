import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
    <Link to='/'>
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
       <span className='text-slate-500'>Ayush</span>
       <span className='text-slate-700'>Venture</span>
    </h1>
    </Link>
    <form className='bg-slate-100 p-3 rounded-lg flex items-center'> 
        <input type="text" placeholder="Search..." className='bg-transparent'/>
        <FaSearch className='text-slate-500'/>
    </form>
    <ul className='flex gap-4'>
        <Link to='/'><li className='hidden sm:inline text-slate-700 hover:underline'>Home</li></Link>
        <Link to='/about'><li className='hidden sm:inline text-slate-700 hover:underline'>About</li></Link>
        <Link to='/Startups'><li className='hidden sm:inline text-slate-700 hover:underline'>StartUps</li></Link>
        <Link to='/Schemes'><li className='hidden sm:inline text-slate-700 hover:underline'>Schemes</li></Link>
        <Link to='/Resources'><li className='hidden sm:inline text-slate-700 hover:underline'>Resources</li></Link>
       
       <Link to='/signIn'> <li className=' text-slate-700 hover:underline'>Signin</li></Link>
    </ul>
    </div>
    </header>
  )
}
