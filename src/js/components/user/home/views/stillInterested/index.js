import React from 'react';
import ProductComponent from '../../../../common/product';
import { StyleStillInterestedComponent } from './styled';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 7
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const StillInterestedComponent = ({ dataProducts }) => {
    return (
        <StyleStillInterestedComponent>
            <div>
                <div className="carousel-title">
                    <h3 className='title'>Still interested?</h3>
                </div>
                {/* <div className="keyword">
                    <span>
                        <Link className="link-keyword">Giày superstar</Link>
                    </span>
                    <span>
                        <Link className="link-keyword">Giày nam superstar</Link>
                    </span>
                    <span>
                        <Link className="link-keyword">Giày slip-on superstar</Link>
                    </span>
                </div> */}
            </div>

            <Carousel className='carousel' responsive={responsive}>
                {dataProducts.map(dataProduct => (
                    <div key={dataProduct.id} className="margin-product">
                        <ProductComponent dataProduct={dataProduct} />
                    </div>
                ))}
            </Carousel>

        </StyleStillInterestedComponent>
    );
};

export default StillInterestedComponent;