import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { SidebarTitle } from './SidebarTitle';
import { IconLink } from './IconLink';


const SecundarySidebar = () => {
    return (
<aside className="sticky top-0 w-28 flex flex-col gap-4 items-center py-20 h-screen overflow-hidden">
        <SidebarTitle text='Links' />
        <IconLink url='https://www.instagram.com/dresq28_/' Icon={AiFillInstagram} />
        <IconLink url='https://www.linkedin.com/in/andresqb198/' Icon={FaLinkedinIn} />
        <IconLink url='https://github.com/andresqb198' Icon={BsGithub} />
      </aside>
    )
  };
  
  export default SecundarySidebar ;