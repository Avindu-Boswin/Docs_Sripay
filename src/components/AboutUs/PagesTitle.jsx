import React from 'react'

function PageTitle({ title }) {
    return (
        <div className="w-full mx-auto bg-clip-text text-transparent bg-gradient-to-r from-[#1437f6] to-[#030487] text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
            {title}

        </div>
    )
}

export default PageTitle