import React, { useState, useEffect } from 'react';
import imageService from '../services/images';
import Modal from 'react-modal';
import { trackPromise } from 'react-promise-tracker';
import { useNavigate } from 'react-router-dom';

function PicrewImageManage() {

    const [photoModal, setPhotoModal] = useState(false);
    const [photoModalContent, setPhotoModalContent] = useState('');
    const [image, setImage] = useState(null);

    const [picrewImage, setPicrewImage] = useState(null);

    useEffect(() => {
        async function fetchAllImage() {
            const res = await trackPromise(imageService.getAllImages());
            const res1 = await trackPromise(imageService.getVerifiedImages());
            console.log(res1);
            if (res.status === 200) {
                setPicrewImage(res.data.filter(image => image.workShopName.includes('Picrew')));
            }
        }
        fetchAllImage();
    }, []);

    const handlePhotoModal = (event, type) => {
        setImage(event);
        if (image != null) {
            if (type === "delete") {
                setPhotoModalContent("Do you want to delete");
            }
            else {
                setPhotoModalContent("Do you want to verify");
            }
            setPhotoModal(true);
        }
    }

    const handlePhotoModalClose = () => {
        setPhotoModal(false);
        setPhotoModalContent('');
    }

    const verfiyImage = async () => {
        image.verified = true;

        const res = await trackPromise(imageService.postVerifyImage(image));
        if (res.status === 200) {
            history(0);
        }

        setImage(null);
    }

    const history = useNavigate();

    return (
        <>
            <Modal isOpen={photoModal} onRequestClose={handlePhotoModalClose}>
                <div class="w-fit mx-auto translate-y-[50%]" >
                    <div class=" border-none shadow-lg relative pointer-events-auto w-fit bg-white bg-clip-padding rounded-md outline-none p-5" id="modal-box">
                        <p class="font-yerk text-xl text-black">Verify Image</p>
                        <p class='mb-5'>{photoModalContent} ?</p>
                        <img class='max-h-56 mb-5' src={image && image.images[0]} />
                        <div class='flex flex-row justify-center gap-2'>
                            <button onClick={handlePhotoModalClose}
                                class="inline-block px-6 py-2.5 bg-gray-600 h-[40px] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                                No
                            </button>
                            <button type="button" onClick={verfiyImage}
                                class="inline-block px-6 py-2.5 bg-blue-600 h-[40px] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
            <div class='flex flex-col justify-center items-center border-black border-2 p-2 rounded-xl mb-2 gap-2'>
                <p class='text-2xl font-syne underline decoration-solid'>
                    Piccrew Image Management
                </p>

                <p class='text-2xl font-syne underline decoration-solid'>
                    Unverified Images
                </p>
                <div class='flex flex-row max-w-max overflow-y-auto gap-8 pb-10 min-w-full'>
                    {picrewImage && picrewImage.map((image) => {
                        if (image.verified === false)

                            return (
                                <div class='flex flex-col min-w-fit min-h-fit gap-2'>
                                    <img class='max-h-44 min-h-full max-w-56 min-w-full' src={image.images[0]} />
                                    <div class='flex basis-1/2 justify-center items-center gap-10'>
                                        <button onClick={() => handlePhotoModal(image, "verify")} ><svg class='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg></button>
                                        <button onClick={() => handlePhotoModal(image, "delete")}><svg class='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg></button>
                                    </div>
                                </div>
                            )

                    })}
                </div>

                <p class='text-2xl font-syne underline decoration-solid'>
                    Verified Images
                </p>
                <div class='flex flex-row max-w-max overflow-y-auto gap-8 pb-10 min-w-full'>
                    {picrewImage && picrewImage.map((image) => {
                        if (image.verified === true)
                            return (
                                <div class='flex flex-col min-w-fit min-h-fit gap-2'>
                                    <img class='max-h-44 min-h-full max-w-56 min-w-full' src={image.images[0]} />
                                    <div class='flex justify-center items-center gap-10'>
                                        <button onClick={() => handlePhotoModal(image, "delete")}><svg class='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg></button>
                                    </div>
                                </div>
                            )

                    })}
                </div>
            </div>
        </>
    )
}

export default PicrewImageManage;