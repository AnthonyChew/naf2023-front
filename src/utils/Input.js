import { useRef } from 'react';

const Input = (props) => {
    const {
        id,
        wrapperClassName = '',
        placeholder = '',
        label = '',
        type = 'text',
        error = false,
        errorText = '',
        required = false,
        password = false,
        ...rest
    } = props;

    const inputRef = useRef();

    return (
        <div className={wrapperClassName}>
            <div
                class={`border transition duration-150 ease-in-out ${error
                    ? 'focus-within:border-red border-red'
                    : 'focus-within:border-primary border-gray-gray4'
                    }`}
                onClick={() => inputRef.current.focus()}
            >
                <label
                    htmlFor={id}
                    class='text-base text-primary font-light placeholder-gray-gray4 px-2 pt-1.5'
                >
                    {label} {required && <span class='text-red-500'>*</span>}
                </label>
                {type === 'currency' ?
                    <div class='flex flex-row'>
                        <span class='pl-2'>$</span>
                        <input
                            ref={inputRef}
                            type='number'
                            class='w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md'
                            id={id}
                            placeholder={placeholder}
                            required={required}
                            {...rest}
                        />
                    </div>
                    :
                    <input
                        ref={inputRef}
                        type={type}
                        class='w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md'
                        id={id}
                        placeholder={placeholder}
                        required={required}
                        {...rest}
                    />
                }
            </div>


            {errorText && (
                <p className='text-xs pl-2 text-red-500 mb-4'>{errorText}</p>
            )}
        </div>
    );
};

export default Input;