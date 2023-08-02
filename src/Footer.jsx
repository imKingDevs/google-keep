import React from "react";

const Footer = () => {

    const year = new Date().getFullYear();

    return(
        <>
            <div className="footer">
                <span>
                    {`Copyrights © ${year}`}
                </span>
            </div>
        </>
    )
}

export default Footer;