import React, { useState, useEffect } from 'react';
import imageService from '../services/images';
import Modal from 'react-modal';
import { trackPromise } from 'react-promise-tracker';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { useDropzone } from 'react-dropzone';
import config from '../config/env';

function AdminImageManage() {

    const [photoModal, setPhotoModal] = useState(false);
    const [showImage, setShowImage] = useState(null);
    const [image, setImage] = useState(null)
    const [allImage, setAllImage] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [uploadImage, setUploadImage] = useState([])

    useEffect(() => {
        async function fetchAllImage() {
            const res = await trackPromise(imageService.getAllImages());
            if (res.status === 200) {
                setAllImage(res.data);
            }
        }
        fetchAllImage();
    }, []);

    const handlePhotoModal = (event) => {
        setImage(event);
        setPhotoModal(true);
    }

    const handlePhotoModalClose = () => {
        setPhotoModal(false);
    }

    const modalHandle = async () => {

        const res = await trackPromise(imageService.deleteImage(image));
        if (res.status === 200) {
            history(0);
        }

        setImage(null);

        setPhotoModal(false);
    }

    const handleEventChange = (event) => {
        setSelectedEvent(event);
        setShowImage(allImage.filter(image => image.workShopName.includes(event.value)));
    }

    const history = useNavigate();

    const events = [
        { value: config.events.PoetrySuperbowl, label: config.events.PoetrySuperbowl },
        { value: config.events.StyleIt, label: config.events.StyleIt},
        { value: config.events.SilkscreenPainting, label: config.events.SilkscreenPainting },
        { value: config.events.JaguaInkTattoos, label: config.events.JaguaInkTattoos },
        { value: config.events.ArtJamming, label: config.events.ArtJamming },
        { value: config.events.WaxStamping, label:  config.events.WaxStamping},
        { value: config.events.JewelleryMaking, label: config.events.JewelleryMaking },
        { value: config.events.JapaneseBookBinding, label: config.events.JapaneseBookBinding },
        { value: config.events.Poetry, label: config.events.Poetry },
        { value: config.events.ContemporaryDance, label: config.events.ContemporaryDance },
        { value: config.events.KpopDance, label: config.events.KpopDance },
        { value: config.events.MalayDance, label: config.events.MalayDance },
        { value: config.events.DancesportAcademy, label: config.events.DancesportAcademy },
        { value: config.events.MiniaturePainting, label: config.events.MiniaturePainting },
        { value: config.events.JazzAndBluesMusic, label: config.events.JazzAndBluesMusic },
        { value: config.events.PopularMusicArrangement, label: config.events.PopularMusicArrangement },
        { value: config.events.TheatreGames, label: config.events.TheatreGames },
    ]

    const handleSubmit = async () => {
        if (uploadImage) {
            for (let i = 0; i < uploadImage.length; i++) {
                // console.log('POSTING', state);
                const newImage = new FormData();
                newImage.append('workShopName', JSON.stringify(selectedEvent.value));
                newImage.append('verified', JSON.stringify(true));
                newImage.append('newImages', uploadImage[i]);
                newImage.append('images', JSON.stringify([]));

                //console.log(uploadImage);
                let res;
                res = await trackPromise(imageService.adminAddImages(newImage));

                if (res.status === 200) {
                    if (i == uploadImage.length - 1) history(0);
                } else {
                    if (res.status === 400) {
                        alert(res.data.validation.body.message);
                    } else if (res.status === 413) {
                        alert('Your photos are too large! Maximum of 3 MB total!');
                    } else if (res.status === 401) {
                        alert(
                            `Error code: ${res.status} unauthorized user, error: ${res.data.error}`
                        );
                    } else {
                        alert(`Error code: ${res.status}, error: ${res.data}`);
                    }
                }
            }
            // console.log('REALLY POSTING NOW');
            // for (var [key, value] of newProduct.entries()) {
            //     console.log(key);
            //     console.log(value);
            // }
        }

    };


    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/jpeg': ['.jpeg', '.png']
        },
        onDrop: (acceptedFiles) => {
            let allFiles = uploadImage;
            acceptedFiles.forEach((file) => allFiles.push(file));

            setUploadImage(
                allFiles.map((file) =>
                    typeof file.name === 'string'
                        ? Object.assign(file, {
                            preview: URL.createObjectURL(file)
                        })
                        : file
                )
            );
            handleSubmit();
        },
    });

    return (
        <>
            <Modal isOpen={photoModal} onRequestClose={handlePhotoModalClose}>
                <div class="w-fit mx-auto translate-y-[50%]" >
                    <div class=" border-none shadow-lg relative pointer-events-auto w-fit bg-white bg-clip-padding rounded-md outline-none p-5" id="modal-box">
                        <p class="font-yerk text-xl text-black">Verify Image</p>
                        <p class='mb-5'>Do you want to delete ?</p>
                        <img class='max-h-56 mb-5' src={image && image.images[0]} />
                        <div class='flex flex-row justify-center gap-2'>
                            <button onClick={handlePhotoModalClose}
                                class="inline-block px-6 py-2.5 bg-gray-600 h-[40px] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                                No
                            </button>
                            <button type="button" onClick={modalHandle}
                                class="inline-block px-6 py-2.5 bg-blue-600 h-[40px] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
            <div class='flex flex-col justify-center items-center border-black border-2 p-2 rounded-xl mb-2 gap-2'>
                <p class='text-2xl font-syne underline decoration-solid'>
                    Image Management
                </p>

                <div class='flex flex-row w-full justify-center items-center'>
                    <Select
                        id="product-category"
                        name="category"
                        required
                        options={events}
                        value={selectedEvent}
                        onChange={handleEventChange}>
                    </Select>
                    {selectedEvent &&

                        <button type='button' {...getRootProps()} class="ml-10 bg-[#F9346C] border-2 lg:border-4 border-black rounded-md px-1 lg:px-10 py-3 lg:py-6 font-syne text-xs lg:text-lg text-white z-20">
                            UPLOAD
                            <input {...getInputProps()} />
                        </button>
                    }
                </div>
                <p class='text-2xl font-syne underline decoration-solid'>
                    Images
                </p>
                <div class='flex flex-row max-w-max overflow-y-auto gap-8 pb-10 min-w-full'>
                    {showImage && showImage.map((image) => {
                        return (
                            <div class='flex flex-col min-w-fit min-h-fit gap-2'>
                                <img class='max-h-44 min-h-full max-w-56 min-w-full' src={image.images[0]} />
                                <div class='flex basis-1/2 justify-center items-center gap-10'>
                                    <button onClick={() => handlePhotoModal(image)}><svg class='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg></button>
                                </div>
                            </div>
                        )

                    })}
                </div>


            </div>
        </>
    )
}

export default AdminImageManage;