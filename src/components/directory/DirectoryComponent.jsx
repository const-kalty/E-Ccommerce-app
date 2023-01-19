import React from 'react'
import './directory.styles.scss'
import Categorycatalogue from '../category-item/Category-catalogue';
import CategoryItem from '../category-item/Category-item-component';

const DirectoryComponent = () => {
    <Categorycatalogue/>
  return (
    <div className="directory-container">
      {Categorycatalogue.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default DirectoryComponent