import React from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = (props) => {
    let reviews = props.reviews;
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <Card review={reviews[0]} />
            <div className="flex text-3xl gap-3 text-violet-400 font-bold">
                <button className="cursor-pointer hover:text-violet-500">
                    <FiChevronLeft />
                </button>

                <button className="cursor-pointer hover:text-violet-500">
                    <FiChevronRight />
                </button>
            </div>
            <button className="bg-violet-400 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-5">
                Surprise me
            </button>
        </div>
    );
};

export default Testimonials;
