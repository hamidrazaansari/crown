import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../assets/css/products.css";
import { Accordion } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import { API_URL } from "../utills/BaseUrl";
import axios from "axios";
import Img from "../assets/image/productbanner.png";
import OtherPageFooter from "../components/OtherPageFooter";
import Product1 from "../assets/image/product1.png";
import getImageURL from "../utills/getImageURL";
import { FaFilter } from "react-icons/fa6";

import { RxCross2 } from "react-icons/rx";


function Application() {
    const [products, setProducts] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [decorSeries, setDecorSeries] = useState([]);
    const [finishes, setFinishes] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedFinish, setSelectedFinish] = useState("");
    const [selectedDecor, setSelectedDecor] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");

    const [catHeader, setCatHeader] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);



    const location = useLocation();
    const categoryId = location.state;
    const { categorySlug, subCategorySlug } = useParams();

    const [pagination, setPagination] = useState({
        page: 1,
        totalRecords: null,
        totalPages: null,
    });
    const [decorNumber, setDecorNumber] = useState();

    useEffect(() => {
        async function fetchProduct() {
            try {
                let url = `${API_URL}/products/67ac94b062526b6099c37b5e?limit=${5}&page=${pagination.page}`;

                if (decorNumber) {
                    url += `&decorNumber=${decorNumber}`;
                }

                if (selectedDecor) {
                    url += `&decorSeries=${selectedDecor}`;
                }

                if (selectedSizes.length) {
                    for (let size of selectedSizes) {
                        url += `&sizes=${size}`;
                    }
                }

                if (subCategorySlug) {
                    url += `&subCategorySlug=${subCategorySlug}`;
                }

                const response = await axios.get(url);
                setPagination({
                    page: Number(response.data.page),
                    totalRecords: Number(response.data.totalRecords),
                    totalPages: Number(response.data.totalPages),
                });
                setProducts(response.data.body);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProduct();
    }, [
        categorySlug,
        subCategorySlug,
        pagination.page,
        decorNumber,
        selectedSizes,
        selectedDecor,
    ]);

    useEffect(() => {
        async function fetchCategory() {
            try {
                let url = `${API_URL}/categories/67ac94b062526b6099c37b5e`;
                const response = await axios.get(url);
                setCatHeader(response?.data?.body[0]);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCategory();
    }, [categorySlug]);

    useEffect(() => {
        async function fetchSubCategory(categoryId) {
            try {
                let url = `${API_URL}/subCategories?category=${categoryId}&limit=0`;
                const response = await axios.get(url);
                setSubCategory(response?.data?.body);
            } catch (error) {
                console.log(error);
            }
        }
        if (catHeader) {
            fetchSubCategory(catHeader._id);
        }
    }, [catHeader]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [sizesRes, decorRes, finishesRes, subCategoryRes, categoryRes] =
                    await Promise.all([
                        axios.get(`${API_URL}/sizes`),
                        axios.get(`${API_URL}/decorSeries`),
                        axios.get(`${API_URL}/finishes`),
                        axios.get(`${API_URL}/subCategories`),
                        // axios.get(
                        //   `${API_URL}/categories/${
                        //     categoryId ? categoryId : "6724e2e2a0586b2a40e206f8"
                        //   }`
                        // ),
                    ]);
                setSizes(sizesRes.data.body);
                setDecorSeries(decorRes.data.body);
                setFinishes(finishesRes.data.body);
                // setSubCategory(subCategoryRes.data.body);
                // setCatHeader(categoryRes.data.body);
            } catch (err) {
                setError("Error fetching data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [categorySlug]);

    // **Handle Multi-Select Size Filter**
    const handleSizeFilter = (sizeId) => {
        setSelectedSizes((prev) =>
            prev.includes(sizeId)
                ? prev.filter((id) => id !== sizeId)
                : [...prev, sizeId]
        );
    };

    const handleFinishFilter = (finishId) => {
        setSelectedFinish((prev) =>
            prev.includes(finishId)
                ? prev.filter((id) => id !== finishId)
                : [...prev, finishId]
        );
    };

    const handleSubCategoryFilter = (subCategoryId) => {
        setSelectedSubCategory((prev) =>
            prev === subCategoryId ? "" : subCategoryId
        );
    };

    const filteredProducts = products.filter((product) => {
        const sizeMatch =
            selectedSizes.length === 0 ||
            product.sizes?.some((size) => selectedSizes.includes(size._id));

        const finishMatch =
            selectedFinish === "" ||
            product.sizeFinishes?.some((finish) => finish._id === selectedFinish);

        const subCategoryMatch =
            selectedSubCategory === "" ||
            product.subCategories?.some((sub) => sub._id === selectedSubCategory);

        const decorSeriesMatch =
            selectedDecor === "" || product.decorSeries?._id === selectedDecor;

        return sizeMatch && finishMatch && subCategoryMatch && decorSeriesMatch;
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


    return (
        <div>
            <NavBar />
            <div className="bgWhite py-4">
                <div className="container">
                    <div className="breadcrumb mb-0">
                        <p className="mb-0">
                            <a href="/">HOME</a>
                            <span> / </span>{" "}
                            <a href="/" className="ms-2">
                                Exterior Compacts
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="bgWhite">
                <div className="container">
                    <div className="product-main-banner">
                        <div className="product-banner d-lg-flex">
                            <div>
                                <img src={Img} alt="" />
                                <div className="banner-text-container">
                                    <h2>{catHeader?.textOverImage || "Default Title"}</h2>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bgWhite listingHeader">
                <div className="container">
                <h1>Application</h1>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus aliquam consequuntur itaque reiciendis? Saepe, corporis illo laborum deserunt quos rem a veniam nulla? Sunt eius dolorum voluptatum eveniet error.</p>
                </div>
            </div>
            {/* Product Listing Section */}
            <div className="product-listing py-5">
                <div className="container">
                    <div className="row">
                        {/* Sidebar Filters */}
                        <div className="col-lg-4">
                            <div className={`sidebar d-lg-block  ${isSidebarOpen ? "d-block" : "d-none"}`}>
                                <h3>Search by decor code</h3>
                                <input
                                    type="text"
                                    placeholder="search"
                                    className="search"
                                    value={decorNumber}
                                    onChange={(e) => setDecorNumber(e.target.value)}
                                />

                                {/* Size Filter */}
                                <h3 className="mt-3">FILTER BY SIZE</h3>
                                <div className="row">
                                    {sizes.map((size) => (
                                        <div className="col-6" key={size._id}>
                                            <button
                                                onClick={() => handleSizeFilter(size._id, size.title)}
                                                className={
                                                    selectedSizes.includes(size._id) ? "active-btn" : ""
                                                }
                                            >
                                                {size.title}
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="mt-3">FILTER BY Decor Series</h3>
                                <div className="row">
                                    {decorSeries.map((type) => (
                                        <div className="col-6" key={type._id}>
                                            <button
                                                onClick={() => setSelectedDecor(type._id)}
                                                className={
                                                    selectedDecor == type._id ? "active-btn" : ""
                                                }
                                            >
                                                {type.title}
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Other Filters */}
                                <h3 className="mt-3">FILTER BY FINISHES</h3>
                                <div className="row">
                                    {finishes.map((finish) => (
                                        <div className="col-6" key={finish._id}>
                                            <button
                                                onClick={() => handleFinishFilter(finish._id)}
                                                className={
                                                    selectedFinish.includes(finish._id)
                                                        ? "active-btn"
                                                        : ""
                                                }
                                            >
                                                {finish.fullName}
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Category Filter */}
                                <h3 className="mt-3">FILTER BY CATEGORY</h3>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Subcategory</Accordion.Header>
                                        <Accordion.Body>
                                            <ul className="list-unstyled ms-2">
                                                {subCategory?.map((item) => (
                                                    <li key={item._id}>
                                                        <Link
                                                            to={`/${categorySlug}/${item.slug}`}
                                                            onClick={() => handleSubCategoryFilter(item._id)}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <button className="sidebar-toggle d-lg-none d-block" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                {isSidebarOpen ? <RxCross2 /> : <FaFilter />}
                            </button>
                        </div>

                        {/* Product Grid */}
                        <div className="col-lg-8 products-container">
                            <h2>{catHeader?.name || "Default Title"}</h2>
                            <p>{catHeader?.shortDescription || ""}</p>

                            <div className="row mt-3">
                                {products?.map((product) => {
                                    const imageUrl = getImageURL(product?.a4Image);
                                    return (
                                        <div className="col-lg-4 col-6" key={product._id}>
                                            <Link to={`/product-details/${product._id}`}>
                                                <div className="product-box">
                                                    <img src={imageUrl} alt={product.name} />
                                                    <div className="blur"></div>
                                                    <h4>{product.name}</h4>
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

export default Application;
