import { Search } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';


interface Props {
    // define your props here
}

const Header: React.FC<Props> = () => {
const [toggleSearch, setToggleSearch] = useState(false)

const searchToggle = ()=>{
    setToggleSearch(!toggleSearch)
}

    return (
        <div className='px-5 py-5  mx-auto max-w-[1920px]' >
            <div className=' flex justify-between items-center  '>
            <div>
                
            <Image className='w-[50px] h-[50px] object-contain' width={100} height={100} src="/assets/images/logo.png" alt=''/>

            </div>
            <div className='flex gap-[10px]'>
             <ul className='font-eudoxus flex gap-[10px] cursor-pointer'>
                <li className='text-[16px]'>Movies</li>
                <li>Series</li>
             </ul>
             <Search onClick={searchToggle} className='cursor-pointer'/>
            </div>

            </div>

            <div className='mx-auto max-w-[1920px]'>

{
    toggleSearch && (


            <div className=' relative  text-center mt-5  w-[100%]   m-w-[100px] border border-[#FFD700]'>
            <input type="text" className='w-full rounded-md bg-transparent border border-none mx-6' />
            <Search size={20} color='#FFD700' className='cursor-pointer absolute left-[2px] top-[2px]'/>
                        </div>
    )
}

</div>
        </div>
    );
};

export default Header;