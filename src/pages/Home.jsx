export const Home=()=>{
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>
                                Lumiq's Claim Managment System(CMS)
                            </p>
                            <h1>Hope you get benefited</h1>
                            <p>
                                
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">connect now</button>
                                </a>
                                <a href="/services">
                                    <button className="btn secondary-btn">learn more</button>
                                </a>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img
                             src="Health_claim_home.jpg" 
                             alt="lets code"
                             width="400" 
                             height="300"/>
                        </div>
                    </div>
                </section>
            </main>
            <section className="section-analytics">
                <div className="container grid grid-four-cols"style={{ backgroundColor: 'black' }}>
                    <div className="div1">
                        <h2>50</h2>
                        <p>Total registeration</p>
                    </div>
                    <div className="div1">
                        <h2>35</h2>
                        <p>Comapany registerations</p>
                    </div>
                    <div className="div1">
                        <h2>30</h2>
                        <p>Companies Enrolled</p>
                    </div>
                    <div className="div1">
                        <h2>30</h2>
                        <p>Completed Registrations</p>
                    </div>
                </div>
            </section>
            <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-image">
                                <img
                                src="Health_claim_home.jpg" 
                                alt="lets code"
                                width="400" 
                                height="300"/>
                            </div>
                        </div>
                        <div className="hero-content">
                            <p>
                                We are proud of you.
                            </p>
                            <h1>This is my first project on cms </h1>
                            <p>
                                !!!!!!!!!!!!!!!there you go !!!!!!!!!!!!!!!!!!
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">connect now</button>
                                </a>
                                <a href="/services">
                                    <button className="btn secondary-btn">learn more</button>
                                </a>
                            </div>
                        </div>

                </section>

        
        </>
    )
}