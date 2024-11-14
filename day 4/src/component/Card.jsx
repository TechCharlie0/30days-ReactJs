import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
    const { course, likedCourses, setLikedCourses } = props;

    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            // Already liked, so remove it
            setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
            toast.warning("Like removed");
        } else {
            // Not liked yet, so add it
            setLikedCourses((prev) => [...prev, course.id]);
            toast.success("Liked successfully");
        }
    }

    return (
        <div className="w-[300px] bg-slate-900 bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img
                    src={course.image.url}
                    alt={course.title}
                    className="object-cover rounded-t-md"
                />
                <div className="absolute top-2 right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-opacity-90 transition">
                    <button onClick={clickHandler}>
                        {likedCourses.includes(course.id) ? (
                            <FcLike fontSize="1.75rem" />
                        ) : (
                            <FcLikePlaceholder fontSize="1.75rem" />
                        )}
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {course.description.length > 100
                        ? `${course.description.substr(0, 100)}...`
                        : course.description}
                </p>
            </div>
        </div>
    );
};

export default Card;
