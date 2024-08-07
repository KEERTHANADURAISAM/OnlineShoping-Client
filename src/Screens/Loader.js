import React from 'react'
import { Audio, ThreeDots } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div>
   <ThreeDots
  visible={true}
  height="80"
  width="50"
  color="black"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
/>
    </div>

    
  )
}

export default Loader
