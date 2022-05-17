import React, { useEffect, useState } from 'react';
import { Col, Input, Pagination, Row } from 'antd';
import ProductComponent from '../../../../common/product';
import { StyleListProductComponent } from './styled';
import { useHistory } from 'react-router-dom';
import productService from '../../../../../services/user/product.service';
import categoryService from '../../../../../services/user/category.service';

const ListProductComponent = () => {
    const history = useHistory();
    const [dataProducts, setDataProducts] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [paramsSearch, setParamsSearch] = useState("");
    const [categorySearch, setCategorySearch] = useState("");
    const [minPriceSearch, setMinPriceSearch] = useState("");
    const [maxPriceSearch, setMaxPriceSearch] = useState("");

    const productPerPage = 12;
    const numberOfProducts = dataProducts.length;

    const params = new URL(window.location.href);
    const paramUrl = params.searchParams;

    const setParams = () => {
        let s = "";
        let search = paramUrl.get("search") || "";
        let category = paramUrl.get("category") || "";
        let minPrice = paramUrl.get("minPrice") || "";
        let maxPrice = paramUrl.get("maxPrice") || "";
        let page = paramUrl.get("page") || 1;
        if (search !== "") {
            s = s.concat(`?search=${search}`);
        }
        if (category !== "") {
            if (s !== "") {
                s = s.concat(`&category=${category}`);
            } else {
                s = s.concat(`?category=${category}`);
            }
        }
        if (minPrice !== "") {
            if (s !== "") {
                s = s.concat(`&minPrice=${minPrice}`);
            } else {
                s = s.concat(`?minPrice=${minPrice}`);
            }
        }
        if (maxPrice !== "") {
            if (s !== "") {
                s = s.concat(`&maxPrice=${maxPrice}`);
            } else {
                s = s.concat(`?maxPrice=${maxPrice}`);
            }
        }
        if (page !== "") {
            if (s !== "") {
                s = s.concat(`&page=${page}`);
            } else {
                s = s.concat(`?page=${page}`);
            }
        }
    }
    const handleChangeMinPrice = (e) => {
        setMinPriceSearch(e.target.value);
        let s = "";
        let search = paramUrl.get("search") || "";
        let category = paramUrl.get("category") || "";
        let maxPrice = paramUrl.get("maxPrice") || "";
        let page = paramUrl.get("page") || 1;
        if (search !== "") {
            s = s.concat(`?search=${search}`);
        }
        if (category !== "") {
            if (s !== "") {
                s = s.concat(`&category=${category}`);
            } else {
                s = s.concat(`?category=${category}`);
            }
        }
        if (s !== "") {
            s = s.concat(`&minPrice=${e.target.value}`);
        } else {
            s = s.concat(`?minPrice=${e.target.value}`);
        }
        if (maxPrice !== "") {
            if (s !== "") {
                s = s.concat(`&maxPrice=${maxPrice}`);
            } else {
                s = s.concat(`?maxPrice=${maxPrice}`);
            }
        }
        if (page !== "") {
            if (s !== "") {
                s = s.concat(`&page=${page}`);
            } else {
                s = s.concat(`?page=${page}`);
            }
        }
        history.push(`/product${s}`);
    }
    const handleChangeMaxPrice = (e) => {
        setMaxPriceSearch(e.target.value);
        let s = "";
        let search = paramUrl.get("search") || "";
        let category = paramUrl.get("category") || "";
        let minPrice = paramUrl.get("minPrice") || "";
        let page = paramUrl.get("page") || 1;
        if (search !== "") {
            s = s.concat(`?search=${search}`);
        }
        if (category !== "") {
            if (s !== "") {
                s = s.concat(`&category=${category}`);
            } else {
                s = s.concat(`?category=${category}`);
            }
        }
        if (minPrice !== "") {
            if (s !== "") {
                s = s.concat(`&minPrice=${minPrice}`);
            } else {
                s = s.concat(`?minPrice=${minPrice}`);
            }
        }
        if (s !== "") {
            s = s.concat(`&maxPrice=${e.target.value}`);
        } else {
            s = s.concat(`?maxPrice=${e.target.value}`);
        }
        if (page !== "") {
            if (s !== "") {
                s = s.concat(`&page=${page}`);
            } else {
                s = s.concat(`?page=${page}`);
            }
        }
        history.push(`/product${s}`);
    }
    const handleChangeCategory = (e) => {
        setCategorySearch(e.target.value);
        let s = "";
        let search = paramUrl.get("search") || "";
        let minPrice = paramUrl.get("minPrice") || "";
        let maxPrice = paramUrl.get("maxPrice") || "";
        let page = paramUrl.get("page") || 1;
        if (search !== "") {
            s = s.concat(`?search=${search}`);
        }
        if (s !== "") {
            s = s.concat(`&category=${e.target.value}`);
        } else {
            s = s.concat(`?category=${e.target.value}`);
        }
        if (minPrice !== "") {
            if (s !== "") {
                s = s.concat(`&minPrice=${minPrice}`);
            } else {
                s = s.concat(`?minPrice=${minPrice}`);
            }
        }
        if (maxPrice !== "") {
            if (s !== "") {
                s = s.concat(`&maxPrice=${maxPrice}`);
            } else {
                s = s.concat(`?maxPrice=${maxPrice}`);
            }
        }
        if (page !== "") {
            if (s !== "") {
                s = s.concat(`&page=${page}`);
            } else {
                s = s.concat(`?page=${page}`);
            }
        }
        history.push(`/product${s}`);
    }
    // const getListProducts = () => {
    //     productService.getListProducts(
    //         "",
    //         (data) => {
    //             setDataProducts(data);
    //         },
    //         () => { }
    //     );
    // }

    const getListCategory = () => {
        categoryService.getListCategories(
            "",
            (data) => {
                setDataCategory(data);
            },
            () => { }
        )
    }
    const getSearchProduct = () => {
        productService.search(
            {
                categoryId: categorySearch,
                name: paramsSearch,
                minPrice: minPriceSearch,
                maxPrice: maxPriceSearch,
            },
            (data) => {
                setDataProducts(data.rows);
            },
            () => { }
        )
    }
    const handleClickPage = (page) => {
        let s = "";
        let search = paramUrl.get("search") || "";
        let category = paramUrl.get("category") || "";
        let minPrice = paramUrl.get("minPrice") || "";
        let maxPrice = paramUrl.get("maxPrice") || "";
        if (search !== "") {
            s = s.concat(`?search=${search}`);
        }
        if (category !== "") {
            if (s !== "") {
                s = s.concat(`&category=${category}`);
            } else {
                s = s.concat(`?category=${category}`);
            }
        }
        if (minPrice !== "") {
            if (s !== "") {
                s = s.concat(`&minPrice=${minPrice}`);
            } else {
                s = s.concat(`?minPrice=${minPrice}`);
            }
        }
        if (maxPrice !== "") {
            if (s !== "") {
                s = s.concat(`&maxPrice=${maxPrice}`);
            } else {
                s = s.concat(`?maxPrice=${maxPrice}`);
            }
        }
        if (s !== "") {
            s = s.concat(`&page=${page}`);
        } else {
            s = s.concat(`?page=${page}`);
        }
        history.push(`/product${s}`);
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        getListCategory();
        // getListProducts();
        getSearchProduct();
        const page = paramUrl.get("page") || 1;
        const search = paramUrl.get("search") || "";
        const category = paramUrl.get("category") || "";
        const minPrice = paramUrl.get("minPrice") || "";
        const maxPrice = paramUrl.get("maxPrice") || "";
        setCurrentPage(page);
        setParamsSearch(search);
        setCategorySearch(category);
        setMinPriceSearch(minPrice);
        setMaxPriceSearch(maxPrice);
    }, [params.href, categorySearch])

    var indexOfFirstProduct = (currentPage - 1) * productPerPage;
    var indexOfLastProduct = currentPage * productPerPage - 1;
    if (indexOfLastProduct > numberOfProducts) {
        indexOfLastProduct = numberOfProducts - 1;
    }

    const currenDataProduct = dataProducts.filter(
        (item, index) => index >= indexOfFirstProduct && index <= indexOfLastProduct
    );

    return (
        <StyleListProductComponent>
            <div className="breadcrumb">
                <span
                    className="breadcrumb-item"
                    onClick={() => { history.push("/") }}
                >
                    Trang chủ
                </span>
                <span
                    className="breadcrumb-item"
                    onClick={() => { history.push("/product") }}
                >
                    / Sản phẩm
                </span>
            </div>
            {paramsSearch !== "" ?
                <div className="header-bar">Từ khóa: {paramsSearch}</div> :
                <div className="header-bar">Tất cả sản phẩm</div>
            }
            <div className="product-filter">
                <label className="label">
                    Danh mục sản phẩm
                </label>
                <select className="product-category filter" onChange={handleChangeCategory}>
                    <option value="">Tất cả</option>
                    {dataCategory.map(category => (
                        category?.id == categorySearch ?
                            <option
                                key={category?.id}
                                value={category?.id}
                                selected
                            >
                                {category?.name}
                            </option> :
                            <option
                                key={category?.id}
                                value={category?.id}
                            >
                                {category?.name}
                            </option>
                    ))}
                </select>
                <label className="label">
                    Giá
                </label>
                <Input
                    className="min-price filter"
                    value={minPriceSearch}
                    placeholder="Giá thấp nhất"
                    onChange={handleChangeMinPrice}
                />
                <label className="label">
                    -
                </label>
                <Input
                    className="max-price filter"
                    value={maxPriceSearch}
                    placeholder="Giá cao nhất"
                    onChange={handleChangeMaxPrice}
                />
            </div>
            <div className="list-product">
                <Row>
                    {currenDataProduct.map(dataProduct => (
                        <Col
                            key={dataProduct.id}
                            className="product-item"
                            span={6} xs={12} sm={8} xl={6}
                        >
                            <ProductComponent dataProduct={dataProduct} />
                        </Col>
                    ))}
                </Row>
            </div>
            <div>
                <div className="product-pagination">
                    <Pagination className="pagination"
                        current={+currentPage}
                        total={numberOfProducts}
                        onChange={handleClickPage}
                        defaultPageSize={productPerPage}
                        showSizeChanger={false}
                    />
                </div>
            </div>
        </StyleListProductComponent>
    );
};

export default ListProductComponent;