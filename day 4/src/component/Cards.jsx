import React, { useState } from "react";
import Card from './Card';

const Cards = ({ courses }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    let allCourses = [];
    Object.values(courses).forEach((array) => {
      array.forEach((courseData) => {
        allCourses.push(courseData);
      });
    });
    return allCourses;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses} // Pass the likedCourses state
          setLikedCourses={setLikedCourses} // Pass the setLikedCourses function
        />
      ))}
    </div>
  );
};

export default Cards;
