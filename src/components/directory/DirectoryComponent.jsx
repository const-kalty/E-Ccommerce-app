import React from "react";
import "./directory.styles.jsx";
import CategoryCatalogue from "../directory-item/Category-catalogue.";
import DirectoryItem from "../directory-item/DirectoryItemComponent";
import { DirectoryContainer } from "./directory.styles.jsx";

const DirectoryComponent = () => {
  return (
    <DirectoryContainer>
      {CategoryCatalogue.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default DirectoryComponent;
