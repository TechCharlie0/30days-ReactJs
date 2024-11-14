import React from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


const Testimonials = (props) => {
    let reviews = props.reviews;
    return (
        <div>
            <Card review={reviews[0]} />
            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">
                <button className="cursor-pointer hover:text-violet-500 ">
                    <FiChevronLeft />
                </button>

                <button className="cursor-pointer hover:text-violet-500 ">
                    <FiChevronRight />
                </button>
            </div>
            <div>
                <button className="bg-violet-400 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
                    Surprise me
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
