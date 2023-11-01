import React from 'react';

interface Props {
  id: string
  label: string
  url: string
}

const Button: React.FC<Props> = ({ id, label, url }) => {
  return (
    <a data-sb-object-id={id} className="inline-block px-6 py-4 bg-blue-300 rounded shadow-xl" href={url}><span data-sb-field-path="label">{label}</span></a>
  )
}

export default Button;