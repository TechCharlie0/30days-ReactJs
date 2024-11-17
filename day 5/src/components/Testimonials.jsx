import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if (index - 1 < 0) {
            setIndex(reviews.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return (
        <div className="w-[80vw] md:w-[800px] bg-white flex flex-col justify-center items-center mt-25 p-10 transition-all duration-700 hover:shadow-md">
            <Card review={reviews[index]} />
            <div className="flex text-3xl gap-3 text-violet-400 font-bold">
                <button
                    onClick={leftShiftHandler}
                    className="cursor-pointer hover:text-violet-500"
                >
                    <FiChevronLeft />
                </button>

                <button
                    onClick={rightShiftHandler}
                    className="cursor-pointer hover:text-violet-500"
                >
                    <FiChevronRight />
                </button>
            </div>
            <button
                onClick={surpriseHandler}
                className="bg-violet-400 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-5"
            >
                Surprise me
            </button>
        </div>
    );
};

export default Testimonials;
