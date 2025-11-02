import React from 'react'
import Child from './child'
import { useState } from 'react'

export default function Communicate() {
    const [user, setuser] = useState("cybersoft");

    const changeinfouser = () => {
        setuser("loc")

    }

    const changeformchild = (setchange) => {

        setuser(setchange)
    }

    return (
        <div>

            <h1>Communicate</h1>
            <p>User: {user}</p>
            <button onClick={changeinfouser} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600
             dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Change info</button>

            <hr />
            <Child data={user} onchangeformchild={changeformchild} />
        </div>
    )
}
