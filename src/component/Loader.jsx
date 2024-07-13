import React from 'react'

const Loader = () => {
    return (
        <div className='fixed inset-0 bg-primary bg-opacity-30 flex items-center justify-center z-50'>
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 clip-rect(0,0,0,0)">
                    Loading...
                </span>
            </div>
        </div>
    )
}

export default Loader