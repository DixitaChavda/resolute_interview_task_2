import React from 'react'

const Container = ({children}) => {
  return (
    <div className='mx-auto  max-w-[1080px] w-[80%]'>
      {children}
    </div>
  )
}

export default Container
