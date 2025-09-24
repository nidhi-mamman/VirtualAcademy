import syntax from '../images/syntax.png'
import aischool from '../images/aischool.png'
import techcadd from '../images/tce.png'


const logos = [
    { src: syntax, delay: 0 },
    { src: aischool, delay: 100 },
    { src: techcadd, delay: 200 },
   
]

const Brands = () => {
    return (
        <>

            {/* Logos section (unchanged) */}
            <div className="py-5">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 id="teamHeading" className="fw-bold display-6 mb-2 text-dark" >Our Branding Partners</h2>
                        <div aria-hidden="true" className="mx-auto" style={{ width: 120, height: 12, background: "radial-gradient(60px 6px at 60px 6px, rgba(2,6,23,.25), rgba(2,6,23,.12) 60%, rgba(0,0,0,0) 61%)" }} />
                    </div>

                    <div className="row row-cols-2 row-cols-md-3 g-4 justify-content-center align-items-center">
                        {logos.map((logo, index) => (
                            <div key={index} className="col text-center">
                                <img
                                    src={logo.src}
                                    alt={`brand-${index}`}
                                    className="img-fluid brand-logo"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <style>{`
                    .brand-logo {
                        max-width: 160px;
                        height: auto;
                        object-fit: contain;
                    }
                `}</style>
            </div>
        </>
    )
}

export default Brands