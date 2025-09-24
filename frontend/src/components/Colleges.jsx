import gna from '../images/gna.png'
import shimt from '../images/shimt.avif'
import lkc from '../images/lkc.png'
import rayat from '../images/rayat.jpeg'
import nit from '../images/nit.png'
import pcbt from '../images/pcbt.png'


const Colleges = () => {
    return (
        <>

            {/* Logos section (unchanged) */}
            <div className="py-5">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 id="teamHeading" className="fw-bold display-6 mb-2 text-dark" >Our Partner Colleges</h2>
                        <div aria-hidden="true" className="mx-auto" style={{ width: 120, height: 12, background: "radial-gradient(60px 6px at 60px 6px, rgba(2,6,23,.25), rgba(2,6,23,.12) 60%, rgba(0,0,0,0) 61%)" }} />
                    </div>

                    <div className="row  row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 justify-content-center align-items-center">
                        <div className="col"><img src={lkc} alt="" className='img-fluid college-logo' /></div>
                        <div className="col"><img src={gna} alt="" className='img-fluid college-logo' /></div>
                        <div className="col"><img src={shimt} alt="" className='img-fluid college-logo' /></div>
                        <div className="col"><img src={nit} alt="" className='img-fluid college-logo' /></div>
                        <div className="col"><img src={rayat} alt="" className='img-fluid college-logo' /></div>
                        <div className="col"><img src={pcbt} alt="" className='img-fluid college-logo' /></div>
                    </div>
                </div>

                <style>{`
                    .college-logo {
                        max-width: 180px;
                        height: auto;
                        object-fit: contain;
                        display: block;
                        margin: 0 auto;
                    }
                `}</style>
            </div>
        </>
    )
}

export default Colleges