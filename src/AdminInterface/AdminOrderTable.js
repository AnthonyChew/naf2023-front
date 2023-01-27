import React, { useState } from 'react';
import { useTable } from 'react-table'
import "./tableStyle.css";
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from 'react-promise-tracker';
import adminService from '../services/admin';
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import orderService from '../services/orders';

function Table({ columns, data, setAuthParentCallbackFalse }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
    )

    const [openDelete, setOpenDelete] = useState(false);
    const [openVerify, setOpenVerify] = useState(false);

    const [order, setOrder] = useState(null);

    const handleOpenModal = (i, type) => {
        if (type === "verify") setOpenVerify(true);
        if (type === "delete") setOpenDelete(true);

        setOrder(rows[i].original);
    };

    const handleCloseModal = () => {
        setOpenVerify(false);
        setOpenDelete(false);

        setOrder(null);
    };

    const verifyOrder = async () => {
        console.log(order);
        if (order == null) {
            alert('No order selected to be verified!');
        } else {
            const res = await trackPromise(adminService.verifyOrder(order._id));
            // console.log(auth);
            if (res.status === 200) {
                history(0);
            } else if (res.status === 401) {
                setAuthParentCallbackFalse();
            } else {
                alert(res.data.error);
            }
        }
    };

    const deleteOrder = async () => {
        if (order == null) {
            alert('No order selected to be deleted!');
        } else {
            const res = await orderService.deleteOrder(order);
            if (res.status === 200) {
                history(0);
            } else if (res.status === 401) {
                setAuthParentCallbackFalse();
            } else {
                alert(`${res.status}, ${JSON.stringify(res.data)}`);
            }
        }
    };

    const history = useNavigate();

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))
                            }
                            <th>Order control</th>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(
                        (row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        )
                                    }
                                    )}

                                    <td>
                                        <button class="block m-auto" onClick={() => handleOpenModal(i, "verify")}>
                                            <p class="underline decoration-solid">Verfiy</p>
                                        </button>
                                        <button class="block m-auto" onClick={() => handleOpenModal(i, "delete")}>
                                            <p class="underline decoration-solid">Delete</p>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>

            <Modal isOpen={openVerify} onRequestClose={handleCloseModal}>
                <div class="w-full h-full" onClick={handleCloseModal} >
                    <div class="w-fit mx-auto translate-y-[200%]" >
                        <div class=" border-none shadow-lg relative pointer-events-auto w-fit bg-white bg-clip-padding rounded-md outline-none p-5" id="modal-box">
                            <p class="font-yerk text-xl text-black">Verified Order</p>
                            <p class='mb-5'>Do you want to verify {order && order.orderNumber} ?</p>
                            <div class='flex flex-row justify-end gap-2'>
                                <button onClick={handleCloseModal}
                                    class="inline-block px-6 py-2.5 bg-gray-600 h-[40px] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                                    No
                                </button>
                                <button type="button" onClick={verifyOrder}
                                    class="inline-block px-6 py-2.5 bg-blue-600 h-[40px] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                                    Yes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal isOpen={openDelete} onRequestClose={handleCloseModal}>
                <div class="w-full h-full" onClick={handleCloseModal} >
                    <div class="w-fit mx-auto translate-y-[200%]" >
                        <div class=" border-none shadow-lg relative pointer-events-auto w-fit bg-white bg-clip-padding rounded-md outline-none p-5" id="modal-box">
                            <p class="font-yerk text-xl text-black">Delete Order</p>
                            <p class='mb-5'>Do you want to delete {order && order.orderNumber} ?</p>
                            <div class='flex flex-row justify-end gap-2'>
                                <button onClick={handleCloseModal}
                                    class="inline-block px-6 py-2.5 bg-gray-600 h-[40px] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                                    No
                                </button>
                                <button type="button" onClick={deleteOrder}
                                    class="inline-block px-6 py-2.5 bg-blue-600 h-[40px] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                                    Yes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

function AdminOrderTable(props) {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Order',
                columns: [
                    {
                        Header: 'Order Number',
                        accessor: 'orderNumber',
                    },
                    {
                        Header: 'Buyer',
                        accessor: 'name',
                    },
                    {
                        Header: 'Email Address',
                        accessor: 'emailAddress',
                    },
                    {
                        Header: 'Contact Number',
                        accessor: 'contactNumber',
                    },
                    {
                        Header: 'Total',
                        accessor: 'total',
                    },
                    {
                        Header: 'Date Time',
                        accessor: 'datetime',
                    },
                    {
                        Header: 'Images',
                        accessor: 'images',
                        Cell: (value) => <img class='max-w-xs max-h-48' onClick={() => handleImageClick(value.value !== undefined && value.value[0])} src={value.value !== undefined && value.value[0]} />
                    },
                ],
            },
        ],
    )

    const [image, setImage] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);

    function handleImageClick(value) {
        setImage(value);
        setIsOpenModal(true);
    }

    const handleCloseModal = () => {
        setIsOpenModal(false);
        setImage(null);
    };

    const { rows, setAuthParentCallbackFalse } = props;
    return (
        <div class="flex flex-col items-center justify-center pb-5">
            <Table columns={columns} data={rows ? rows : []} setAuthParentCallbackFalse={setAuthParentCallbackFalse} />
            <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}>
                <div class="w-full h-full" onClick={handleCloseModal} >
                    <div class="w-fit h-full ml-auto mr-auto border-none shadow-lg relative pointer-events-auto bg-white bg-clip-padding rounded-md outline-none p-5" id="modal-box">
                        <img className='w-full h-full' src={image} />
                    </div>
                </div>
            </Modal>

        </div>
    );

}
export default AdminOrderTable;