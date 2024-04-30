import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton } from "@mui/material";

const Navbar=()=>{
    return(
        <div className="flex flex-row justify-between p-4 md:gap-0 gap-2">
            <h1 className="font-bold text-2xl cursor-pointer font-serif">Daily</h1>
            <div className="flex flex-row bg-gray-200 rounded-md md:w-56 w-auto md:p-2 p-1 md:ml-96">
                <input placeholder="Search" className="bg-transparent text-gray-600 rounded-md outline-none"/>
                <SearchIcon className="cursor-pointer"/>
            </div>
            <div className="flex flex-row md:gap-4">
                <IconButton><ShoppingCartIcon/></IconButton>
                <IconButton><MenuIcon/></IconButton>
            </div>
        </div>
    )
}

export default Navbar;