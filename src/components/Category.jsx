import React, { useState } from "react";
import "../assets/css/category.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const Category = () => {
  const [activeBox, setActiveBox] = useState(0); // Track the active box index

  const categories = [
    {
      id: 1,
      title: "Decorative Compacts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      button: "EXPLORE",
      activeClass: "decorative-active", // Add specific active class for this category
    },
    {
      id: 2,
      title: "INTERIOR COMPACTS",
      description:
        "Explore our wide range of interior compact solutions for your space.",
      button: "EXPLORE",
      activeClass: "interior-active", // Add specific active class for this category
    },
    {
      id: 3,
      title: "EXTERIOR COMPACTS",
      description:
        "Discover durable and stylish exterior compact designs.",
      button: "EXPLORE",
      activeClass: "exterior-active", // Add specific active class for this category
    },
  ];

  return (
    <div className="category">
      <div className="container">
        <h2>Category</h2>
        <div className="d-flex align-items-center justify-content-center">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`category-box ${activeBox === index
                  ? `category-box-active ${category.activeClass}` // Add the specific active class here
                  : ""
                }`}
              onMouseEnter={() => setActiveBox(index)} // Activate box on hover
              onMouseLeave={() => setActiveBox(0)} // Reset on hover out
            >
              <div className={
                activeBox === index ? `texts` : ""
              }>
                <button className="category-btn">Export Now <HiOutlineArrowNarrowRight /></button>
                <div className="d-flex">
                  <h4>{`0${category.id}`}</h4>
                  <h3>{category.title}</h3>
                </div>
                {activeBox === index && category.description && (
                  <p>{category.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
