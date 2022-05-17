import React from 'react';
import { StyleCategoryComponent } from './styled';
import ElementCategoryComponent from './views/category';

const CategoryComponent = ({ categories }) => {
    return (
        <StyleCategoryComponent>
            <div className="category-title">Danh mục sản phẩm</div>
            {categories.map(category => (
                <ElementCategoryComponent key={category?.id} category={category} />
            ))}
        </StyleCategoryComponent>
    );
};

export default CategoryComponent;