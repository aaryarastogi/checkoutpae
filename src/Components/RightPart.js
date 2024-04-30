import React, { useState } from "react";
import { Button, TextField, styled } from "@mui/material";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import {motion} from 'framer-motion'

const StyledButton=styled(Button)`
    padding:1rem 2rem;
    border-radius:10px;
    margin-top:2rem;
    color:white;
    cursor:pointer 
    font-weight:900;
    font-size:16px;
    text-decoration:italic;
    align-items:center;
    justify-content:center;
    display:inline-block;
`


const RightPart=()=>{

    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const monthOptions = Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
        <option key={month} value={month}>{month}</option>
    ));

    const currentYear = new Date().getFullYear();
    const yearOptions = Array.from({ length: 10 }, (_, i) => currentYear + i).map((year) => (
        <option key={year} value={year}>{year}</option>
    ));

    return(
        <motion.div 
            initial={{
                x:100,
                y:-10,
                scale:0.5,
                opacity:0
            }}
            whileInView={{ opacity: 1, x:0, y:0, scale:1}}
            exit={{
              x:100,
                y:-10,
                scale:0.5,
                opacity:0
            }}
            transition={{
              ease:"easeInOut",
              duration:2,
            }}
            className="bg-background rounded-md md:mx-16 mt-4 md:w-auto w-full lg:mx-32 h-full">
                <h1 className="font-serif font-bold text-4xl text-white p-4 text-start border-b border-gray-600">Payment Info.</h1>
                <h3 className="text-start text-white py-2 px-4 font-semibold">Payment Method</h3>
                <div className="flex flex-row gap-4 p-4 border-b border-gray-600">
                    <h2 className="flex items-center text-white font-semibold italic text-2xl border-2 border-gray-600 hover:border-white cursor-pointer rounded-3xl p-4">Paypal</h2>
                    <h2 className="text-white font-semibold italic text-2xl border-2 border-gray-600 hover:border-white cursor-pointer rounded-3xl p-4"><CreditCardIcon/> Credit Card</h2>
                </div>
                <div className="text-start pt-4 px-4">
                    <TextField label="Name on Card" variant="standard" InputLabelProps={{ style: { color: 'white' } }} inputProps={{ style: { color: 'white' } }} InputProps={{ style: { borderBottom: '1px solid white' } }} />
                </div>
                <div className="text-start pt-4 px-4">
                    <TextField label="Card Number" variant="standard" InputLabelProps={{ style: { color: 'white' } }} inputProps={{ style: { color: 'white' } }} InputProps={{ style: { borderBottom: '1px solid white' } }} />
                </div>
                <h3 className="font-semibold text-white p-4 text-start">Expiration Date</h3>
               
                <div className="px-4 text-start cursor-pointer flex flex-row justify-between">
                    <div>
                        <select value={selectedMonth} onChange={handleMonthChange} className="mr-2 outline-none p-1 rounded-md bg-transparent border-b border-gray-400 text-white">
                            <option value="">MM</option>
                            {monthOptions}
                        </select>
                        <select value={selectedYear} onChange={handleYearChange} className="mr-2 outline-none p-1 rounded-md bg-transparent border-b border-gray-400 text-white">
                            <option value="">YYYY</option>
                            {yearOptions}
                        </select>
                    </div>
                    <div>
                        <input placeholder="CVV" className="bg-transparent border-b border-gray-400 outline-none text-white" type="number"></input>
                    </div>
                </div>
                <StyledButton variant="contained">Check Out</StyledButton>
            </motion.div>
    )
}

export default RightPart;