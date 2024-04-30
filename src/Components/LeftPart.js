import React from "react";
import { motion } from 'framer-motion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const LeftPart=()=>{
    return(
        <motion.div 
                initial={{
                    x:-100,
                    y:-10,
                    scale:0.5,
                    opacity:0
                }}
                whileInView={{ opacity: 1, x:0, y:0, scale:1}}
                exit={{
                  x:-100,
                    y:-10,
                    scale:0.5,
                  opacity:0}}
                transition={{
                  ease:"easeInOut",
                  duration:2,
                }}
                className="mt-16">
                <h1 className="font-bold text-3xl cursor-pointer font-serif">Shopping Cart.</h1>
                {/* whole table part */}
                <div className="overflow-x-none">
                    <table className="table-auto w-full mt-12 ml-4">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 font-semibold">Product</th>
                                <th className="px-4 py-2">Size</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-4 font-semibold text-xl">T-Shirt</td>
                                <td className="px-4 py-2">XL</td>
                                <td className="px-4 py-2">5</td>
                                <td className="px-4 py-2">$10</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-4 font-semibold text-xl">Sneakers</td>
                                <td className="py-2">M</td>
                                <td className="py-2">5</td>
                                <td className="py-2">$10</td>
                            </tr>
                            <tr className="border-b-2">
                                <td className="px-4 py-4 font-semibold text-xl">Hoodie</td>
                                <td className="py-2">XXL</td>
                                <td className="py-2">5</td>
                                <td className="py-2">$10</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="flex justify-end mt-2">
                        <table className="w-1/3">
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2 text-xl font-semibold">Subtotal:</td>
                                    <td className="px-4 py-2">$30</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="px-4 py-2 text-xl font-semibold">Shipping:</td>
                                    <td className="px-4 py-2">$0</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-xl font-semibold">Total:</td>
                                    <td className="px-4 py-2">$30</td>
                                </tr>
                                {/* You can add more rows for additional calculations */}
                            </tbody>
                        </table>
                    </div>

                </div> 
                {/* button */}
                <div className="cursor-pointer border-2 border-black rounded-xl px-8 py-2 inline-block">
                    <ArrowBackIosIcon/>
                    <span className="inline-block">Continue Shopping</span>
                </div>
            </motion.div>
    )
}

export default LeftPart;