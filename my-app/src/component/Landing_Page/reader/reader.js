import React from 'react'



const Reader = () => {






    return (
        <>

            {/* ==========================Reader Section============================================== */}
            <div className="Learn-Problem-Solving-container">
                <div>
                    <h1 className="Reviews-from-readers">Reviews from readers</h1>
                    <div className="Create-custom-landin Create-custom-landin-mobile-view">Create custom landing pages with Omega that converts more visitors than any website.</div>
                </div>
                <div>
                    <div className="row mobile-card-view">
                        <div class="col-sm-4 col-xs-4 card-reader">
                            <div class="card rdr_card" >
                                <div class="card-body">

                                    <div class="card-title d-flex flex-row">
                                        <div ><img
                                            src={
                                                process.env.PUBLIC_URL + "/assets/images/colorstart.png"
                                            } /></div>
                                        <div ><img
                                            src={
                                                process.env.PUBLIC_URL + "/assets/images/colorstart.png"
                                            } /></div>
                                        <div><img
                                            src={
                                                process.env.PUBLIC_URL + "/assets/images/colorstart.png"
                                            } /></div>
                                        <div><img
                                            src={
                                                process.env.PUBLIC_URL + "/assets/images/colorstart.png"
                                            } /></div>
                                    </div>

                                    <p class="card-text Must-have-book-for-s">Must have book for students, who want to be Product Designer, UX Designer, or Interaction Designer.</p>


                                    <div class=" card-link d-flex flex-row">
                                        <div class="p-2 Oval"></div>
                                        <div class="p-2 Trashae-Hubbard">Trashae Hubbard</div>


                                    </div>
                                    <div className=" From-Amazoncom" style={{ marginLeft: "56px" }}>From Amazon.com</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-xs-4 card-reader2 ">
                            <div class="card rdr_card" >
                                <div class="card-body">

                                    <div class="card-title d-flex flex-row">
                                        <div ><img
                                            src={
                                                process.env.PUBLIC_URL + "/assets/images/colorstart.png"
                                            } /></div>
                                        <div ><img
                                            src={
                                                process.env.PUBLIC_URL + "/assets/images/colorstart.png"
                                            } /></div>
                                        <div><img
                                            src={
                                                process.env.PUBLIC_URL + "/assets/images/colorstart.png"
                                            } /></div>
                                        <div><img
                                            src={
                                                process.env.PUBLIC_URL + "/assets/images/colorstart.png"
                                            } /></div>
                                    </div>

                                    <p class="card-text Must-have-book-for-s">Must have book for students, who want to be Product Designer, UX Designer, or Interaction Designer.</p>


                                    <div class=" card-link d-flex flex-row">
                                        <div class="p-2 Oval"></div>
                                        <div class="p-2 Trashae-Hubbard">Trashae Hubbard</div>


                                    </div>
                                    <div className=" From-Amazoncom" style={{ marginLeft: "56px" }}>From Amazon.com</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-xs-4 card-reader3">
                            <div class="card rdr_card" >
                                <div class="card-body">

                                    <div class="card-title d-flex flex-row">
                                        <div ><img
                                            src={
                                                process.env.PUBLIC_URL + "/assets/images/colorstart.png"
                                            } /></div>
                                        <div ><img
                                            src={
                                                process.env.PUBLIC_URL + "/assets/images/colorstart.png"
                                            } /></div>
                                        <div><img
                                            src={
                                                process.env.PUBLIC_URL + "/assets/images/colorstart.png"
                                            } /></div>
                                        <div><img
                                            src={
                                                process.env.PUBLIC_URL + "/assets/images/colorstart.png"
                                            } /></div>
                                    </div>

                                    <p class="card-text Must-have-book-for-s">Must have book for students, who want to be Product Designer, UX Designer, or Interaction Designer.</p>


                                    <div class=" card-link d-flex flex-row">
                                        <div class="p-2 Oval"></div>
                                        <div class="p-2 Trashae-Hubbard">Trashae Hubbard</div>


                                    </div>
                                    <div className=" From-Amazoncom" style={{ marginLeft: "56px" }}>From Amazon.com</div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
                <div className="check-review">
                    <a href="#" >Check all 3,583 reviews on Amazon.com</a>

                </div>
                {/* ==========================Author Section========================================== */}
                <div>
                <div className="check-review">
                    <h1 className="About-the-author">About the author</h1>
                </div>
                <div className=" row">
                    <div class="col-sm-4 col-xs-4 " style={{ left: "98px" }}>
                        <div className="Author_profile">
                            <img style={{ width: "244px" }}
                                src={
                                    process.env.PUBLIC_URL + "/assets/images/author.png"
                                } />
                        </div>
                    </div>
                    <div class="col-sm-8 col-xs-8 " style={{ top: "55px" }}>
                        <div className="Joseph-Williams">Joseph Williams</div>
                        <div className="Hey-My-name-is-Jose">
                            Hey! My name is Joseph Williams and I'm a product designer based in Berlin. Most recently I led the design of multiple products at WeWork and prior to that I worked with startups building their products and design culture.
                        <br /><br />

Previous products I built for the design community are used by tens of thousands of designers working at companies like Google, Airbnb, Netflix and Boeing. Products I built or designed are featured in Wired, TechCrunch, Forbes, Quartz, Smashing Magazine, Awwwards and more.
<br /><br />
Reach me on Twitter or Email.
                        </div>
                    </div>

                </div>

                </div>
            </div>


        </>
    )
}

export default Reader