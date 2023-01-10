import React, { useState, useEffect } from 'react';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import Select from 'react-select';
import { useTable } from 'react-table'

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
                </tr>
              )
            }
          )}
        </tbody>
      </table>
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
        <Table columns={columns} data={workshopVerify ? workshopVerify.registeredParticipants ? workshopVerify.registeredParticipants : [] : []} setAuthParentCallbackFalse={setAuthParentCallbackFalse}></Table>
      </div>
    </div>
  );
}
