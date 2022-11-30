import React from 'react';
import Address from '../Address/Address';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import ProductCatagories from '../Products/ProductCatagories/ProductCatagories';
const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <ProductCatagories></ProductCatagories>
            <Address></Address>

        </div>
    );
};

export default Home;