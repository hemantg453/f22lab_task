import React from 'react'



const Price = () => {






    return (
      
      <>
      
      <div className="BG" >
            <div className="Pricing-Plans">
                Pricing & plans
            </div>
            <div className="Create-custom-landin">
                Create custom landing pages with Omega that converts more visitors than any website.
            </div>
            {/* =======================CARDS========================================== */}
            <div className="row">
                <div class="col-sm-4 col-xs-4">
                    <div class="card card-width">
                        <div class="card-body">
                            <h5 class="card-title Limited"><a href="#">Limeted</a></h5>
                            <h6 class="card-subtitle mb-2 text-muted Free">Free</h6>
                            <p class="card-text Get-a-free-chapter-o1"><span className="Get-the-eBook-versio">Get a free chapter of your book right now</span></p>
                            <button type="button" class="btn btn-light btn-block"><span className="Email-address">Send Email Address</span></button>
                            <button type="button" class="btn btn-block btn-primary send free chapter"><span className="Send-free-chapter-but">Send free chapter</span></button>

                        </div>
                    </div>
                </div>

                <div class="col-sm-4 col-xs-4">
                    <div class="card card-height1 card-width">
                        <div class="card-body">
                            <h5 class="card-title only-e-book"><a href="#">only e-book</a></h5>
                            <h6 class="card-subtitle mb-2 text-muted Free">$29</h6>
                            <h6 className="One-time-purchase">One-time-purchase</h6>
                            <p class="card-text Get-a-free-chapter-o1"><span className="Get-the-eBook-versio">Get the eBook version + Audio version of the book.</span></p>

                            <button type="button" class="btn btn-block btn-danger send free chapter"><span className="Send-free-chapter-but">Send free chapter</span></button>

                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-xs-4">
                    <div class="card card-height1 card-width">
                        <div class="card-body">
                            <h5 class="card-title everything"><a href="#">Everything</a></h5>
                            <h6 class="card-subtitle mb-2 text-muted Free">$49</h6>
                            <h6 className="One-time-purchase">One-time-purchase</h6>
                            <p class="card-text Get-a-free-chapter-o1"><span className="Get-the-eBook-versio">Hardcover + eBook version + Audio version of the book.</span></p>

                            <button type="button" class="btn btn-block btn-danger send free chapter"><span className="Send-free-chapter-but">Send free chapter</span></button>

                        </div>
                    </div>
                </div>
            </div>
            {/* =========================CARDS END============================================== */}
            {/* =============================qna section ===================================== */}

            <div className="row">
            <div class="col-sm-6 col-xs-6">
            <div className="row" style={{width:"450px",marginTop:"106px"}}>
                <div class="col-sm-1 col-xs-1 ">
                    <span className="Oval"><img
                        src={
                            process.env.PUBLIC_URL + "/assets/images/tail-right.png"
                        } /></span>
                   
                </div>
                <div class="col-sm-11 col-xs-11 qna " >
                <div className="Can-I-use-Omega-for" >
                        Can I use Omega for my clients?
                    </div>
                    <div className="Absolutely-The-Enva">
                        Absolutely. The Envato Theme license allows you to build a websites for personal use or for a client. User Omega for your clients.
                    </div>
                </div>
            </div>

            <div className="row" style={{width:"450px",marginTop:"106px"}}>
                <div class="col-sm-1 col-xs-1 topmargin">
                    <span className="Oval"><img
                        src={
                            process.env.PUBLIC_URL + "/assets/images/tail-right.png"
                        } /></span>
                   
                </div>
                <div class="col-sm-11 col-xs-11 topmargin">
                <div className="Can-I-use-Omega-for" >
                Does it work with WordPress?
                    </div>
                    <div className="Absolutely-The-Enva">
                        Absolutely. The Envato Theme license allows you to build a websites for personal use or for a client. User Omega for your clients.
                    </div>
                </div>
            </div>

                </div>
            <div class="col-sm-6 col-xs-6">
                <div className="row" style={{width:"450px",marginTop:"106px"}}>
                <div class="col-sm-1 col-xs-1 ">
                    <span className="Oval"><img
                        src={
                            process.env.PUBLIC_URL + "/assets/images/tail-right.png"
                        } /></span>
                   
                </div>
                <div class="col-sm-11 col-xs-11 qna ">
                <div className="Can-I-use-Omega-for" >
                Do I get free updates?
                    </div>
                    <div className="Absolutely-The-Enva">
                        Absolutely. The Envato Theme license allows you to build a websites for personal use or for a client. User Omega for your clients.
                    </div>
                </div>
            </div>

            <div className="row" style={{width:"450px",marginTop:"106px"}}>
                <div class="col-sm-1 col-xs-1 topmargin">
                    <span className="Oval"><img
                        src={
                            process.env.PUBLIC_URL + "/assets/images/tail-right.png"
                        } /></span>
                   
                </div>
                <div class="col-sm-11 col-xs-11 topmargin">
                <div className="Can-I-use-Omega-for" >
                Will you provide support?
                    </div>
                    <p className="Absolutely-The-Enva">
                        Absolutely. The Envato Theme license allows you to build a websites for personal use or for a client. User Omega for your clients.
                    </p>
                </div>
            </div>

                </div>
            </div>
          
            {/* =============================qna section ===================================== */}
        </div>
    
    
    {/* // ===========================LEARN PROBLEM SOLVING============================================== */}
    <div  >
        <div className="Learn-Problem-Solving-container">
            <div className="row">
            <div class="col-sm-8 col-xs-8">
            <h1 ><span className="Learn-problem-solvin">Learn Problem Solving</span></h1>
            <div className="Create-custom-landin-pages-omega">Create custom landing pages with Omega that converts more visitors than any website.</div>
                </div>
                <div class="col-sm-4 col-xs-4 btnprice">
                <button type="button" class="btn btn-danger" >Get this book</button>
                </div>
            </div>
           

        </div>
    </div>
    </>
    )
}

export default Price