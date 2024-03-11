import ReactLoading from 'react-loading';
const Loader = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'> 
         <ReactLoading type={"bars"} color={"#3b82f6"} height={'10%'} width={'10%'} />
    </div>
  )
}

export default Loader