import React, { useState, useEffect, Component } from 'react';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ChipInput from 'material-ui-chip-input';
import productService from '../services/products';
import { useDropzone } from 'react-dropzone';
import IconButton from '@material-ui/core/IconButton';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { LoadingSpinnerComponent } from '../utils/LoadingSpinnerComponent';
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from 'react-promise-tracker';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  formSection: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'block',
  },
  indentedCheckboxes: {
    marginLeft: theme.spacing(2),
  },
  secondaryInput: {
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  rowLabels: {
    align: 'center',
  },
  //IMAGE DROPZONE STYLING
  dropzone: {
    // backgroundColor: 'pink',
    border: '3px dashed rgba(179, 86, 153, 0.6)',
    color: 'rgba(179, 86, 153, 1)',
    padding: theme.spacing(5),
    marginTop: theme.spacing(2),
    margin: 'auto',
    textAlign: 'center',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: theme.palette.background.default,
      cursor: 'pointer',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  thumbsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    justifyContent: 'center',
  },
  thumb: {
    display: 'inline-flex',
    position: 'relative',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    padding: 5,
  },
  thumbInner: {
    //   minWidth: 0,
    //   overflow: 'hidden',
    height: 150,
  },
  img: {
    display: 'block',
    width: 'auto',
    height: '100%',
  },
  [theme.breakpoints.down('xs')]: {
    thumbInner: {
      height: 'auto',
    },
    img: {
      width: '100%',
      objectFit: 'cover',
    },
  },
}));

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
  const classes = useStyles();
  const history = useHistory();
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

  const [helperText, setHelperText] = useState('');
  const [quantity, setQuantity] = useState(
    typeof pdtQuantity !== 'undefined' ? pdtQuantity : [[]]
  );
  const { promiseInProgress } = usePromiseTracker();

  //ATTRIBUTE 1 = SIZES, ATTRIBUTE2 = COLOURS
  //INPUT POSSIBLE COLOURS (ROW)
  const [attribute1options, setAttribute1] = useState(
    state.addAttribute1 ? pdtAtt1Options : []
  );
  const handleAddAttribute1Chip = (chip) => {
    setAttribute1((attribute1options) => [...attribute1options, chip]);
    // console.log(attribute1options.length); //FIX THIS
    if (attribute1options.length > 0) {
      //if 1 colour -> increase but if 0 colours to 1 colour can reuse the matrix
      //Initial matrix = [[]]
      setQuantity((quantity) => [...quantity, []]);
      // console.log('ADDING ATTRIBUTE 1 CHIP, QUANTITY: ', (quantity) => [
      //   ...quantity,
      //   [],
      // ]);
    }
  };
  const handleDeleteAttribute1Chip = (chip) => {
    console.log('Delete properly');
    const indexOfColor = attribute1options.indexOf(chip);
    //FIX THIS
    setQuantity(quantity.filter((qty, index) => index !== indexOfColor));
    if (attribute1options.length === 1) {
      //if got 1 colour only then just set to an empty array
      // setQuantity((quantity[indexOfColor] = []));
      setQuantity([[]]);
      // console.log('DELETING ATTRIBUTE 1 CHIP, QUANTITY: ', [[]]);
    }
    // console.log(
    //   'DELETING ATTRIBUTE 1 CHIP, QUANTITY: ',
    //   quantity.filter((qty, index) => index !== indexOfColor)
    // );
    setAttribute1(attribute1options.filter((colour) => colour !== chip));
  };

  //INPUT POSSIBLE COLOURS (ROW)
  const [attribute2options, setAttribute2] = useState(
    state.addAttribute2 ? pdtAtt2Options : []
  );

  const handleAddAttribute2Chip = (chip) => {
    setAttribute2((attribute2options) => [...attribute2options, chip]);
    //FIX THIS
    // if (attribute2options.length >= 1) {
    //   const newQuantity = quantity.map((colourRow) => [...colourRow, null]);
    //   setQuantity(newQuantity);
    //   console.log('ADDING ATTRIBUTE 2 CHIP, QUANTITY: ', newQuantity);
    // }
  };
  const handleDeleteAttribute2Chip = (chip) => {
    setAttribute2(attribute2options.filter((size) => size !== chip));
    const indexOfSize = attribute2options.indexOf(chip);
    //FIX THIS
    //if product size from 1 to 0 then dont change
    const newQuantity = quantity.map((colourRow) =>
      colourRow.filter((rowElem, index) => index !== indexOfSize)
    );
    setQuantity(newQuantity);
    // console.log('DELETING ATTRIBUTE 2 CHIP, QUANTITY: ', newQuantity);
  };

  const handleClearAttribute1Chips = () => {
    setAttribute1([]);
    setQuantity([[]]);
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
    setQuantity(newQuantity);
  };

  const tableCol =
    attribute2options.length === 0
      ? [''].concat(attribute2options)
      : attribute2options;

  const tableRow =
    attribute1options.length === 0
      ? [''].concat(attribute1options)
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

  const handleCategoryChange = (event, value) => {
    setState({ ...state, category: value });
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
                preview: URL.createObjectURL(file),
              })
            : file
        )
      );
    },
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      images.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [images]
  );

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

    if (state.addAttribute2 && attribute2options.length === 0) {
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
        history.go(0);
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
    'Accessories',
    'Apparel',
    'Food and Beverage',
    'Bags',
    'Decor',
    'Illustrations/Prints/Paintings',
    'Masks',
    'Stationery',
    'Others',
    'NAF Merch',
  ];

  return (
    <>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="Add new product"
        fullWidth={true}
        maxWidth="md" //or "lg"
        fullScreen
        className={classes.root}
      >
        <DialogTitle id="Add new product">
          {type === 'add' ? 'Add New Product' : 'Edit Product'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the following form to add your product:
          </DialogContentText>
          <form
            className={classes.form}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              required
              id="name"
              label="Product Name"
              type="text"
              fullWidth
              variant="outlined"
              color="secondary"
              className={classes.formSection}
              onChange={handleInputChange('name')}
              defaultValue={pdtName}
            />
            <TextField
              id="description"
              label="Product Description"
              type="text"
              fullWidth
              variant="outlined"
              color="secondary"
              multiline
              rows={5}
              className={classes.formSection}
              onChange={handleInputChange('description')}
              defaultValue={pdtDesc}
            />
            <FormControl
              required
              variant="outlined"
              color="secondary"
              className={classes.formSection}
            >
              <InputLabel htmlFor="price">Price</InputLabel>
              <OutlinedInput
                id="price"
                value={state.price}
                onChange={handleInputChange('price')}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                fullWidth
                labelWidth={45}
                inputProps={{
                  min: '0',
                  step: '0.01',
                  // pattern: '[0-9]*',
                }}
                type="number"
                defaultValue={pdtPrice}
              />
            </FormControl>
            <FormControl
              component="fieldset"
              // variant="outlined"
              required
              color="secondary"
              className={classes.formSection}
            >
              <Autocomplete
                id="product-category"
                name="category"
                options={pdtCategories}
                getOptionLabel={(option) => option}
                // style={{ width: 300 }}
                value={state.category}
                onChange={handleCategoryChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    color="secondary"
                    label="Product Category"
                    variant="outlined"
                  />
                )}
              />
            </FormControl>
            <FormControl
              component="fieldset"
              // variant="outlined"
              color="secondary"
              className={classes.formSection}
            >
              <FormLabel component="legend">Product Options</FormLabel>
              <FormGroup className={classes.indentedCheckboxes}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.addAttribute1}
                      onChange={handleChange}
                      name="addAttribute1"
                    />
                  }
                  label="Add Attribute 1"
                />
                {state.addAttribute1 && (
                  <div className={classes.secondaryInput}>
                    <TextField
                      required
                      id="attribute1"
                      label="Attribute 1 (e.g. colour, size)"
                      type="text"
                      fullWidth
                      variant="outlined"
                      color="secondary"
                      value={state.attribute1}
                      className={classes.formSection}
                      onChange={handleInputChange('attribute1')}
                    />
                    <ChipInput
                      label="Attribute 1 Options"
                      color="secondary"
                      variant="outlined"
                      name="attribute1options"
                      value={attribute1options}
                      fullWidth
                      onAdd={(chip) => handleAddAttribute1Chip(chip)}
                      onDelete={(chip, index) =>
                        handleDeleteAttribute1Chip(chip, index)
                      }
                    />
                    <FormHelperText>
                      Please press Enter after each attribute option
                    </FormHelperText>
                  </div>
                )}
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.addAttribute2}
                      onChange={handleChange}
                      name="addAttribute2"
                    />
                  }
                  label="Add Attribute 2"
                />
                {state.addAttribute2 && (
                  <div className={classes.secondaryInput}>
                    <TextField
                      required
                      id="attribute2"
                      label="Attribute 2 (e.g. colour, size)"
                      type="text"
                      fullWidth
                      variant="outlined"
                      color="secondary"
                      value={state.attribute2}
                      className={classes.formSection}
                      onChange={handleInputChange('attribute2')}
                    />
                    <ChipInput
                      label="Attribute 2 Options"
                      color="secondary"
                      variant="outlined"
                      value={attribute2options}
                      fullWidth
                      onAdd={(chip) => handleAddAttribute2Chip(chip)}
                      onDelete={(chip, index) =>
                        handleDeleteAttribute2Chip(chip, index)
                      }
                    />
                    <FormHelperText>
                      Please press Enter after each attribute option
                    </FormHelperText>
                  </div>
                )}
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.isPreOrder}
                      onChange={handleChange}
                      name="isPreOrder"
                    />
                  }
                  label="Pre-Order"
                />
                {state.isPreOrder && (
                  <div className={classes.secondaryInput}>
                    <FormControl
                      required
                      variant="outlined"
                      color="secondary"
                      className={classes.formSection}
                    >
                      <InputLabel htmlFor="leadTime">Lead Time</InputLabel>
                      <OutlinedInput
                        id="leadTime"
                        // value={state.leadTime}
                        onChange={handleInputChange('leadTime')}
                        endAdornment={
                          <InputAdornment position="end">days</InputAdornment>
                        }
                        labelWidth={80}
                        type="number"
                        inputProps={{
                          min: '1',
                        }}
                        defaultValue={state.leadTime}
                      />
                      <FormHelperText>
                        Product lead time indicates the minimum number of days
                        the order must be placed before collection.
                      </FormHelperText>
                    </FormControl>
                  </div>
                )}
              </FormGroup>
            </FormControl>
            <div className={classes.quantity}>
              <FormLabel component="legend">
                Product Variant Quantities
              </FormLabel>
              <List className={classes.root}>
                {tableRow.map((colour, colourIndex) => {
                  return tableCol.map((size, sizeIndex) => {
                    const labelId = `${colour}-${size}`;
                    // const label =
                    //   (colour === '' ? '' : `${colour} colour`) +
                    //   (size === '' ? '' : `${size} size`);
                    const label =
                      colour === '' && size === ''
                        ? 'Original'
                        : colour.toUpperCase() + ' ' + size.toUpperCase();
                    return (
                      <ListItem key={labelId} disableGutters divider>
                        <ListItemText
                          id={labelId}
                          primary={`Variant: ${label}`}
                          disableTypography
                          style={{ display: 'inline-block' }}
                        />
                        {/* <ListItemSecondaryAction
                        style={{ display: 'inline-block' }} //this has shitty styling
                      > */}
                        <div
                          style={{ display: 'inline-block', paddingLeft: 15 }}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                // edge="center"
                                onChange={handleToggle(
                                  `${colour}-${size}`,
                                  colourIndex,
                                  sizeIndex
                                )}
                                checked={
                                  checked.indexOf(`${colour}-${size}`) !== -1
                                }
                                inputProps={{
                                  'aria-labelledby': `unlimited quantity for variant ${colour}-${size}`,
                                }}
                              />
                            }
                            label="Unlimited Quantity"
                          />
                          {checked.indexOf(`${colour}-${size}`) === -1 && (
                            <TextField
                              required
                              label="Quantity"
                              type="number"
                              inputProps={{ min: '0' }}
                              size="small"
                              variant="outlined"
                              color="secondary"
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
                        {/* </ListItemSecondaryAction> */}
                      </ListItem>
                    );
                  });
                })}
              </List>
            </div>

            <FormLabel component="legend" required>
              Product Collection Options
            </FormLabel>
            <FormGroup className={classes.indentedCheckboxes}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.canCollect}
                    onChange={handleChange}
                    name="canCollect"
                  />
                }
                label="Allow self-collection"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.canDeliver}
                    onChange={handleChange}
                    name="canDeliver"
                  />
                }
                label="Allow delivery"
              />
            </FormGroup>

            <FormControl
              component="fieldset"
              // variant="outlined"
              color="secondary"
              className={classes.formSection}
            >
              <FormLabel component="legend">Product Images</FormLabel>
              <div {...getRootProps({ className: classes.dropzone })}>
                <input {...getInputProps()} />
                <p>
                  Drag and drop your product images here, or click to select
                  files (Squared images are preferred)
                </p>
              </div>
              <aside className={classes.thumbsContainer}>
                {images.map((file) => (
                  <div className={classes.thumb} key={file.name}>
                    <IconButton
                      aria-label="remove image"
                      color="secondary"
                      onClick={() => removeImage(file)}
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                      }}
                    >
                      <CloseRoundedIcon />
                    </IconButton>
                    <div className={classes.thumbInner}>
                      {typeof file.preview === 'undefined' ? (
                        <img src={file} className={classes.img} />
                      ) : (
                        <img src={file.preview} className={classes.img} />
                      )}
                    </div>
                  </div>
                ))}
              </aside>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disabled={promiseInProgress}
            >
              {type === 'add' ? 'Add Product' : 'Update Product'}
            </Button>
            <FormHelperText style={{ color: 'red' }}>
              {helperText}
            </FormHelperText>
            <LoadingSpinnerComponent />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="secondary"
            disabled={promiseInProgress}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
