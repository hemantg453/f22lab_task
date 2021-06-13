import React from 'react'



const Footer = () => {






    return (
        <div className="container">
            <div class="row" >
                <div class="col-sm-4 col-xs-4 brand_logo "><img
                    src={
                        process.env.PUBLIC_URL + "/assets/images/omega.png"
                    } /></div>
                    
                <div class="col-sm-4 col-xs-4 footer_mdd_sec">
                    <span className="footer_mdd1">Support</span>
                    <span className="footer_mdd2">Privacy Policy</span>
                    <span className="mdd3">Terms and Condition</span>
                </div>
                <div class="col-sm-4 col-xs-4 footer_rght_btn ">© 2020 UXTheme, All Rights Reserved</div>
            </div>
        </div>
    )
}

export default Footer