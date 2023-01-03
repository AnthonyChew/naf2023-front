import React, { useState, useEffect } from 'react';

import productService from '../services/products';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from 'react-promise-tracker';
import Input from '../utils/Input';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { set } from 'date-fns';

export default function AddProduct(props) {
  const {
    _id,
    parentCallback,
    pdtName,
    pdtDesc,
    pdtPrice,
    pdtCat,
    pdtQuantity,
    pdtAtt1,
    pdtAtt1Options,
    pdtAtt2,
    pdtAtt2Options,
    pdtCollect,
    pdtDeliver,
    pdtPreorder,
    pdtLeadtime,
    pdtImages,
    type,
  } = props;
  const history = useNavigate();
  const [state, setState] = useState({
    name: pdtName,
    description: typeof pdtDesc !== 'undefined' ? pdtDesc : '',
    price: pdtPrice,
    attribute1: typeof pdtAtt1 !== 'undefined' ? pdtAtt1 : '',
    attribute2: typeof pdtAtt2 !== 'undefined' ? pdtAtt2 : '',
    addAttribute1:
      typeof pdtAtt1 !== 'undefined' ? pdtAtt1.length !== 0 : false,
    addAttribute2:
      typeof pdtAtt2 !== 'undefined' ? pdtAtt2.length !== 0 : false,
    canDeliver: typeof pdtDeliver !== 'undefined' ? pdtDeliver : false,
    canCollect: typeof pdtCollect !== 'undefined' ? pdtCollect : false,
    category: pdtCat,
    isPreOrder: pdtPreorder,
    leadTime: pdtLeadtime - 2, //account for minimum 2 day leadtime
    // quantity: 0,
  });

  useEffect(() => {

    setCatChoice({label: pdtCat, value: pdtCat});

    if (state.addAttribute1) {
      let att1Array = [];
      pdtAtt1Options.forEach(att1 => att1Array.push({ label: att1, value: att1 }));
      setAttb1Value(att1Array);
    }


    if (state.addAttribute2) {
      let att2Array = [];
      pdtAtt2Options.forEach(att2 => att2Array.push({ label: att2, value: att2 }));
      setAttb2Value(att2Array);
    }
  }, []);

  const [helperText, setHelperText] = useState('');
  const [quantity, setQuantity] = useState(
    typeof pdtQuantity !== 'undefined' ? pdtQuantity : [[]]
  );
  const { promiseInProgress } = usePromiseTracker();
  
  const [catChoice, setCatChoice] = useState(null);

  const [attb1InputValue, setAttb1Input] = useState('');
  const [attb1Value, setAttb1Value] = useState([]);

  //ATTRIBUTE 1 = SIZES, ATTRIBUTE2 = COLOURS
  //INPUT POSSIBLE COLOURS (ROW)
  const [attribute1options, setAttribute1] = useState(
    state.addAttribute1 ? pdtAtt1Options : []
  );

  const handleAddAttribute1Chip = (event) => {
    if (!attb1InputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setAttb1Value((prev) => [...prev, { label: attb1InputValue, value: attb1InputValue }]);
        setAttribute1((attribute1options) => [...attribute1options, attb1InputValue]);
        if (attribute1options.length > 0) {
          setQuantity((quantity) => [...quantity, []]);
        }
        setAttb1Input('');
        event.preventDefault();
    }
  };

  const handleDeleteAttribute1Chip = (event, type) => {

    if (type.action === 'remove-value') {
      const indexOfColor = attribute1options.indexOf(type.removedValue.value);
      //FIX THIS
      setQuantity(quantity.filter((qty, index) => index !== indexOfColor));
      if (attribute1options.length === 1) {
        setQuantity([[]]);
      }
      setAttribute1(attribute1options.filter((colour) => colour !== type.removedValue.value));
      setAttb1Value(attb1Value.filter((colour) => colour.value !== type.removedValue.value));
      console.log(attb1Value.filter((colour) => colour.value !== type.removedValue.value));
    }
    else if (type.action === 'clear') {
      handleClearAttribute1Chips();
    }
    else {
      console.log("HItttt");
      setAttb1Value(event.value);
    }
  };

  const handleClearAttribute1Chips = () => {

    setAttribute1([]);
    setAttb1Value([]);
    setQuantity([[]]);
  }

  //INPUT POSSIBLE COLOURS (ROW)
  const [attribute2options, setAttribute2] = useState(
    state.addAttribute2 ? pdtAtt2Options : []
  );
  const [attb2InputValue, setAttb2Input] = React.useState('');
  const [attb2Value, setAttb2Value] = React.useState([]);

  const handleAddAttribute2Chip = (event) => {
    if (!attb2InputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setAttb2Value((prev) => [...prev, { label: attb2InputValue, value: attb2InputValue }]);
        setAttribute2((attribute2options) => [...attribute2options, attb2InputValue]);
        setAttb2Input('');
        event.preventDefault();
    }
  };

  const handleDeleteAttribute2Chip = (event, type) => {

    if (type.action === 'remove-value') {
      const indexOfSize = attribute2options.indexOf(type.removedValue.value);
      //FIX THIS
      const newQuantity = quantity.map((colourRow) => colourRow.filter((rowElem, index) => index !== indexOfSize));
      setQuantity(newQuantity);

      setAttribute2(attribute2options.filter((colour) => colour !== type.removedValue.value));
      setAttb2Value(attb2Value.filter((colour) => colour.value !== type.removedValue.value));
    }
    else if (type.action === 'clear') {
      handleClearAttribute2Chips();
    }
    else {
      setAttb2Value(event.value);
    }
  };

  const handleClearAttribute2Chips = () => {
    let newQuantity = [...quantity];
    for (let option of attribute2options) {
      const indexOfSize = attribute2options.indexOf(option);
      newQuantity = newQuantity.map((colourRow) =>
        colourRow.filter((rowElem, index) => index !== indexOfSize)
      );
    }

    setAttribute2([]);
    setAttb2Value([]);
    setQuantity(newQuantity);
  }

  const tableCol =
    attribute2options.length === 0
      ? [''].concat(attribute2options)
      : attribute2options;

  const tableRow =
    attribute1options.length === 0
      ? [].concat(attribute1options)
      : attribute1options;

  //PRODUCT OPTION CHECKBOXES
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });

    if (event.target.checked === false) {
      switch (event.target.name) {
        case 'addAttribute1':
          setState({
            ...state,
            attribute1: '',
            [event.target.name]: event.target.checked,
          });
          handleClearAttribute1Chips();
          break;
        case 'addAttribute2':
          setState({
            ...state,
            attribute2: '',
            [event.target.name]: event.target.checked,
          });
          handleClearAttribute2Chips();
          break;
        case 'isPreOrder':
          setState({
            ...state,
            leadTime: 0,
            [event.target.name]: event.target.checked,
          });
          break;
        default:
          break;
      }
    }
  };

  //Handle quantity
  const handleQtyChange = (row, col) => (event) => {
    //console.log(quantity);
    const copiedQuantity = [...quantity];
    const copiedRow = [...copiedQuantity[row]];
    copiedRow[col] = event.target.value;
    const newQuantity = copiedQuantity.map((colourRow, rowNum) => {
      if (rowNum === row) {
        return copiedRow;
      } else {
        return colourRow;
      }
    });
    setQuantity(newQuantity);
  };
  //handle quantity (null)
  const handleNullQty = (row, col, isNull) => {
    const copiedQuantity = [...quantity];
    const copiedRow = [...copiedQuantity[row]];
    isNull ? (copiedRow[col] = null) : copiedRow.splice(col, 1);
    const newQuantity = copiedQuantity.map((colourRow, rowNum) => {
      if (rowNum === row) {
        return copiedRow;
      } else {
        return colourRow;
      }
    });
    setQuantity(newQuantity);
  };

  //Handle input
  const handleInputChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
    // console.log(event);
  };

  const handleCategoryChange = (event) => {
    setState({ ...state, category: event.value });
  };

  //ADD IMAGES DROPZONE
  const [images, setImages] = useState(
    typeof pdtImages !== 'undefined' ? pdtImages : []
  );
  // console.log('IMAGES HERE',   images);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      let allFiles = images;
      acceptedFiles.forEach((file) => allFiles.push(file));

      setImages(
        allFiles.map((file) =>
          typeof file.name === 'string'
            ? Object.assign(file, {
              preview: URL.createObjectURL(file)
            })
            : file
        )
      );
    },
  });

  const removeImage = (file) => {
    // console.log(file);
    setImages(images.filter((savedFile) => savedFile !== file));
  };

  //DIALOG ACTIONS
  const handleClose = () => {
    parentCallback();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!state.addAttribute1) {
      setHelperText(
        'Please input at least one Attribute 1 option'
      );
    }
    else if (state.addAttribute2 && attribute2options.length === 0) {
      setHelperText(
        'Please input at least one attribute option, or uncheck Add Attribute 1.'
      );
    } else if (state.addAttribute1 && attribute1options.length === 0) {
      setHelperText(
        'Please input at least one attribute option, or uncheck Add Attribute 2.'
      );
    } else if (!(state.canDeliver || state.canCollect)) {
      setHelperText('Please select at least one form of product collection.');
    } else if (
      state.attribute1.length !== 0 &&
      state.attribute2.length !== 0 &&
      state.attribute1 === state.attribute2
    ) {
      setHelperText('Attribute 1 and Attribute 2 must be different!');
    } else {
      // console.log('POSTING', state);
      const newProduct = new FormData();
      newProduct.append('name', state.name);
      if (state.description !== '') {
        newProduct.append('description', state.description);
      }
      newProduct.append('attribute1', state.attribute1);
      newProduct.append('attribute2', state.attribute2);
      newProduct.append('canCollect', state.canCollect);
      newProduct.append('canDeliver', state.canDeliver);
      newProduct.append('category', state.category);
      newProduct.append('colours', JSON.stringify(attribute1options));
      newProduct.append('isPreOrder', state.isPreOrder);
      newProduct.append('price', state.price);
      newProduct.append('sizes', JSON.stringify(attribute2options));
      newProduct.append('quantity', JSON.stringify(quantity));
      console.log(quantity);
      if (state.isPreOrder) {
        newProduct.append('leadTime', state.leadTime);
      } else {
        newProduct.append('leadTime', 0);
      }
      let oldImages = [];
      for (let i = 0; i < images.length; i += 1) {
        if (typeof images[i] === 'string') {
          oldImages.push(images[i]);
        } else if (typeof images[i] === 'object') {
          newProduct.append('newImages', images[i]);
        }
      }
      newProduct.append('images', JSON.stringify(oldImages));
      // console.log('REALLY POSTING NOW');
      // for (var [key, value] of newProduct.entries()) {
      //   console.log(key);
      //   console.log(value);
      // }
      let res;
      if (type === 'add') {
        res = await trackPromise(productService.addProduct(newProduct));
      } else if (type === 'edit') {
        res = await trackPromise(productService.updateProduct(_id, newProduct));
      }
      if (res.status === 200) {
        history(0);
        handleClose();
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
  };

  //set initial state of checked, for edit product
  const newChecked = [];
  tableRow.map((colour, colourIndex) => {
    tableCol.map((size, sizeIndex) => {
      if (quantity[colourIndex][sizeIndex] > 999999) {
        newChecked.push(`${colour}-${size}`);
      }
    });
  });

  //unlimited quantity toggle
  const [checked, setChecked] = useState(newChecked);
  // console.log(checked);

  const handleToggle = (value, colourIndex, sizeIndex) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      handleNullQty(colourIndex, sizeIndex, true);
    } else {
      newChecked.splice(currentIndex, 1);
      // handleNullQty(colourIndex, sizeIndex, false);
    }

    setChecked(newChecked);
  };

  //for product category:
  const pdtCategories = [
    { value: 'Accessories', label: 'Accessories' },
    { value: 'Apparel', label: 'Apparel' },
    { value: 'Food and Beverage', label: 'Food and Beverage' },
    { value: 'Bags', label: 'Bags' },
    { value: 'Decor', label: 'Decor' },
    { value: 'Illustrations/Prints/Paintings', label: 'Illustrations/Prints/Paintings' },
    { value: 'Masks', label: 'Masks' },
    { value: 'Stationery', label: 'Stationery' },
    { value: 'Others', label: 'Others' },
    { value: 'NAF Merch', label: 'NAF Merch' }
  ];

  return (
    <div class="bg-white p-2">
      <div id="Add new product">
        {type === 'add' ? 'Add New Product' : 'Edit Product'}
      </div>
      <div>
        <div>
          Please fill in the following form to add your product:
        </div>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Input
            required
            id="name"
            label="Product Name"
            type="text"
            onChange={handleInputChange('name')}
            defaultValue={pdtName}
          />
          <div class='flex flex-col'>
            <p>Description</p>
            <textarea
              id="description"
              label="Product Description"
              type="text"
              class='border transition duration-150 ease-in-out'
              rows="5"
              onChange={handleInputChange('description')}
              defaultValue={pdtDesc}
            />
          </div>
          <Input
            label="Price"
            id="price"
            value={state.price}
            onChange={ handleInputChange('price')}
            type="currency"
            defaultValue={pdtPrice}
            required
          />

          <label>
            Product Category:
            <Select
              id="product-category"
              name="category"
              required
              value={catChoice}
              options={pdtCategories}
              onChange={handleCategoryChange}>
            </Select>
          </label>


          <p>Product Options</p>
          <div >
            Add Attribute 1
            <input type="checkbox"
              checked={state.addAttribute1}
              onChange={handleChange}
              name="addAttribute1"
            />
            {state.addAttribute1 && (
              <div>
                <Input
                  required
                  id="attribute1"
                  label="Attribute 1 (e.g. colour, size)"
                  type="text"
                  value={state.attribute1}
                  onChange={handleInputChange('attribute1')}
                />
                <CreatableSelect
                  isMulti
                  isClearable
                  inputValue={attb1InputValue}
                  onChange={handleDeleteAttribute1Chip}
                  onInputChange={(newValue) => setAttb1Input(newValue)}
                  label="Attribute 1 Options"
                  color="secondary"
                  variant="outlined"
                  name="attribute1options"
                  onKeyDown={handleAddAttribute1Chip}
                  value={attb1Value}
                />
                <p>
                  **Please press Enter after each attribute option
                </p>
              </div>
            )}
          </div>

          <div>
            Add Attribute 2
            <input type="checkbox"
              checked={state.addAttribute2}
              onChange={handleChange}
              name="addAttribute2"
            />
          </div>
          {state.addAttribute2 && (
            <div >
              <Input
                required
                id="attribute2"
                label="Attribute 2 (e.g. colour, size)"
                type="text"
                value={state.attribute2}
                onChange={handleInputChange('attribute2')}
              />
              <CreatableSelect
                isMulti
                isClearable
                inputValue={attb2InputValue}
                onChange={handleDeleteAttribute2Chip}
                onInputChange={(newValue) => setAttb2Input(newValue)}
                label="Attribute 1 Options"
                color="secondary"
                variant="outlined"
                name="attribute1options"
                onKeyDown={handleAddAttribute2Chip}
                value={attb2Value}
              />
              <p>
                Please press Enter after each attribute option
              </p>
            </div>
          )}

          <div>
            Pre-Order
            <input
              type="checkbox"
              checked={state.isPreOrder}
              onChange={handleChange}
              name="isPreOrder"
            />

          </div>

          {state.isPreOrder && (
            <div >

              <p>Lead Time</p>
              <Input
                id="leadTime"
                onChange={handleInputChange('leadTime')}
                labelWidth={80}
                type="number"
                defaultValue={state.leadTime}
              />
              <p>
                Product lead time indicates the minimum number of days
                the order must be placed before collection.
              </p>
            </div>
          )}

          <div>
            <p >
              Product Variant Quantities
            </p>
            <ul>
              {tableRow.map((colour, colourIndex) => {
                return tableCol.map((size, sizeIndex) => {
                  const labelId = `${colour}-${size}`;
                  //console.log(tableRow)
                  const label =
                    colour === '' && size === ''
                      ? 'Original'
                      : colour.toUpperCase() + ' ' + size.toUpperCase();
                  return (
                    <li key={labelId} >
                      <p id={labelId} style={{ display: 'inline-block' }} >{`Variant: ${label}`}</p>
                      <div style={{ display: 'inline-block', paddingLeft: 15 }}>
                        <div>
                          Unlimited Quantity
                          <input type="checkbox"
                            // edge="center"
                            onChange={handleToggle(
                              `${colour}-${size}`,
                              colourIndex,
                              sizeIndex
                            )}
                            checked={
                              checked.indexOf(`${colour}-${size}`) !== -1
                            }
                          // inputProps={{ 
                          //   'aria-labelledby': `unlimited quantity for variant ${colour}-${size}`,
                          // }}
                          />
                        </div>

                        {checked.indexOf(`${colour}-${size}`) === -1 && (
                          <Input
                            required
                            label="Quantity"
                            type="number"
                            size="small"
                            onChange={handleQtyChange(
                              colourIndex,
                              sizeIndex,
                              false
                            )}
                            defaultValue={
                              quantity[colourIndex][sizeIndex] < 999999
                                ? quantity[colourIndex][sizeIndex]
                                : ''
                            }
                          />
                        )}
                      </div>
                    </li>
                  );
                });
              })}
            </ul>
          </div>

          <p>
            Product Collection Options
          </p>
          <div>
            Allow self-collection
            <input type="checkbox"
              checked={state.canCollect}
              onChange={handleChange}
              name="canCollect"
            />
          </div>

          <div>
            Allow delivery
            <input type="checkbox"
              checked={state.canDeliver}
              onChange={handleChange}
              name="canDeliver"
            />
          </div>


          <p>Product Images</p>
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>
              Drag and drop your product images here, or click to select
              files (Squared images are preferred)
            </p>
          </div>
          <aside >
            {images.map((file) => (
              <div key={file.name}>
                <button class="absolute" onClick={() => removeImage(file)}>

                  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" /></svg>
                </button>
                <div >
                  {typeof file.preview === 'undefined' ? (
                    <img src={file} />
                  ) : (
                    <img src={file.preview} onLoad={() => { URL.revokeObjectURL(file.preview) }} />
                  )}
                </div>
              </div>
            ))}
          </aside>
          <button
            type="submit"
            disabled={promiseInProgress}
          >
            {type === 'add' ? 'Add Product' : 'Update Product'}
          </button>
          <p style={{ color: 'red' }}>
            {helperText}
          </p>
          <LoadingSpinnerComponent />
        </form>
      </div >

      <button
        onClick={handleClose}
        disabled={promiseInProgress}
      >
        Cancel
      </button>
    </div>
  );
}
