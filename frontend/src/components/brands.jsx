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