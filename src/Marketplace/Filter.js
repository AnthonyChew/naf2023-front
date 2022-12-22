import React, { useState, useEffect } from 'react';
import Select, { StylesConfig } from 'react-select';



//for product category:
const filters = [
  { value: 'NAF Merch', label: 'NAF Merch' },
  { value: 'Accessories', label: 'Accessories' },
  { value: 'Apparel', label: 'Apparel' },
  { value: 'Food and Beverage', label: 'Food and Beverage' },
  { value: 'Bags', label: 'Bags' },
  { value: 'Decor', label: 'Decor' },
  { title: 'Illustrations/Prints/Paintings', label: 'Illustrations/Prints/Paintings' },
  { value: 'Masks', label: 'Masks' },
  { value: 'Stationery', label: 'Stationery' },
  { value: 'Others', label: 'Others' },
  
];

export default function Filter(props) {
  const { filterCallback } = props;
  const customStyles = {
    control: base => ({
      ...base,
      minHeight: 54,
    })
  };
  const [selectedOption, setSelectedOption] = useState([]);


  useEffect(() => {
    filterCallback(selectedOption)
  }, [selectedOption]);


  return (
    <div class="w-[30%]">
        <Select
        placeholder={"Filter..."}
    closeMenuOnSelect={false}
    isMulti
    options={filters}
    onChange={(values) => { 
      setSelectedOption(values.map((option) => option.value));
    }}
    styles={customStyles}
  />
    </div>
  );
  }