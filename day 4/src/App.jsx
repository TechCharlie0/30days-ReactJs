import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './component/NavBar';
import Filter from './component/Filter';
import Cards from './component/Cards';
import { apiUrl, FilterData } from './data';
import { toast } from 'react-toastify';
import Spinner from './component/Spinner';
import { FcAlarmClock } from 'react-icons/fc';

const App = () => {
  const [courses, setCourses] = useState();
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(FilterData[0]?.title);

  // Fetching data from the API
  async function fetchData() {
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
    <div className="min-h-screen flex flex-col bg-slate-800">
      <Navbar />
      <div className="bg-slate-800">
        {/* Filter component to filter categories */}
        <Filter
          FilterData={FilterData}
          category={category}
          setCategory={setCategory} // Pass setCategory to allow filter selection
        />
        <div className="w-11/12 flex flex-wrap max-w-[1200px] mx-auto justify-center items-center min-h-[50vh]">
          {/* Show Spinner while loading */}
          {loading ? <Spinner /> : <Cards courses={courses} category={category} />} 
        </div>
      </div>
    </div>
  );
};

export default App;
