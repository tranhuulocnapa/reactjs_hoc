import React from 'react'
import Phone from './phone'
import Detail from './detail'
import { useState } from 'react'
import data from "./data.json"

export default function ShopingPhone() {

    const [product, setproduct] = useState(data)

    const renderproduct = () => {

        return product.map((products) => <Phone key={products.maSP} productPros={products} />)

    }

    return (

        <>
            <div className='container mx-auto grid grid-cols-3'>
                {renderproduct()}
                {/* <Phone />
                <Phone />
                <Phone /> */}


            </div>
            <Detail />


        </>


    )
}
