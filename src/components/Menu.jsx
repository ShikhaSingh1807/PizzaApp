import React from 'react';
import "./Menu.css";
import MenuItem from './MenuItem';

export default function Menu({ data }) {

    return (
        <div className="menu text-center">
            <h1 className=' comp pt-4'>FAST REACT PIZZA CO .</h1>
            <h3 className=" fw-bold pt-3" >Our Menus</h3>
            <h4 className="fst-italic pt-3 logoline ml-2  mb-4">Our Authentic Menu.Select Your Favourite Pizza from Our Menu</h4>
            <div className="row">
                <div className='col-md-6'>
                    {
                        data.map((pizza, index) => {
                            if (index % 2 === 0)
                                return (
                                    <MenuItem image={pizza.photoName}
                                        name={pizza.name}
                                        price={pizza.price}
                                        ingredients={pizza.ingredients}
                                        soldOut={pizza.soldOut}
                                    />
                                );
                        })


                    }
                </div>
                <div className='col-md-6'>
                    {
                        data.map((pizza, index) => {
                            if (index % 2 !== 0)
                                return (
                                    <MenuItem image={pizza.photoName}
                                        name={pizza.name}
                                        price={pizza.price}
                                        ingredients={pizza.ingredients}
                                        soldOut={pizza.soldOut}
                                    />
                                );
                        })
                    }

                </div>
            </div>
        </div>
    )
}
