import React, { useState, useEffect,useRef } from 'react';
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

    const ref = useRef();

    const setQuantity = (type) => {
        if (type === 'DECREASE' && product.quantity === 1) {
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
                <button class="text-lg text-start decoration-solid underline-offset-1" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                    <p class="font-syne underline underline-offset-4">Remove</p>
                </button>

                <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                    <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                        <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                                    Remove product from cart?
                                </h5>
                                <button type="button"
                                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body relative p-4">
                                <p>Are you sure you want to remove <br/>"{quantity}x {name} 
                                    {
                                        attribute1.length !== 0 ? `with ${attribute1}: ${colour}` : ''
                                    }
                                    {
                                        attribute2.length !== 0 ? ` and ${attribute2}: ${size}` : ''
                                    }"</p>
                            </div>
                            <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                                                    <button type="button" onClick={removeItem}
                                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out " 
                                    data-bs-dismiss="modal">
                                    Yes
                                </button>
                                <button type="button"
                                    class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                    data-bs-dismiss="modal">
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col flex-1 justify-center">
                <Quantity quantity={quantity} changeRedux={(type) => setQuantity(type)} removeItem = {removeItem}>{quantity}</Quantity>
            </div>

            <div class="flex flex-col flex-1 justify-center">
                <p class="text-center text-2xl font-syne">${(price * quantity).toFixed(2)}</p>
            </div>


        </div>
    );
}
