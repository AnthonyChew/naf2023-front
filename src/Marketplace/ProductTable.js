import React, { cloneElement } from 'react';
import { useTable, useSortBy } from 'react-table'
import "./tableStyle.css";

function Table({ columns, data }) {
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
    useSortBy
  )

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20)

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {

                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )
            }
          )}
        </tbody>
      </table>
    </>
  )
}

function ProductTable(props) {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Product',
        columns: [
          {
            Header: 'Images',
            accessor: 'images',
            Cell: (value) => <img src={value.value[0]} />
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Category',
            accessor: 'category',
          },
          {
            Header: 'Price',
            accessor: 'price',
          },
          {
            Header: 'Attribute 1',
            accessor: 'colours',
            Cell: (value) => {
              console.log();
              //const currentDataIndex =  rows.filter((qty, index) => index !== indexOfColor);
              return (
                value.value.map((attribute,index) => (
                  <>
                    <p>Attribute {attribute} : Quantity {rows[value.row.id].quantity[index] > 99999 ? 'Unlimited' : rows[value.row.id].quantity[index]}</p>
                  </>
                )))
            }
          },
          {
            Header: 'Quantity Sold',
            accessor: 'quantitySold',
          },
          {
            Header: 'Total Earned',
            accessor: 'totalEarned',
          },
        ],
      },
    ],
  )

  const { rows } = props;

  return (
    <div class="flex items-center justify-center pb-5">
      <Table columns={columns} data={rows} />
    </div>
  );
}

export default ProductTable;
