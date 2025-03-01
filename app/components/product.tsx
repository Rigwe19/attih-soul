import { useState } from "react";
import Button from "./button";

type Props = {}

const Product = (props: Props) => {
    const [size, setSize] = useState('M');
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (quantity: number) => {
        setQuantity(pv => (pv === 1 && quantity === -1) ? pv : pv + quantity)
    }

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-3'>
            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-2 md:gap-10 font-radio tracking-[2px]">
                    <h3 className="uppercase font-medium md:text-3xl md:leading-9">Merchandise name</h3>
                    <div className="flex gap-1.5 md:gap-3.5">
                        <span className="md:text-2xl text-[#7E7E7E] md:leading-7">Size:</span>
                        <span className="font-medium text-lg md:text-3xl md:leading-9 ">{size}</span>
                    </div>
                </div>
                <p className="md:text-xl text-sm md:leading-6 tracking-[1.58px] md:tracking-[4.58px] text-[#8E8E8E]">Short description about merchandise here</p>
            </div>
            <div className="flex flex-col relative max-h-[480px]">
                <img src="/images/products/tshirt.png" alt="" />
                <div className="absolute w-full bottom-6">
                    <h3 className="font-radio font-medium text-3xl leading-9 tracking-[2px] text-center">₤30</h3>
                </div>
            </div>
            <div className="flex md:flex-col justify-between flex-wrap space-y-4">
                <div className="flex md:gap-5 gap-2">
                    {['S', 'M', 'L', 'XL'].map(index => <button onClick={() => setSize(index)} key={index} className={`rounded-full md:h-10 md:w-10 w-8 h-8 cursor-pointer ${size === index ? 'bg-white text-black' : 'bg-neutral-700 text-white hover:bg-neutral-800'} `}>{index}</button>)}
                </div>
                <div className="flex gap-11">
                    <div className="flex">
                        <button onClick={() => handleQuantityChange(-1)} className={`w-8 h-10 flex cursor-pointer hover:bg-[#D0CCCC] justify-center items-center ${quantity === 1 ? 'bg-[#393939]' : 'bg-[#A19E9E]'} `}>-</button>
                        <span className="w-8 h-10 flex justify-center items-center bg-[#393939]">{quantity}</span>
                        <button onClick={() => handleQuantityChange(1)} className="w-8 h-10 flex cursor-pointer hover:bg-[#D0CCCC] justify-center items-center bg-[#A19E9E]">+</button>
                    </div>
                    <Button className="border text-white border-white hidden md:flex">Buy Now</Button>
                </div>
                    <Button className="border text-white border-white md:hidden w-full">Buy Now</Button>
            </div>
        </div >
    )
}

export default Product