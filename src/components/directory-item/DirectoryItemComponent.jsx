import React from "react";
import { useNavigate } from "react-router-dom";
import "./directory-item.styles.jsx";
import { DirectoryBackgroundImage, DirectoryBody, DirectoryItemContainer } from "./directory-item.styles.jsx";

const DirectoryItem = ({category}) => {
  const {title, imageUrl,route} = category;
  const navigate = useNavigate();

 const navigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={navigateHandler}>
      <DirectoryBackgroundImage
       imageUrl={imageUrl}
      />
      <DirectoryBody>
        <h2>{title}</h2>
        <p>shop now</p>
      </DirectoryBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
