import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './component/NavBar';
import Filter from './component/Filter';
import Cards from './component/Cards';
import { apiUrl, FilterData } from './data';
import { toast } from 'react-toastify';
import Spinner from './component/Spinner';

const App = () => {
  const [courses, setCourses] = useState();
  const [loading, setLoading] = useState(true);

  async function fetchData() { // function names typically start with lowercase
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='min-h-screen flex flex-col' >
      <div>
      <Navbar />
      </div>
      <div className='bg-slate-800'>
      <div >
      <Filter FilterData={FilterData} />
      </div>
      <div className=' w-11/12 flex flex-wrap max-w-[1200px] mx-auto justify-center items-center min-h-[50vh]'>
      {loading ? <Spinner /> : <Cards courses={courses} />}
      </div>
    </div>
    </div>
  );
}

export default App;
