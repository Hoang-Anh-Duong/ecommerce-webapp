import React, { useEffect, useState } from 'react';
import BannerComponent from './views/banner';
import BestOfAdidasComponent from './views/bestOfAdidas';
import NewArrivalsComponent from './views/newArrivals';
import StillInterestedComponent from './views/stillInterested';
import productService from '../../../services/user/product.service';
import WebData from '../../../data/data';
import CategoryComponent from './views/category';
import categoryService from '../../../services/user/category.service';

const HomeComponent = () => {
    const [newestProduct, setNewestProduct] = useState([]);
    const [mostStarProduct, setMostStarProduct] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);
    const [dataStillInterested, setDataStillInterested] = useState([]);
    const dataBanners = WebData.banners;

    const getNewestProduct = () => {
        productService.getNewestProduct(
            "",
            (data) => {
                setNewestProduct(data);
            },
            () => { }
        );

    }
    const getMostStarProduct = () => {
        productService.getMostStarProduct(
            "",
            (data) => {
                setMostStarProduct(data);
            },
            () => { }
        );
    }
    const getDataStillInterested = () => {
        productService.getListProducts(
            "",
            (data) => {
                setDataStillInterested(data.slice(0, 10));
            },
            () => { }
        )
    }
    const getListCategory = () => {
        categoryService.getListCategories(
            "",
            (data) => {
                setDataCategory(data.slice(0, 3));
            },
            () => { }
        )
    }
    useEffect(() => {
        getNewestProduct();
        getMostStarProduct();
        getListCategory();
        getDataStillInterested()
    }, []);

    return (
        <>
            {dataBanners?.map(banner => (
                <BannerComponent key={banner.bannerSrc} dataBanner={banner} />
            ))}
            <StillInterestedComponent dataProducts={dataStillInterested} />
            <NewArrivalsComponent dataProducts={newestProduct} />
            <CategoryComponent categories={dataCategory} />
            <BestOfAdidasComponent dataProducts={mostStarProduct} />
        </>
    );
};

export default HomeComponent;