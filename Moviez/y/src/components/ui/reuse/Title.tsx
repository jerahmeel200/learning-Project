import React from 'react';

interface TitleProps {
 text: string,
 size?: string,
 color?: string,
 className?: string
}

const Title: React.FC<TitleProps> = ({text}) => {
    return (
        <h1 className='text-[2.2vw] font-normal tracking-[-0.03em] text-[#FFD700]'>
            {text}
        </h1>
    );
};

export default Title;