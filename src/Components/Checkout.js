import React, { useState } from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

const Checkout=()=>{

    return(
        <div className="grid md:grid-cols-2">
            {/* leftpart */}
            <LeftPart/>
            {/* rightpart */}
            <RightPart/>
        </div>
    )
}
 
export default Checkout;