import React from 'react';
import "./Menu.css";

export default function MenuItem({ image, name, price, ingredients, soldOut }) {


    console.log('image is : ' + image);
    console.log('name is : ' + name);
    console.log('price is : ' + price);
    console.log('ingredients is : ' + ingredients);
    console.log('soldOut is : ' + soldOut);

    let isSoldOut = "";
    {
        if (soldOut)
            isSoldOut = "Sold Out";

        else
            isSoldOut = "$" + price;
    }
    const imgstyle = {
        height: "15vh",
        width: "15vh"
    }

    return (

        <div className="mb-5">
            <div className="row">
                <div className="col-md-2">
                    <img src={image} style={imgstyle} alt="..." />
                </div>
                <div className="col md-1">
                    <h5 className='pizzaNameStyle'>{name}</h5>
                </div>
                <div className="col-md-2">
                    <p className='ingStyle'>{ingredients}</p>
                </div>
                <div className="col-md-1">
                    <p><small ><b>{isSoldOut}</b></small></p>
                </div>
            </div>

        </div>

    );
}
