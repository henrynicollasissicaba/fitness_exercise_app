import Image from 'next/image'
import { navItems } from '../data'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex justify-around items-center shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <Image src="/logo.svg" alt="logo" width={65} height={65}/>
        <nav className="flex items-center gap-8 text-blue-800 font-medium">
            {navItems.map(({ id, label, link }) => (
                <div key={id} className="group relative w-max text-lg">
                    <Link href={link}>{label}</Link>
                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-blue-800 group-hover:w-full"></span>
                </div>
            ))}
        </nav>
    </header>
  )
}

export default Header