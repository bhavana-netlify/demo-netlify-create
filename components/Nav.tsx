import React from 'react';

interface Props {
}

const Nav: React.FC<Props> = ({}) => {
  return (
    <div className='flex justify-between items-center px-8 py-8 bg-blue-100'>
      <a className='font-bold' href="/">Netlify Create</a>
      <ul className='flex gap-4'>
        <li>
          <a href="/about">about</a>
        </li>
      </ul>
    </div>
  )
}

export default Nav;