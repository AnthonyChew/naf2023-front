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
        <div class={wrapperClassName}>
            <div
                class={` ${error
                    ? 'focus-within:border-red border-red'
                    : ''
                    }`}
                onClick={() => inputRef.current.focus()}
            >
                <p
                    htmlFor={id}
                    class='text-lg md:text-xl placeholder-gray-gray4 px-2 md:pt-1.5 font-syne'
                >
                    {label} {required && <span class='text-red-500'>*</span>}
                </p>
                {type === 'currency' ?
                    <div class='flex flex-row'>
                        <span class='pl-2'>$</span>
                        <input
                            ref={inputRef}
                            type='number'
                            class='w-full px-2 pr-2 md:pb-1.5 outline-none text-lg md:text-xl font-light rounded-2xl'
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
                        class='w-full px-2 md:pb-1.5 outline-none text-lg md:text-xl font-light rounded-2xl'
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