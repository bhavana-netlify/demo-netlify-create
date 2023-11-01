import React from 'react';
import Button from './Button';

interface Props {
  id: string
  heading: string
  body: string
  button: any
}

const Hero: React.FC<Props> = ({ id, heading, body, button }) => {
  return (
    <div className='bg-blue-100' data-sb-object-id={id}>
      <div className="container mx-auto px-2 py-20 max-w-[65ch]">
        <div className="text-center">
          <h1 className='font-bold text-2xl mb-4' data-sb-field-path="heading">{heading}</h1>
          <h2 className='text-xl mb-8' data-sb-field-path="body">{body}</h2>
          <Button id={button.sys.id} label={button.label} url={button.url}/>
        </div>
      </div>
    </div>
  )
}

export default Hero;