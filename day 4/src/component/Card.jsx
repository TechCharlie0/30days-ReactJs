import React from "react";
import { FcLike, FcPrevious } from "react-icons/fc";
import Filter from "./Filter";
import { toast } from "react-toastify";

const Card = ({ course }) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //pailai liked vako
            setLikedCourses((Prev)=>Filter((cid !==course.id));)
            toast.warning("like removed");
        }
        else{
            if(likedCourses.lenght ===0){
        setLikedCourses((course.id));
            }
            else{
                setLikedCourses((prev));



            }
        }

    }
  return (
    <div className="w-[300px] bg-slate-900 bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt={course.title} className="object-fit rounded-t-md" />
        
        
        <button onClick={clickHandler} className="absolute top-2 right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-opacity-90 transition">
          <FcLike fontSize="1,75rem" />
        </button>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="mt-2 text-white">{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
