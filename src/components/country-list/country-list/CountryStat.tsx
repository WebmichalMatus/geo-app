import React from 'react'

type CountryStatProps = {
    title: string
    children?: React.ReactNode
}

function CountryStat({ title, children }: CountryStatProps) {
    return (

        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 tracking-tight text-gray-600 dark:text-white">{title}</h5>
            <div className="font-normal text-2xl font-bold text-gray-900 dark:text-gray-400">
                {children}
            </div>
        </div>
    )
}

export default CountryStat