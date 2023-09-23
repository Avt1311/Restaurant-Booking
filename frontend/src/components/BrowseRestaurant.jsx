import React, { useState } from 'react';
import restaurant from './dummydata';
import { Link } from 'react-router-dom';
const names = ["Oudhyana By Taj", "Sahib Cafe By Taj", "L 14 By Renaissance", "Sepia By Renaissance", "Madhurima", "Barbeque Nation", "The Drowning Street", "Bikanervala", "Bagicha - By Dayal Bagh", "The Fancave Cafe", "The Awadh Dastarkhwan", "Baati Chokha F.P.L. ( Taste Of Banaras )", "Shree Rajbhog",
"Royal Cafe", "The Terrace", "Moti Mahal"];

const BrowseRestaurant = () => {

    const [restroList, setRestroList] = useState(restaurant);

    const displayRestaurant = () => {
        return restroList.map((restaurant, index) => {
          return (
            <div className="col-md-3 mb-4">
              <div className="card">
                <img
                  style={{ height: "200px", objectFit: "cover" }}
                  className="card-img-top"
                  src={restaurant.image}
                  alt=""
                />
                <div className="card-body">
                  <h2>{restaurant.name}</h2>
                  <h4>{restaurant.location}</h4>
                  <h5>{restaurant.cuisine}</h5>
                  <h5>{restaurant.price}</h5>
                 
                 <Link className='bookbtn_link' to={'/book/'+index}>Book Table</Link>
                
                </div>
              </div>
            </div>
          );
        });
      };

      const searchRestaurant = (e) => {
        const search = e.target.value;
        setRestroList(
          restaurant.filter((restaurant) => {
            return restaurant.name.toLowerCase().includes(search.toLowerCase());
          })
        );
      };

      const filterName = (e) => {
        const search = e.target.value;
        setRestroList(
          restaurant.filter((restaurant) => {
            return restaurant.name === search;
          })
        );
      };

      return (
        <div className="list-back">
          <header className="bg-body-secondary">
            <div className="container py-5">
              <h1 className="text-center">Restaurant List Page</h1>
              <input
                onChange={searchRestaurant}
                type="text"
                className="form-control form-control-lg"
                placeholder="Search Restaurant Name ..."
              />
            </div>
          </header>
    
          <div className="container-fluid">
            <div className="row mt-4">{displayRestaurant()}</div>
          </div>
        </div>
      );
    };
  


export default BrowseRestaurant;