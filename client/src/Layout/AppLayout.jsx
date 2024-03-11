import React from 'react'
import Header from '../components/Header'

const AppLayout = () =>(WrappedComponent)=> {
    return(props)=>{
  return (
    <div className='w-full'>
    <Header />
    <div ><WrappedComponent {...props} /></div>
    </div>
  )
}
}
export default AppLayout