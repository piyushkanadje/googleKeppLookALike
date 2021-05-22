import React from 'react';


const today = new Date();
const getYear = today.getFullYear();

function  Footer(){
    return <footer>@copyright {getYear}</footer>;
}
export default Footer;