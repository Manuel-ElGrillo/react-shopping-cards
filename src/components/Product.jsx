import React, { useState } from 'react'

const Product = ({ product, onProductQuantityChange }) => {

    const [title, setTitle] = useState(product.title)
    const [newFontSize, setNewFontSize] = useState(20)
    const [cuantity, setQuantity] = useState(product.quantity)

    const changeTo23 = () => setNewFontSize(23)

    const changeTo25 = () => setNewFontSize(25)

    const originalSize = () => setNewFontSize(20)

    const handleQuantityChange = (event) => {

        const productCuantity = parseInt(event.target.value, 10)

        setQuantity(productCuantity)

        onProductQuantityChange(productCuantity)
    }

    return (
        <>

            <div className='flex flex-col border border-black rounded p-5 w-[95%] h-fit m-2'>

                <div className='w-full bg-[#cfcfcf36] rounded'>
                    <img src={product.img} alt="Model" className='mx-auto rounded-xl w-2/3 h-auto py-2'/>
                </div>

                <h3 style={{ fontSize: `${newFontSize}px` }} className='my-2'>{title}</h3>

                <input
                    className='border-2 rounded p-2 border-gray-400'
                    type="text"
                    placeholder='Edit the title here'
                    onChange={(event) => { setTitle(event.target.value) }}
                />

                <div className='flex justify-between my-3'>

                    <button className='bg-blue-100 border border-blue-500 rounded p-1 mx-2 w-[210px] text-sm' onClick={() => changeTo23()}>
                        Change font size to 23px
                    </button>

                    <button className='bg-blue-100 border border-blue-500 rounded p-1 mx-2 w-[210px] text-sm' onClick={() => changeTo25()}>
                        Change font size to 25px
                    </button>

                    <button className='bg-blue-100 border border-blue-500 rounded p-1 mx-2 w-[210px] text-sm' onClick={() => originalSize()}>
                        Original size
                    </button>

                </div>

                <div className='flex justify-start items-center'>

                    <span className='font-bold mr-2'>
                        ${product.price}
                    </span>

                    <span className='mr-2'>
                        Quantity:
                    </span>

                    <input
                        type="number"
                        min={0}
                        value={cuantity}
                        onChange={handleQuantityChange}
                        className='border-2 rounded p-2 border-gray-400 w-16'
                    />

                </div>

                
                <p className='mt-5'>
                    {product.text}
                </p>

                <button className='mt-5 bg-purple-300 border-purple-600 border py-3 px-10 rounded w-fit mx-auto'>
                    {product.btnText}
                </button>

                <a href="" className='mt-5 text-center underline text-lg'>
                    {product.linkText}
                </a>
            </div>

        </>
    )
}

export default Product
