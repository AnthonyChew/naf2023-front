import React from 'react'

const FileUploader = props => {
    const hiddenFileInput = React.useRef(null);
    const handleClick = event =>{
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };
  return (
    <div>
        <button onClick={handleClick} type="submit" class="mr-10 bg-[#F9346C] border-2 lg:border-4 border-black rounded-md px-1 lg:px-10 py-3 lg:py-6 font-syneBold text-sm lg:text-lg text-white z-20">UPLOAD YOUR DESIGN</button>
        <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{display:'none'}} /> 
    </div>
  )
}

export default FileUploader