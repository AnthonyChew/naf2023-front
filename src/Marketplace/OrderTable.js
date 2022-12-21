import React from 'react';
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

function OrderTable(props) {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Order History',
        columns: [
          {
            Header: 'Order Number',
            accessor: 'orderNumber',
          },
          {
            Header: 'Items',
            accessor: 'purchases',
          },
          {
            Header: 'Verified',
            accessor: 'verified',
          }
        ],
      },
    ],
  )

  const { data } = props;

  function formatData(data) {
    let convertedData = [];
    data.forEach((element) => {
      let string = [];
      element.purchases.forEach((purchase) => {
        string.push( purchase.productName + " x" + purchase.totalQuantity)
        string.push(<br/>)
      });
      convertedData.push({'orderNumber':element.orderNumber ,'verified':element.verified.toString(),'purchases':string });
    });

    console.log(convertedData)
    return convertedData;
  }


  return (
    <div class="flex items-center justify-center pb-5">
      <Table columns={columns} data={formatData(data)} />
    </div>
  );
}

export default OrderTable;
