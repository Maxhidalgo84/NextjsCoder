"use client"

import { useEffect } from "react";




const Error = ({ error, reset }) => {
 


    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="container m-auto">
            <h2>Hubo un error al cargar la página</h2>
            <button onClick={reset}
                className="flex w-48 mt-5 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             >Intentar nuevamente</button>
        </div>
    )
}

export default Error