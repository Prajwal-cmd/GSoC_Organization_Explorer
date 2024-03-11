import React, { useEffect, useState } from 'react'
import AppLayout from '../Layout/AppLayout'
import Filters from '../components/Filters';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setData,updatePage ,updateLoading} from '../slice/OrgSlice';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const [error,setError]=useState("")
  const { project, search, year, curpage, nextpage, prevpage ,totalPages ,isLoading} = useSelector(state => state.Org);
axios.defaults.withCredentials = true
    const yearFilterOptions = [
        "All",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024"
      ];
      

      useEffect(() => {
        const fetchData = async () => {
          dispatch(updateLoading(true))
            const url = `https://gsoc-backend.vercel.app/search?page=${curpage}&year=${year}&search=${search}`;
            try {
                const response = await axios.get(url);

                dispatch(setData(response.data.organizations));
                
                dispatch(updatePage(response.data.pagination)) 
                
            } catch (error) {
                setError(error)
            }finally {
              dispatch(updateLoading(false)); 
          }
        };

        fetchData();
        
        
        
    }, [dispatch, curpage, year, search]);


    if(error){
      return <h1 className="text-2xl text-center font-bold">Error Getting Try Again </h1>;
    }

    if (isLoading) {
      return <Loader />;
  }    
  return (
    <div className=' p-1 md:p-3  w-full   flex flex-col ' style={{ height: 'calc(100vh - 64px)' }}>
    <div className="w-full lg:w-1/4 p-4 flex mx-auto flex-wrap md:text-base xs:text-sm">  
    
        <Filters filters={yearFilterOptions} year={year} />
      
      </div>
      <div className="w-full mx-auto md:p-3   p-4 flex flex-wrap gap-5  justify-center items-stretch"> 
      
      {project && project.map((proj, i) => (
          <Card key={i} project={proj}/>
        ))}
         
      </div>

      <div className="w-full flex justify-center ">
        <Pagination curpage={curpage} prevpage={prevpage} nextpage={nextpage} totalPages={totalPages} />
      </div>    </div>
  )
}

export default AppLayout()(Home)
