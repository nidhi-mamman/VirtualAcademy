import React from "react";
import p1 from "../images/pavli.png";
import p2 from "../images/ravi.png";
import p3 from "../images/ritish.png";
import p4 from "../images/hr1.png";
import p5 from "../images/palak.png";
import p6 from "../images/ragini.png";
import p7 from "../images/gourav.png";
import p8 from "../images/ruchika.png";

const members = [
    { src: p7, name: "Mr.Gourav Gupta", role: "CEO & Founder" },
    { src: p4, name: "Ms.Asmita Sehgal", role: "Realtionship Manager" },
    { src: p5, name: "Ms.Palak Thaper", role: "Business Head" },
    { src: p8, name: "Ms.Ruchika Sharma", role: "Creative Head" },
    { src: p2, name: "Mr.Ravi", role: " Developer Head" },
    { src: p1, name: "Ms.Pavli Sharma", role: "Cyber Security Head" },
    { src: p3, name: "Mr.Ritish", role: "Technical Head" },
    { src: p6, name: "Ms.Ragini", role: "Cloud Manager" },
];

const Team = () => (
    <section className="py-5" aria-labelledby="teamHeading">
        <div className="container">
            <div className="text-center mb-4">
                <h2 id="teamHeading" className="fw-bold display-6 mb-2 text-dark">Our Management Team</h2>
                <div aria-hidden="true" className="mx-auto" style={{ width: 120, height: 12, background: "radial-gradient(60px 6px at 60px 6px, rgba(2,6,23,.25), rgba(2,6,23,.12) 60%, rgba(0,0,0,0) 61%)" }} />
            </div>
            <div className="row g-4 justify-content-center">
                {members.map((m, idx) => (
                    <div className="col-12 col-sm-6 col-lg-3 text-center" key={idx}>
                        <div className="mx-auto mb-3" style={{ width: "clamp(150px, 20vw, 200px)", aspectRatio: "1/1", borderRadius: "50%", overflow: "hidden", border: "4px solid rgba(0,0,0,.20)", boxShadow: "0 10px 25px rgba(2,6,23,.1)", background: "#f3f4f6" }}>
                            <img src={m.src} alt={m.name} className="w-100 h-100" style={{ objectFit: "cover" }} loading="lazy" />
                        </div>
                        <div className="fw-bold" style={{ fontSize: "1.1rem" }}>{m.name}</div>
                        <div className="text-muted" style={{ fontSize: ".95rem" }}>{m.role}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Team;
