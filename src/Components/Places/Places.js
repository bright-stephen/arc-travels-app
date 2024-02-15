import React from 'react';
import Img1 from '../../assets/images/statue.jpg';
import Img2 from '../../assets/images/paris.jpg';
import Img3 from '../../assets/images/bridge.jpg';
import Img4 from '../../assets/images/dubai.jpg';
import Img5 from '../../assets/images/taj-mahal.jpg';
import Img6 from '../../assets/images/maldives.jpg';
import PlacesCard from './PlacesCard';


const placesData = [
    {
        img: Img1,
        title: "Statue of Liberty",
        location: "USA",
        description: "lorem ipsum dolor sit amnet consectetur adipiscing elit",
        price: "700",
        type: "Cultural Relax",
    },
    {
        img: Img2,
        title: "Street of Paris",
        location: "Paris",
        description: "lorem ipsum dolor sit amnet consectetur adipiscing elit",
        price: "640",
        type: "Sight seeing",
    },
    {
        img: Img3,
        title: "London Bridge",
        location: "London",
        description: "lorem ipsum dolor sit amnet consectetur adipiscing elit",
        price: "980",
        type: "Boat tour",
    },
    {
        img: Img4,
        title: "Burj Khalifa",
        location: "Dubia",
        description: "lorem ipsum dolor sit amnet consectetur adipiscing elit",
        price: "230",
        type: "Buisness vacation",
    },
    {
        img: Img5,
        title: "Taj Mahal",
        location: "India",
        description: "lorem ipsum dolor sit amnet consectetur adipiscing elit",
        price: "790",
        type: "Religious vacation",
    },
    {
        img: Img6,
        title: "Blue Beach",
        location: "Cape Town",
        description: "lorem ipsum dolor sit amnet consectetur adipiscing elit",
        price: "170",
        type: "Beach tour",
    },
    
]

function Places({handleOrderPopup,}) {
  return (
    <div className='bg-gray-50 py-10'>
        <div className='container'>
            <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>
                Best Places To Visit
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    placesData.map((item, index) => (
                        <PlacesCard handleOrderPopup={handleOrderPopup} key={index} {...item} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Places