import gna from '../images/gna.png'
import shimt from '../images/shimt.avif'
import lkc from '../images/lkc.png'
import rayat from '../images/rayat.jpeg'
import nit from '../images/nit.png'
import pcbt from '../images/pcbt.png'

const Colleges = () => {
    const logos = [rayat, nit, pcbt, gna, shimt]; // adjust order as needed

    return (
        <div className="py-5">
            {/* Marquee container */}
            <div className="logo-marquee">
                <div className="logo-track">
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div className="logo-item" key={index}>
                            <div className="logo-wrapper">
                                <img src={logo} alt="" className="logo grayscale" />
                                <img src={logo} alt="" className="logo color" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
  .logo-marquee {
    overflow: hidden;
    width: 100%;
  }

  .logo-track {
    display: flex;
    gap: 100px;
    animation: scrollLeft 30s linear infinite;
  }

  .logo-item {
    flex: 0 0 auto;
  }

  .logo-wrapper {
    position: relative;
    width: 150px;
    height: 150px;
    overflow: hidden;
  }

  .logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.5s ease, filter 0.5s ease;
    position: absolute;
    top: 0;
    left: 0;
  }

  .grayscale {
    filter: grayscale(100%);
    z-index: 1;
  }

  .color {
    transform: translateY(-100%);
    z-index: 2;
  }

  .logo-wrapper:hover .grayscale {
    transform: translateY(100%);
  }

  .logo-wrapper:hover .color {
    transform: translateY(0);
  }

  @keyframes scrollLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-33.333%); } /* move by 1/3 for 3x duplicated logos */
  }
`}</style>

        </div>
    );
};

export default Colleges;
