import React, { useState } from "react";
import Card from './Card';

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  function getFilteredCourses() {
    if(category === "All"){
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          if (category === "All" || courseData.category === category) {
            allCourses.push(courseData);
          }
        });
      });
      return allCourses;
    }
    else{
      //only show specific category pass  data
      return courses[category];
    }
    
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getFilteredCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
