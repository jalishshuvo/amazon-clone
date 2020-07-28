import React from 'react';
import Product from "./Product";
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
        
        {/* product ID title, price, rating, image */}
            <div className="home_row">
                <Product
                id="B07KFMTWVF"
                title ="Apple iPhone 11 Pro Max"
                price ={799}
                rating ={5}
                image ="https://m.media-amazon.com/images/I/81j2j9x-KWL.jpg"
                />
                {/* Product */} 
                <Product
                id="B07KFMTWVF"
                title ="Apple iPhone XS Max (512GB, Silver) [Carrier Locked] + Carrier Subscription [Cricket Wireless] ($10/month Amazon gift card credit)"
                price ={799}
                rating ={5}
                image ="https://images-na.ssl-images-amazon.com/images/I/71isxv6Wd-L._AC_SX679_.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                id="B07KFMTWVF"
                title ="Apple iPhone XS Max (512GB, Silver) "
                price ={799}
                rating ={5}
                image ="https://m.media-amazon.com/images/I/81j2j9x-KWL.jpg"
                />
                {/* Product */} 
                <Product
                id="B07KFMTWVF"
                title ="Apple iPhone XS Max (512GB, Silver) [Carrier Locked] + Carrier Subscription [Cricket Wireless] ($10/month Amazon gift card credit)"
                price ={799}
                rating ={5}
                image ="https://images-na.ssl-images-amazon.com/images/I/71isxv6Wd-L._AC_SX679_.jpg"
                />
                <Product
                id="B07KFMTWVF"
                title ="Apple iPhone XS Max (512GB, Silver) [Carrier Locked] + Carrier Subscription [Cricket Wireless] ($10/month Amazon gift card credit)"
                price ={799}
                rating ={5}
                image ="https://images-na.ssl-images-amazon.com/images/I/71isxv6Wd-L._AC_SX679_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                id="B07KFMTWVF"
                title ="Newest Flagship Sony Play Station 4 1TB HDD Only on Playstation PS4 Console Slim Bundle"
                price ={799}
                rating ={5}
                image ="https://images-na.ssl-images-amazon.com/images/I/71ZrwxeXnXL._AC_SX522_.jpg"
                />
            </div>
       
        </div>
    )
}

export default Home
