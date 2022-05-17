import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import imageService from '../../../../../../../services/admin/image.service';
import { StyleElementCategoryComponent } from './styled';

const ElementCategoryComponent = ({ category }) => {
    const [image, setImage] = useState([]);
    const history = useHistory();

    const getImage = () => {
        imageService.getImageByIds(
            [category.image],
            (data) => {
                setImage(data);
            },
            () => { }
        )
    }
    const handleClickCategory = () => {
        history.push(`/product?category=${category?.id}`);
    }

    useEffect(() => {
        getImage();
    }, [])
    return (
        <StyleElementCategoryComponent>
            <div className="category" onClick={handleClickCategory}>
                <img
                    className="category-image"
                    src={image[0]?.src}
                    alt="category"
                />
                <div
                    className="category-name"
                >
                    {category?.name}
                </div>
            </div>
        </StyleElementCategoryComponent>
    );
};

export default ElementCategoryComponent;