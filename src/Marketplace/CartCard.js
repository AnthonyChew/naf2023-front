import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Quantity from '../utils/Quantity';
import Modal from 'react-modal';
import {
    removeProductFromCart,
    changeQtyInCart,
} from '../reducer/CartReducer';
import "./ModalStyle.css";

export default function CartCard(props) {
    const { product } = props;
    const index = props.index;

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

    const [modalIsOpen, setIsOpen] = useState(false);
    const [subTotal, setSubTotal] = useState('');

    useEffect(() => {
        const subTotal = (price * quantity).toFixed(2);
        setSubTotal(subTotal);

        if (modalIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [price, quantity, modalIsOpen]);

    const ref = useRef();

    const setQuantity = (type) => {
        if (type === 'DECREASE' && product.quantity === 1) {
            openModal();
        } else {
            dispatch(changeQtyInCart(product, type, stock));
        }
    };

    const removeItem = () => {
        dispatch(removeProductFromCart(_id, size, colour));
    };

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    var subtitle = "test"

    useEffect(() => {
        Modal.setAppElement('body');
    }, [])

    
    const [dialogIsOpen, setDialogOpen] = useState(false);
    return (
        <div class="flex flex-row">
            <div class="flex flex-1 items-center justify-center">
                <img class="p-5" src={image}></img>
            </div>
            <div class="flex flex-col flex-1 justify-center gap-1">
                <p class="text-3xl font-syne">Product</p>
                <p class="text-lg font-syne">{name}</p>
                <button class="text-lg text-start decoration-solid underline-offset-1" onClick={openModal}>
                    <p class="font-syne underline underline-offset-4">Remove</p>
                </button>

                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    closeTimeoutMS={200}
                    onClick={closeModal}
                >
                    <div class="w-full h-full" onClick={closeModal}>
                        <div class="w-fit top-1/2 left-1/2 right-auto bottom-auto -translate-x-1/2 -translate-y-1/2 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div class="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                <h5 class="text-xl font-medium leading-normal text-gray-800" >
                                    Remove product from cart?
                                </h5>
                            </div>
                            <div class="modal-body relative p-4">
                                <p>Are you sure you want to remove <br />"{quantity}x {name}
                                    {
                                        attribute1.length !== 0 ? `with ${attribute1}: ${colour}` : ''
                                    }
                                    {
                                        attribute2.length !== 0 ? ` and ${attribute2}: ${size}` : ''
                                    }"</p>
                            </div>
                            <div class="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button type="button" onClick={removeItem}
                                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
                                    data-bs-dismiss="modal">
                                    Yes
                                </button>
                                <button type="button"
                                    class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                    onClick={closeModal}>
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>

            <div class="flex flex-col flex-1 justify-center">
                <Quantity quantity={quantity} changeRedux={(type) => setQuantity(type)} removeItem={removeItem}>{quantity}</Quantity>
            </div>

            <div class="flex flex-col flex-1 justify-center">
                <p class="text-center text-2xl font-syne">${subTotal}</p>
            </div>


        </div>
    );
}
