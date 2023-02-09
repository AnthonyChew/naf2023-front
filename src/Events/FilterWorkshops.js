import React, { useState, useEffect } from 'react';
import Select, { StylesConfig } from 'react-select';



//for product category:
const filters = [
  { value: 'Vacancies', label: 'Vacancies' },
  { value: 'A-Z', label: 'A-Z' },
  { value: 'Date/Time', label: 'Date/Time' },
  
];

export default function Filter(props) {
  const { filterCallback } = props;
  const customStyles = {
    control: base => ({
      ...base,
      minHeight: 54,
    })
  };
  const [selectedOption, setSelectedOption] = useState( {value: 'Vacancies', label: 'Vacancies'});


  useEffect(() => {
    filterCallback(selectedOption.value)
  }, [selectedOption]);


  return (
    <div class="lg:w-[30%] w-[100%] mt-5 lg:mt-0 rounded-lg">
        <Select
        placeholder={"Filter..."}
    options={filters}
    isSearchable={false}
    onChange={(values) => { 
      setSelectedOption(values);
    }}
    styles={customStyles}
  />
    </div>
  );
  }