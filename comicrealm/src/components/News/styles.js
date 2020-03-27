import React from 'react';

const newsPaths = process.env.PUBLIC_URL + '/news/';


const jumbotronStyle = {
  backgroundImage: `url(${newsPaths}bannerBlack.jpg)`,
    backgroundPosition: `bottom`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
};

export default jumbotronStyle;

