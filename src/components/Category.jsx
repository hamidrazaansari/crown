import React, { useState, useEffect } from "react";
import "../assets/css/category.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utills/BaseUrl";

const Category = () => {
  const [activeBox, setActiveBox] = useState(0); // Track the active box index
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/categories`);
        setData(response.data.body);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const navigate = useNavigate();

  const handleOpen = (id) => {
    navigate("/products", { state: id });
  };

  // Map active classes manually based on category ID or title
  const getActiveClass = (id) => {
    
    const classMap = {
      1: "decorative-active",
      2: "interior-active",
      3: "exterior-active",
    };
    return classMap[id] || "";
  };

  return (
    <div className="category">
      <div className="container">
        <h2>Category</h2>
        <div className="d-flex align-items-center justify-content-center">
          {data?.map((category, index) => (
            <div
              key={category._id}
              className={`category-box ${
                activeBox === index
                  ? `category-box-active ${getActiveClass(index + 1)}`
                  : ""
              }`}
              onMouseEnter={() => setActiveBox(index)} // Activate box on hover
              onMouseLeave={() => setActiveBox(0)} // Reset on hover out
            >
              <div className={activeBox === index ? `texts` : ""}>
                <button className="category-btn" onClick={()=> handleOpen(category._id)}>
                  Export Now <HiOutlineArrowNarrowRight />
                </button>
                <div className="d-flex">
                  <h4>{`0${index + 1}`}</h4>
                  <h3>{category.name}</h3>
                </div>
                {activeBox === index && category.shortDescription && (
                  <p>{category.shortDescription}</p>
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


