import React from 'react'

const SectionHeading = ({title, subTitle}) => {
  return (
    <div className='section-heading'>
        <h2 className='text-4xl font-medium mb-3'>{title}</h2>
        <p className='md:w-1/3 mx-auto'>{subTitle}</p>
    </div>
  )
}

export default SectionHeading