import React, { useState, useEffect } from 'react';
import { useTable, useSortBy, usePagination, useRowSelect } from 'react-table'
import { useNavigate } from 'react-router-dom';
import "./tableStyle.css";
import productService from '../services/products';
import Modal from 'react-modal';
import AddProduct from './AddProduct';

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds },
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  const history = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [editProps, setEditProps] = useState(null);

  useEffect(() => {
    Modal.setAppElement('body');
  }, [])

  async function deleteProduct() {
    for (let i = 0; i < selectedFlatRows.length; i++) {
      let res = await productService.deleteProduct(selectedFlatRows[i].original._id);
      if (res.status !== 200) {
        if (res.data.error === 'Schema does not match') {
          alert(res.data.validation.body.message);
        } else {
          alert(res.data.error);
        }
      }
    }

    history(0);
  }

  function editProduct(i) {
    setEditIsOpen(true);
    //console.log(editProps);
    setEditProps(page[i].original);
  }

  function handleClose() {
    setEditIsOpen(false);
    setEditProps(null);
  }

  useEffect(() => {
    if (editIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [editIsOpen]);

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
              ))
              }
              <th>Product edit</th>
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

                  <td> <button class="block m-auto" onClick={() => editProduct(i)}><p class="underline decoration-solid">edit</p>  </button> </td>
                </tr>
              )
            }
          )}
        </tbody>
      </table>
      <Modal isOpen={editIsOpen} onRequestClose={() => handleClose()}>
        <div class="w-full h-full" >
          {editProps && < AddProduct
            //callback
            pdtName={editProps.name}
            pdtDesc={editProps.description}
            pdtCat={editProps.category}
            pdtPrice={editProps.price}
            pdtAtt1={editProps.attribute1}
            pdtAtt1Options={editProps.colours}
            pdtAtt2={editProps.attribute2}
            pdtAtt2Options={editProps.sizes}
            pdtCollect={editProps.canCollect}
            pdtDeliver={editProps.canDeliver}
            pdtQuantity={editProps.quantity}
            pdtPreorder={editProps.isPreOrder}
            pdtLeadtime={editProps.leadTime}
            pdtImages={editProps.images}
            _id={editProps._id}
            parentCallback={() => handleClose()}
            type="edit"
          />}

        </div>
      </Modal>
      <div class='flex justify-center items-center w-full'>
        <div class='flex flex-row gap-5 mt-5' >
          {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '} */}
          {
            <button class='flex flex-col justify-center items-center' onClick={() => previousPage()} disabled={!canPreviousPage}>
              <svg xmlns="http://www.w3.org/2000/svg" fill-opacity={canPreviousPage ? "1" : "0.2"} class='w-12 h-12 ' viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
            </button>
          }

          {/* <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '} */}
          <span class='text-2xl font-syne self-center'>
            Page
            <strong class='text-2xl font-syne'>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <span class='text-2xl font-syne self-center'>
            | Go to page:
          </span>
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>

          {
            <button class='flex flex-col justify-center items-center' onClick={() => nextPage()} disabled={!canNextPage}>
              <svg xmlns="http://www.w3.org/2000/svg" fill-opacity={canNextPage ? "1" : "0.2"} class='w-12 h-12' viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </button>
          }
        </div>
        <pre>
          <code>
            {selectedFlatRows.length > 0 &&
              <>
                <button
                  class="w-fit text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={() => setIsOpen(true)}>

                  <p class="flex-1 text-2xl font-syne text-center">  Delete </p>
                </button>

                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setIsOpen(false)}>
                  <div class="w-full h-full" onClick={() => setIsOpen(false)}>
                    <div class="w-fit top-1/2 left-1/2 right-auto bottom-auto -translate-x-1/2 -translate-y-1/2 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                      <div class="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 class="text-xl font-medium leading-normal text-gray-800" >
                          Remove product?
                        </h5>
                      </div>
                      <div class="modal-body relative p-4">
                        <p>Are you sure you want to remove</p>
                        {selectedFlatRows.map(
                          d => {
                            return (<p> {d.original.name}</p>)
                          }
                        )}
                      </div>
                      <div class="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <button type="button" onClick={() => deleteProduct()}
                          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                          Yes
                        </button>
                        <button type="button"
                          class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                          onClick={() => setIsOpen(false)}>
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </Modal>

              </>}
          </code>
        </pre>
      </div>
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
            Cell: (value) => <img class='max-w-xs max-h-48' src={value.value[0]} />
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
            Cell: (value) => <p>${value.value}</p>
          },
          {
            Header: 'Attribute 1',
            accessor: 'colours',
            Cell: (value) => {
              return (
                value.value.map((attribute, index) => (
                  <>
                    {
                      rows[value.row.id].quantity[index].length > 1 ?
                        rows[value.row.id].quantity[index].map((att1, attIndex) =>
                          <p>Attribute {attribute} {rows[value.row.id].sizes[attIndex]} : Quantity {rows[value.row.id].quantity[index][attIndex] > 99999 ? 'Unlimited' : rows[value.row.id].quantity[index][attIndex]}</p>)
                        :
                        <p>Attribute {attribute} : Quantity {rows[value.row.id].quantity[index] > 99999 ? 'Unlimited' : rows[value.row.id].quantity[index]}</p>
                    }
                    <br />
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
    <div class="flex flex-col items-center justify-center pb-5">
      <Table columns={columns} data={rows} />
    </div>
  );
}

export default ProductTable;
