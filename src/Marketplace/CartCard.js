import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Quantity from '../utils/Quantity';
import RoundingOff from '../utils/RoundingOff';
import {
    removeProductFromCart,
    changeQtyInCart,
} from '../reducer/CartReducer';

export default function CartCard(props) {
    const { product } = props;


    const {
        _id,
        quantity,
        name,
        size,
        colour,
        image,
        price,
        attribute1,
        attribute2,
    } = product;

    const stock = props.stock;
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [subTotal, setSubTotal] = useState('');

    useEffect(() => {
        const subTotal = (price * quantity).toFixed(2);
        setSubTotal(subTotal);
    }, [price, quantity]);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleDialogResult = (continueAction) => {
        setOpen(false);
        if (continueAction) {
            removeItem();
        }
    };

    const setQuantity = (type) => {
        if (type === 'DECREASE' && product.quantity === 1) {
            handleClickOpen(); //open confirmation dialog
        } else {
            dispatch(changeQtyInCart(product, type, stock));
        }
    };

    const removeItem = () => {
        dispatch(removeProductFromCart(_id, size, colour));
    };
    return (

        <div class="flex flex-row">
            <div class="flex flex-1 items-center justify-center">
                <img class="p-5" src={image}></img>
            </div>

            <div class="flex flex-col flex-1 justify-center gap-1">
                <p class="text-3xl font-syne">Product</p>
                <p class="text-lg font-syne">{name}</p>
                <button class="text-lg text-start decoration-solid underline-offset-1" onClick={handleClickOpen}>
                    <p class="font-syne underline underline-offset-4">Remove</p>
                </button>

                {open && (<p>Click one more time to remove</p>)}
            </div>

            <div class="flex flex-col flex-1 justify-center">
                <Quantity quantity={quantity} changeRedux={(type) => setQuantity(type)}>{quantity}</Quantity>
            </div>

            <div class="flex flex-col flex-1 justify-center">
                <p class="text-center text-2xl font-syne">${ RoundingOff(price * quantity)}</p>
            </div>


        </div>
    );
}
