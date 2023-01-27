import React, { useState, useEffect } from 'react';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import Select from 'react-select';
import { useTable } from 'react-table'
import Modal from 'react-modal';
import adminService from '../services/admin';
import { trackPromise } from 'react-promise-tracker';
import { useNavigate } from 'react-router-dom';

function Table({ columns, data, setAuthParentCallbackFalse , workshopID}) {
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

  const history = useNavigate();
  const [user, setUser] = useState(null);

  const [openVerify, setOpenVerify] = useState(false);

  const handleOpenModal = (i) => {
    setOpenVerify(true);

    setUser(rows[i].original);
  };

  const handleCloseModal = () => {
    setOpenVerify(false);

    setUser(null);
  };

  async function verifyUserWorkshop()
  {
    
    const formData = {'studentId': user.studentId};

    const res = await trackPromise(adminService.verifyWorkshop(workshopID , formData));
    if (res.status === 200) {
        history(0);
    }
    else{
      alert(res.status);
    }
  }

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
              <th >Order control</th>
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
                    <button class="block m-auto" onClick={() => handleOpenModal(i)}>
                      <p class="underline decoration-solid">Verfiy</p>
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
              <p class='mb-5'>Do you want to verify {user && user.matricNumber} ?</p>
              <div class='flex flex-row justify-end gap-2'>
                <button onClick={handleCloseModal}
                  class="inline-block px-6 py-2.5 bg-gray-600 h-[40px] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                  No
                </button>
                <button type="button" onClick={verifyUserWorkshop}
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

export default function VerifyWorkshops(props) {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Workshop',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Email Address',
            accessor: 'emailAddress'
          },
          {
            Header: 'Status',
            accessor: 'verified',
            Cell: (value) =>  <p>{value.value !== undefined && value.value.toString()}</p>
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

  const { workshops, setAuthParentCallbackFalse } = props;

  const [workshopVerify, setWorkshopVerify] = useState(null);

  const handleChange = (event) => {
    console.log(event);
    const workshop = workshops.find(
      (workshop) => workshop._id === event.value
    );
    setWorkshopVerify(workshop);
  };

  const [workshopOptions, setWorkshopOptions] = useState([]);

  useEffect(() => {
    function generateWorkShopOption() {
      let options = [];
      {
        workshops &&
          workshops.map((workshop) => (
            options.push({ value: workshop._id, label: workshop.name })
          ))
      }

      return options;
    }
    setWorkshopOptions(generateWorkShopOption());
  }, [workshops]);

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

  return (
    <div class='w-full'>
      <LoadingSpinnerComponent />
      <p class='text-2xl font-syne underline decoration-solid mb-2'>Workshop</p>
      <Select
        class="w-full"
        options={workshopOptions}
        onChange={handleChange}
      >
      </Select>

      <div class="flex flex-col items-center justify-center pb-5 mt-5">
        <Table columns={columns} workshopID={workshopVerify && workshopVerify._id} data={workshopVerify ? workshopVerify.registeredParticipants ? workshopVerify.registeredParticipants : [] : []} setAuthParentCallbackFalse={setAuthParentCallbackFalse}></Table>
        <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}>
          <div class="w-full h-full" onClick={handleCloseModal} >
            <div class="w-fit h-full ml-auto mr-auto border-none shadow-lg relative pointer-events-auto bg-white bg-clip-padding rounded-md outline-none p-5" id="modal-box">
              <img className='w-full h-full' src={image} />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
