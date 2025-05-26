import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../assets/css/products.css";
import { Link, useLocation, useParams } from "react-router-dom";
import OtherPageFooter from "../components/OtherPageFooter";
import getImageURL from "../utills/getImageURL";
import { FaFilter } from "react-icons/fa6";
import parse from 'html-react-parser'
import { RxCross2 } from "react-icons/rx";
import bannerImg from '../assets/image/productbannermain.png'



function SearchList() {
  const [products, setProducts] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [catHeader, setCatHeader] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState('')

  
    const [pagination, setPagination] = useState({
      page: 1,
      totalRecords: null,
      totalPages: null,
    });

      function handlePrevious() {
    if (pagination.page > 1) {
      setPagination((old) => {
        return { ...old, page: old.page - 1 };
      });
    }
  }

  function handleNext() {
    if (pagination.page < pagination.totalPages) {
      setPagination((old) => {
        return { ...old, page: old.page + 1 };
      });
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const location = useLocation();

  const data = location.state?.data;
  const searchQuery = location.state?.searchQuery;

useEffect(() => {
  setProducts(data)

}, [data])

  
  return (
    <div>
      <NavBar />
      <div className="bgWhite py-4">
        <div className="container">
          <div className="breadcrumb mb-0">
            <p className="mb-0">
              <Link to="/">HOME</Link>
              <span> / </span>{" "}
              <Link to={`/searchlist`} className="ms-2">
                Search = {searchQuery}
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="bgWhite">
        <div className="container">
          <div className="product-main-banner">
            <div className="product-banner d-lg-flex">
              <div>
                <img src={bannerImg} alt={''} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" listingHeader bgWhite pt-3">
        <div className="container mb-0">
          <h1>{catHeader?.listingTitle}</h1>
          <p className="mb-0">{parse(catHeader?.listingDescription || "")}</p>
        </div>
      </div>
      {/* Product Listing Section */}
      <div className="product-listing py-5">
        <div className="container">
          <div className="row">
            {/* Product Grid */}
            <div className="col-lg-12 products-container mt-3">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h2>{!selectedSubCategory ? '' : selectedSubCategory || ''}</h2>
                  {/* <p>{catHeader?.shortDescription || ""}</p> */}
                </div>
                <button className="sidebar-toggle d-lg-none d-block" onClick={handleShow}>
                  {isSidebarOpen ? <RxCross2 /> : <><FaFilter /> Filters</>}
                </button>
              </div>

              <div className="row">
                {products?.map((product) => {
                  const imageUrl = getImageURL(product?.a4Image);
                  return (
                    <div className="col-lg-3 col-6" key={product._id}>
                      <Link to={`/product-details/${product.slug}`}
                      >
                        <div className="product-box">
                          <img src={imageUrl} alt={product.name} />
                          {/* <div className="blur"></div> */}
                          <h4>{product.name}</h4>
                          <h4>{product.decorNumber}</h4>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>

              {/* B-Pagination */}
              <div className="d-flex justify-content-end">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <button
                        className="page-link"
                        href="#"
                        disabled={pagination.page == 1 ? true : false}
                        onClick={handlePrevious}
                      >
                        Previous
                      </button>
                    </li>
                    {[...Array(pagination.totalPages)].map((item, index) => {
                      index = index + 1;
                      return (
                        <li className="page-item">
                          <button
                            onClick={() => {
                              setPagination((old) => {
                                return { ...old, page: index };
                              });
                            }}
                            className={`page-link ${pagination.page == index ? "active" : ""
                              }`}
                            href="#"
                          >
                            {index}
                          </button>
                        </li>
                      );
                    })}

                    <li className="page-item">
                      <button
                        className="page-link"
                        disabled={
                          pagination.page == pagination.totalPages
                            ? true
                            : false
                        }
                        onClick={handleNext}
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OtherPageFooter />
    </div>
  );
}

export default SearchList;
