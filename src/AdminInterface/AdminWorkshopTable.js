import React, { useNavigate, useState } from 'react';
import { useTable } from 'react-table'
import "./tableStyle.css";
import workshopService from '../services/workshops';
import FileDownload from 'js-file-download';
import { trackPromise } from 'react-promise-tracker';
import adminService from '../services/admin';
import Modal from 'react-modal';

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


    const handleCloseModal = () => {
        setIsOpenModal(false);
        setEmailWorkshop(null);
    };

    const handleConfirmEmail = (i) => {
        setIsOpenModal(true);
        setEmailWorkshop(rows[i].original);
    }

    const downloadIndivWorkshop = async (i) => {

        const res = await workshopService.downloadIndivWorkshop(rows[i].original._id);
        if (res.status === 200) {
            FileDownload(res.data, `${rows[i].original.name}.csv`);
        } else if (res.status === 401) {
            setAuthParentCallbackFalse();
        } else {
            alert(res.data.error);
        }
    };

    const workshopSendReminder = async () => {
        if (workshopEmail == null) {
            alert('No workshop selected to email!');
        }
        const res = await trackPromise(
            adminService.sendWorkshopReminderEmails(workshopEmail)
        );
        if (res.status === 200) {
            alert('Successfully sent!');
        } else {
            alert(`${res.status}`);
        }
    };
    const [workshopEmail, setEmailWorkshop] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th  {...column.getHeaderProps()}>
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
                                        <button class="block m-auto" onClick={() => downloadIndivWorkshop(i)}>
                                            <p class="underline decoration-solid">download</p>
                                        </button>

                                        <button class="block m-auto" onClick={() => handleConfirmEmail(i)}>
                                            <p class="underline decoration-solid">Send Reminder</p>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>

            <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}>
                <div class="w-full h-full" onClick={handleCloseModal} >
                    <div class="w-fit mx-auto translate-y-[200%]" >
                        <div class=" border-none shadow-lg relative pointer-events-auto w-fit bg-white bg-clip-padding rounded-md outline-none p-5" id="modal-box">
                            <p class="font-yerk text-xl text-black">Send Email?</p>
                            <p class='mb-5'>Are you sure you want to send emails?</p>
                            <div class='flex flex-row justify-end gap-2'>
                                <button onClick={() => handleCloseModal}
                                    class="inline-block px-6 py-2.5 bg-gray-600 h-[40px] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                                    No
                                </button>
                                <button type="button" onClick={workshopSendReminder}
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

function AdminWorkshopTable(props) {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Workshop',
                columns: [
                    {
                        Header: 'Workshop',
                        accessor: 'name',
                    },
                    {
                        Header: 'Sign Ups',
                        accessor: 'maxParticipants',
                        Cell: (value) => <p>{rows[value.row.id].registeredParticipants.length}/{value.value}</p>
                    },
                ],
            },
        ],
    )

    const { rows, setAuthParentCallbackFalse } = props;

    return (
        <div class="flex flex-col items-center justify-center pb-5">
            <Table columns={columns} data={rows ? rows : []} setAuthParentCallbackFalse={setAuthParentCallbackFalse} />
        </div>
    );

}
export default AdminWorkshopTable;