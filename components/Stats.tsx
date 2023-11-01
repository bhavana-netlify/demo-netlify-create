import React from 'react';

interface Props {
  id: string
  heading: string
  body: string
  stats: { sys: { id: string }, label: string, value: string }[]
}

const Stats: React.FC<Props> = ({ id, heading, body, stats }) => {
  return (
    <div className='' data-sb-object-id={id}>
      <div className="container mx-auto px-8 py-20">
        <div className="text-center">
          <h1 className='font-bold text-2xl' data-sb-field-path="heading">{heading}</h1>
          <p data-sb-field-path="body">{body}</p>
        </div>
        <div className='flex text-center gap-20 mt-20 justify-center flex-wrap'>
          {stats?.map((stat) => (
            <div key={stat.sys.id} data-sb-object-id={stat.sys.id} className='border shadow-xl gap-20 py-20 px-20 rounded-2xl'>
              <p className='font-bold text-4xl' data-sb-field-path="value">{stat.value}</p>
              <h3 data-sb-field-path="label">{stat.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats;