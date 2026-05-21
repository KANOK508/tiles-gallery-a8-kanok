import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';

const MyLinks = ({children, href,  setShowMenu}) => {
    const usePath = usePathname();
    
  return (
    <Link onClick={()=>  setShowMenu(false)} href={href} className={`${usePath==href ? ' text-blue-700':''} font-semibold hover:text-blue-600 transition`}>
            {children}
          </Link>
  )
}

export default MyLinks