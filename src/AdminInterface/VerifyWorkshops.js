import React, { useState } from 'react';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import Select from 'react-select';
import { useTable } from 'react-table'

function Table({ columns, data, setAuthParentCallbackFalse }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
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
                <th>
                  {column.render('Header')}
                </th>
              ))
              }
              <th>Order control</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(
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
    const workshop = workshops.find(
      (workshop) => workshop.name === event.target.value
    );
    setWorkshopVerify(workshop);
  };

  return (
    <>
      <LoadingSpinnerComponent />
      <p>Workshop</p>
      <Select
        value={workshopVerify && workshopVerify.name}
        onChange={handleChange}
      >
        <option aria-label="None" value="" />
        {workshops &&
          workshops.map((workshop) => (
            <option key={workshop._id} value={workshop.name}>
              {workshop.name}
            </option>
          ))}
      </Select>
      
      <div class="flex flex-col items-center justify-center pb-5">
            <Table columns={columns} data={workshopVerify && workshopVerify.registeredParticipants} setAuthParentCallbackFalse={setAuthParentCallbackFalse} />
        </div>
    </>
  );
}
