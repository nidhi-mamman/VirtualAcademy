// 24x7 Section styled like screenshot

import React, { useEffect } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import '../category-fix.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import team from '../images/teamvtc.png'
// Assets
import faq from "../images/bgremove.png";
import career from "../images/career.png";
import ps from "../images/ps.png";
import doubt from "../images/doubt.png";
import rp from "../images/rp.png";
import o1 from "../images/o1.png";
import o2 from "../images/o2.png";
import o3 from "../images/o3.png";
import o4 from "../images/o4.png";
import whyus from '../images/whyus.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import Brands from './brands'
import Slider from "./slider";
import Colleges from "./Colleges";

const SoftwareEngineeringCourse = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const Section24x7 = () => (
    <section className="section-24x7 py-5" style={{ background: '#f6f8fb' }}>
      <div className="container">
        <div className="row justify-content-center g-4">
          {/* 24x7 Doubt Support */}
          <div className="col-12 col-md-4 d-flex">
            <div className="card-24x7 flex-fill text-center p-4 rounded-4 shadow-sm bg-white h-100" style={{ border: 'none' }}>
              <div className="icon-24x7 mb-3 mx-auto d-flex align-items-center justify-content-center rounded-3" style={{ width: 64, height: 64, background: '#eef3fa' }}>
                {/* Doubt SVG (question mark) */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="1.8" /><path d="M12 16v-1.5" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" /><path d="M12 8a2 2 0 0 1 2 2c0 1.333-2 2-2 2" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </div>
              <h5 className="fw-bold mb-2">24x7 Doubt Support</h5>
              <div className="text-muted small">Get instant help with your doubts<br />anytime, anywhere</div>
            </div>
          </div>
          {/* 200+ Live Hours */}
          <div className="col-12 col-md-4 d-flex">
            <div className="card-24x7 flex-fill text-center p-4 rounded-4 shadow-sm bg-white h-100" style={{ border: 'none' }}>
              <div className="icon-24x7 mb-3 mx-auto d-flex align-items-center justify-content-center rounded-3" style={{ width: 64, height: 64, background: '#eef3fa' }}>
                {/* Live SVG (clock) */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="1.8" /><path d="M12 7v5l3 3" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </div>
              <h5 className="fw-bold mb-2">200+ Live Hours</h5>
              <div className="text-muted small">Engage in 200+ hours of live<br />interactive sessions</div>
            </div>
          </div>
          {/* 500+ Students */}
          <div className="col-12 col-md-4 d-flex">
            <div className="card-24x7 flex-fill text-center p-4 rounded-4 shadow-sm bg-white h-100" style={{ border: 'none' }}>
              <div className="icon-24x7 mb-3 mx-auto d-flex align-items-center justify-content-center rounded-3" style={{ width: 64, height: 64, background: '#eef3fa' }}>
                {/* Students SVG (users) */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#2563eb" strokeWidth="1.8" /><path d="M4 20v-2a6 6 0 0 1 12 0v2" stroke="#2563eb" strokeWidth="1.8" /><circle cx="18" cy="16" r="2" stroke="#2563eb" strokeWidth="1.8" /><path d="M16 20v-1a4 4 0 0 1 4 0v1" stroke="#2563eb" strokeWidth="1.8" /></svg>
              </div>
              <h5 className="fw-bold mb-2">500+ Students</h5>
              <div className="text-muted small">Join a thriving community of<br />500+ successful students</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .section-24x7 .card-24x7 {
          transition: box-shadow 0.2s, background 0.3s, color 0.3s;
        }
        .section-24x7 .card-24x7:hover {
          background: linear-gradient(120deg, #73328e 0%, #5a276f 100%) !important;
          color: #fff !important;
        }
        .section-24x7 .card-24x7:hover h5,
        .section-24x7 .card-24x7:hover .text-muted,
        .section-24x7 .card-24x7:hover .icon-24x7 svg {
          color: #fff !important;
          fill: #fff !important;
          stroke: #fff !important;
        }
        .section-24x7 .card-24x7 .icon-24x7 svg {
          transition: stroke 0.3s, fill 0.3s;
        }
        @media (max-width: 767px) {
          .section-24x7 .card-24x7 { margin-bottom: 1.5rem; }
        }
      `}</style>
    </section>
  );
  const BRAND = {
    primary: "#73328e",          // brand color
    secondary: "#5a276f",
    light: "#f8f9fa",
    dark: "#111827",
    gradPrimary: "linear-gradient(135deg, #73328e 0%, #5a276f 100%)",
    gradDark: "linear-gradient(135deg, #441d55ff 0%, #301539 100%)",
  };

  // ------------ HERO ----------------//
  const Hero = () => {
    const [studentname, setstudentname] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [location, setlocation] = useState('');
    const [course, setcourse] = useState('');
    const [otherCourse, setOtherCourse] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: "", msg: "" });

    // dropdown options
    const COURSE_OPTIONS = [
      "Data Science",
      "Data Analytics",
      "Digital Marketing",
      "CyberSecurity",
      "Ui/Ux",
      "Artificial Intelligence",
      "Web Designing",
      "Cloud Computing",
      "Web Development",
      "Others",
    ];

    // configurable API base (env → origin:9000 → hardcoded fallback)
    const API_BASE =
      import.meta?.env?.VITE_API_URL ||
      (typeof window !== "undefined"
        ? `${window.location.protocol}//${window.location.hostname}:9000`
        : "http://13.201.118.47:9000");

    const send = async (e) => {
      e.preventDefault();
      setStatus({ type: "", msg: "" });

      // basic validation
      if (!studentname || !phone || !email || !course) {
        setStatus({ type: "error", msg: "Please fill all required fields." });
        return;
      }
      // for Others, ensure a value is entered
      const resolvedCourse = course === "Others" ? otherCourse.trim() : course;
      if (course === "Others" && !resolvedCourse) {
        setStatus({ type: "error", msg: "Please type your course in the field below." });
        return;
      }

      // simple email/phone sanity checks (won't block legit edge cases)
      const phoneOk = /^[0-9()+\-\s]{7,20}$/.test(phone);
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!phoneOk) return setStatus({ type: "error", msg: "Enter a valid contact number." });
      if (!emailOk) return setStatus({ type: "error", msg: "Enter a valid email address." });

      try {
        setSubmitting(true);
        const rr = await fetch(`${API_BASE}/studentdata`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            studentname,
            contact: phone,
            email,
            location,
            course: resolvedCourse,
          }),
        });

        // always attempt to read JSON; handle non-2xx too
        const result = await rr.json().catch(() => ({}));

        if (rr.ok && result.statuscode === 1) {
          setStatus({ type: "success", msg: "Data sent. We will contact you soon." });
          setstudentname('');
          setphone('');
          setemail('');
          setlocation('');
          setcourse('');
          setOtherCourse('');
        } else {
          const msg = result?.message || `Failed to submit (code ${rr.status}).`;
          setStatus({ type: "error", msg });
        }
      } catch (err) {
        setStatus({ type: "error", msg: "Server error. Try again." });
      } finally {
        setSubmitting(false);
      }
    };

    const headerRef = React.useRef(null);
    const cursorRef = React.useRef(null);

    React.useEffect(() => {
      const el = headerRef.current;
      if (!el) return;
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

      const move = (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;

        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${e.clientX - rect.left - 120}px, ${e.clientY - rect.top - 120}px)`;
        }

        el.style.setProperty("--p1x", `${dx * 0.03}px`);
        el.style.setProperty("--p1y", `${dy * 0.03}px`);
        el.style.setProperty("--p2x", `${dx * 0.06}px`);
        el.style.setProperty("--p2y", `${dy * 0.06}px`);
        el.style.setProperty("--p3x", `${dx * -0.04}px`);
        el.style.setProperty("--p3y", `${dy * -0.04}px`);
      };

      const leave = () => {
        el.style.setProperty("--p1x", `0px`);
        el.style.setProperty("--p1y", `0px`);
        el.style.setProperty("--p2x", `0px`);
        el.style.setProperty("--p2y", `0px`);
        el.style.setProperty("--p3x", `0px`);
        el.style.setProperty("--p3y", `0px`);
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(-9999px, -9999px)`;
        }
      };

      if (!isTouch) {
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseleave", leave);
      }
      return () => {
        if (!isTouch) {
          el.removeEventListener("mousemove", move);
          el.removeEventListener("mouseleave", leave);
        }
      };
    }, []);

    return (
      <header
        ref={headerRef}
        id="home"
        className="position-relative overflow-hidden header-gradient sticky-top"
        style={{
          color: "#fff",
          minHeight: "520px",
          "--p1x": "0px",
          "--p1y": "0px",
          "--p2x": "0px",
          "--p2y": "0px",
          "--p3x": "0px",
          "--p3y": "0px",
        }}
      >
        {/* CSS gradient animation only */}
        <style>{`
        .header-gradient {
          background: linear-gradient(
            135deg,
            #1a237e,
            #512da8,
            #8e24aa,
            #e040fb
          );
          background-size: 300% 300%;
          animation: gradientShift 12s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-glass {
          background: rgba(255,255,255,0.18);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.18);
          backdrop-filter: blur(12px);
          border-radius: 24px;
          border: 1.5px solid rgba(255,255,255,0.22);
        }
        .cursor-spot {
          width: 240px;
          height: 240px;
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(closest-side, rgba(255,255,255,0.25), rgba(255,255,255,0) 70%);
          filter: blur(10px);
          mix-blend-mode: screen;
          transition: transform 80ms ease-out;
        }
      `}</style>
        {/* Vibrant SVG shapes for hero background with movement */}
        <svg width="100%" height="100%" viewBox="0 0 1440 520" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
          <defs>
            <radialGradient id="heroGlow1" cx="50%" cy="50%" r="70%" fx="50%" fy="50%" gradientTransform="rotate(20)">
              <stop offset="0%" stopColor="#a259e6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#73328e" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="heroGlow2" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#5a276f" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#73328e" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="heroWave" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#73328e" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Top left glow */}
          <circle cx="220" cy="80" r="180" fill="url(#heroGlow1)" className="svg-anim svg-glow1" />
          {/* Bottom right glow */}
          <circle cx="1300" cy="420" r="220" fill="url(#heroGlow2)" className="svg-anim svg-glow2" />
          {/* Decorative wave */}
          <path d="M0 400 Q 400 500 900 400 T 1440 420 V520 H0Z" fill="url(#heroWave)" className="svg-anim svg-wave" />
          {/* Small accent shapes */}
          <ellipse cx="320" cy="320" rx="32" ry="14" fill="#fff" opacity="0.10" className="svg-anim svg-ellipse1" />
          <ellipse cx="1200" cy="120" rx="22" ry="10" fill="#fff" opacity="0.13" className="svg-anim svg-ellipse2" />
          <circle cx="700" cy="100" r="18" fill="#fff" opacity="0.09" className="svg-anim svg-circle1" />
        </svg>
        <style>{`
          .svg-anim {
            transition: transform 0.7s cubic-bezier(.23,1,.32,1);
            will-change: transform;
          }
          .svg-glow1 { animation: moveGlow1 6s ease-in-out infinite alternate; }
          .svg-glow2 { animation: moveGlow2 7s ease-in-out infinite alternate; }
          .svg-wave { animation: moveWave 8s ease-in-out infinite alternate; }
          .svg-ellipse1 { animation: moveEllipse1 5s ease-in-out infinite alternate; }
          .svg-ellipse2 { animation: moveEllipse2 6s ease-in-out infinite alternate; }
          .svg-circle1 { animation: moveCircle1 7s ease-in-out infinite alternate; }
          @keyframes moveGlow1 { 0%{ transform: translateY(0) scale(1); } 100%{ transform: translateY(18px) scale(1.04); } }
          @keyframes moveGlow2 { 0%{ transform: translateY(0) scale(1); } 100%{ transform: translateY(-22px) scale(1.03); } }
          @keyframes moveWave { 0%{ transform: translateY(0); } 100%{ transform: translateY(-12px); } }
          @keyframes moveEllipse1 { 0%{ transform: translateX(0); } 100%{ transform: translateX(16px); } }
          @keyframes moveEllipse2 { 0%{ transform: translateX(0); } 100%{ transform: translateX(-18px); } }
          @keyframes moveCircle1 { 0%{ transform: scale(1); } 100%{ transform: scale(1.12); } }
        `}</style>
        <style>{`
          /* Modern hero enhancements */
          .header-gradient {
            background: linear-gradient(120deg, #73328e 0%, #5a276f 100%);
          }
          .footer-gradient {
            background: linear-gradient(120deg, #73328e 0%, #5a276f 100%);
          }
          .hero-bg-gradient {
            background: linear-gradient(120deg, #73328e 0%, #5a276f 100%);
            position: absolute;
            inset: 0;
            z-index: 0;
            opacity: 0.95;
          }
          .hero-glass {
            background: rgba(255,255,255,0.18);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 24px;
            border: 1.5px solid rgba(255,255,255,0.22);
            transition: box-shadow 0.3s;
          }
          .hero-glass:hover {
            box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.22);
          }
          .hero-badge {
            animation: heroBadgeFloat 3.2s ease-in-out infinite alternate;
            background: rgba(32,38,88,0.92);
            border: 1.5px solid rgba(255,255,255,.7);
            box-shadow: 0 2px 12px 0 rgba(32,38,88,0.08);
          }
          @keyframes heroBadgeFloat {
            0% { transform: translateY(0px) scale(1); }
            100% { transform: translateY(-8px) scale(1.04); }
          }
          .hero-fadein {
            opacity: 0;
            transform: translateY(30px);
            animation: heroFadeIn 1.2s cubic-bezier(.23,1,.32,1) 0.2s forwards;
          }
          @keyframes heroFadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .hero-slidein {
            opacity: 0;
            transform: translateX(-40px);
            animation: heroSlideIn 1.2s cubic-bezier(.23,1,.32,1) 0.4s forwards;
          }
          @keyframes heroSlideIn {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
  <div className="hero-bg-gradient" />
          /* Hero entrance animations (CSS only) */
          .hero-fade-in-left {
            opacity: 0;
            transform: translateX(-60px);
            animation: heroLeftIn 1.4s cubic-bezier(0.23, 1, 0.32, 1) 0.1s forwards;
          }
          .hero-fade-in-right {
            opacity: 0;
            transform: translateX(60px);
            animation: heroRightIn 1.4s cubic-bezier(0.23, 1, 0.32, 1) 0.1s forwards;
          }
          @keyframes heroLeftIn {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes heroRightIn {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes floatSlow { 0%{ transform: translate(-10px, 0px) scale(1);} 50%{ transform: translate(10px, -6px) scale(1.03);} 100%{ transform: translate(-10px, 0px) scale(1);} }
          @keyframes floatMedium { 0%{ transform: translate(6px, -4px) scale(1);} 50%{ transform: translate(-8px, 5px) scale(0.98);} 100%{ transform: translate(6px, -4px) scale(1);} }
          @keyframes floatFast { 0%{ transform: translate(-4px, 6px) scale(1);} 50%{ transform: translate(6px, -6px) scale(1.02);} 100%{ transform: translate(-4px, 6px) scale(1);} }
          @keyframes driftX { 0%{ transform: translateX(-2%);} 50%{ transform: translateX(2%);} 100%{ transform: translateX(-2%);} }
          .noise-overlay {
            background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/></filter><rect width='120' height='120' filter='url(%23n)' opacity='0.04'/></svg>");
            background-size: 200px 200px;
            mix-blend-mode: soft-light;
            opacity: .35;
          }
          .cursor-spot {
            width: 240px; height: 240px;
            border-radius: 50%;
            pointer-events: none;
            background: radial-gradient(closest-side, rgba(255,255,255,0.25), rgba(255,255,255,0) 70%);
            filter: blur(10px);
            mix-blend-mode: screen;
            transition: transform 80ms ease-out;
          }
          .parallax-1 { transform: translate(var(--p1x), var(--p1y)); will-change: transform; }
          .parallax-2 { transform: translate(var(--p2x), var(--p2y)); will-change: transform; }
          .parallax-3 { transform: translate(var(--p3x), var(--p3y)); will-change: transform; }
        `}</style>

        {/* background SVGs omitted here for brevity — keep your originals unchanged */}
        {/* ... keep your exact SVGs from your version ... */}

        <div className="position-absolute top-0 start-0 w-100 h-100 noise-overlay" style={{ zIndex: 0, pointerEvents: "none" }} />
        <div ref={cursorRef} className="cursor-spot position-absolute" style={{ zIndex: 0 }} aria-hidden="true" />

        <div className="container position-relative" style={{ zIndex: 1,paddingTop:"180px",paddingBottom:"50px" }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-7 hero-fadein">
              {/* left content unchanged */}
              <div className="mb-5 d-flex flex-wrap gap-2 text-white">
                {[
                  { text: "For Working Professional", icon: "👨‍💻" },
                  { text: "For College Students", icon: "🎓" },
                ].map((item, i) => (
                  <span
                    key={i}
                    className="badge rounded-pill d-flex align-items-center gap-2 hero-badge"
                    style={{
                      padding: "12px 18px",
                      background: "rgb(32, 38, 88)",
                      border: "1px solid rgba(255,255,255,.6)",
                      color: "#fff",
                      fontFamily: "sans-serif",
                      wordSpacing: "3px",
                      fontSize: "0.95rem",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                    {item.text}
                  </span>
                ))}
              </div>

              <div className="mb-3 d-flex flex-wrap gap-2">
                {["🚀 Beginner Batch", "⚡ Advanced Batch", "💼 Job Assistance"].map((t, i) => (
                  <span
                    key={i}
                    className="badge rounded-pill text-dark hero-badge"
                    style={{
                      background: "rgba(255,255,255,.85)",
                      border: "1px solid rgba(255,255,255,.6)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h1 className="fw-bold lh-sm display-5 hero-slidein">
                Welcome to the <br className="d-none d-md-block" />
                Future Education
              </h1>

              <ul className="mt-3 mb-4 ps-3 hero-fadein" style={{ animationDelay: '0.7s' }}>
                <li>Personalized 1:1 Mentorship</li>
                <li>Engaging live interactive classes</li>
                <li>Higher career opportunities</li>
              </ul>

              <div className="d-flex flex-wrap gap-3 hero-fadein" style={{ animationDelay: '1s' }}>
                <a href="#enroll" className="btn btn-light text-primary fw-semibold px-4 py-3">
                  🚀 Apply for Next Cohort
                </a>
              </div>
            </div>

            <div className="col-lg-5 hero-fadein" id="enroll" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white rounded-4 shadow-lg p-4" style={{ color: BRAND.dark }}>
                <h3 className="h4 fw-bold text-center mb-4">Start Your Tech Career Today</h3>

                <div className="d-flex align-items-center mb-3">
                  <div className="me-3 rounded bg-light d-inline-flex align-items-center justify-content-center" style={{ width: 42, height: 42 }}>
                    ⏱
                  </div>
                  <div>
                    <div className="fw-semibold">Duration</div>
                    <div className="text-muted small"> 2-9 Months</div>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="me-3 rounded bg-light d-inline-flex align-items-center justify-content-center" style={{ width: 42, height: 42 }}>
                    🎯
                  </div>
                  <div>
                    <div className="fw-semibold">Tracks</div>
                    <div className="text-muted small">Beginner /Intermediate/ Advanced</div>
                  </div>
                </div>

                <hr className="my-4" />

                <form id="enroll-form" onSubmit={send} noValidate style={{ scrollMarginTop: "90px" }}>
                  <h4 className="h6 fw-bold text-center mb-3">📞 Request Callback</h4>

                  <div className="row g-3">
                    <div className="col-sm-6">
                      <input
                        className="form-control"
                        placeholder="Student Name*"
                        required
                        value={studentname}
                        onChange={(e) => setstudentname(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        className="form-control"
                        type="tel"
                        placeholder="Contact Number*"
                        required
                        pattern="[0-9()+\\-\\s]{7,20}"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email*"
                        required
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setlocation(e.target.value)}
                      />
                    </div>

                    {/* Course select */}
                    <div className="col-12">
                      <select
                        className="form-select"
                        required
                        value={course}
                        onChange={(e) => setcourse(e.target.value)}
                        aria-label="Select Course"
                        title="Scroll to view more course"
                      >
                        <option value="">Select a course*</option>
                        {COURSE_OPTIONS.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <div className="form-text">Tip: Open the dropdown and scroll to see all courses.</div>
                    </div>

                    {/* When 'Others' selected, show extra field */}
                    {course === "Others" && (
                      <div className="col-12">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Please type your course*"
                          required
                          value={otherCourse}
                          onChange={(e) => setOtherCourse(e.target.value)}
                        />
                      </div>
                    )}

                    {status.msg && (
                      <div className={`col-12 alert ${status.type === "success" ? "alert-success" : "alert-danger"} mb-0`}>
                        {status.msg}
                      </div>
                    )}

                    <div className="col-12 d-grid mt-2">
                      <button
                        className="btn btn-primary py-2 fw-semibold"
                        style={{ backgroundColor: BRAND.primary, borderColor: BRAND.primary, opacity: submitting ? 0.8 : 1 }}
                        disabled={submitting}
                      >
                        {submitting ? "Submitting..." : "Request Callback"}
                      </button>
                    </div>
                    <p className="small text-muted text-center mt-2 mb-0">
                      By submitting, you agree to be contacted about the program.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>


        </div>
      </header>
    );
  };

  /** ---------------- HIGHLIGHTS ---------------- **/
  const Highlights = () => {
    // const navs = [
    //   "Live Classes",
    //   "Daily-Learning Modules",
    //   "Specialized Tracks",
    //   "Skill Development projects",
    //   "Career support",
    //   "Mock Interviews"
    // ];
    const slidesData = [
      {
        img: "assets/img/category/category_1_1.jpg",
        title: "Enhanced Cybersecurity",
        desc: "Advanced security measures like firewalls, encryption,",
      },
      {
        img: "assets/img/category/category_1_2.jpg",
        title: "Cloud Integration",
        desc: "Access to scalable cloud-based services for storage",
      },
      {
        img: "assets/img/category/category_1_3.jpg",
        title: "Customized Services",
        desc: "Tailored IT solutions designed to meet specific business needs.",
      },
      {
        img: "assets/img/category/category_1_4.jpg",
        title: "24/7 IT Support",
        desc: "Around-the-clock monitoring and troubleshooting.",
      },
      {
        img: "assets/img/category/category_1_5.jpg",
        title: "End-to-End Solution",
        desc: "Covers all aspects of IT, from consu-lting and planning",
      },
      {
        img: "assets/img/category/category_1_1.jpg",
        title: "Airbirds",
        desc: "Advanced security measures like firewalls, encryption,",
      },
      {
        img: "assets/img/category/category_1_2.jpg",
        title: "Enhanced Cybersecurity",
        desc: "Access to scalable cloud-based services for storage",
      },
      {
        img: "assets/img/category/category_1_3.jpg",
        title: "Hiking",
        desc: "Tailored IT solutions designed to meet specific business needs.",
      },
      {
        img: "assets/img/category/category_1_4.jpg",
        title: "Cloud Integration",
        desc: "Around-the-clock monitoring and troubleshooting.",
      },
      {
        img: "assets/img/category/category_1_5.jpg",
        title: "Cruises",
        desc: "Covers all aspects of IT, from consu-lting and planning",
      },
      // Add more slides here if needed
    ];
    return (
      <section className="category-area bg-top-center space overflow-hidden">
        <div className="container th-container">
          <div className="title-area mb-60 text-center">
            <span className="sub-title text-anime-style-2">Our Features</span>
            <h2 className="sec-title text-anime-style-3">
              Reliable IT for Unstoppable Growth
            </h2>
          </div>

          <Swiper
            spaceBetween={30}
            loop={true}
            loopFillGroupWithBlank={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 3, spaceBetween: 45 },
            }}
            className="mySwiper"
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="category-card single">
                  <div className="box-img global-img">
                    <img src={slide.img} alt={slide.title} />
                  </div>
                  <h3 className="box-title">
                    <a href="service.html">{slide.title}</a>
                  </h3>
                  <p className="sec-text">{slide.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    )
  }

  //------------------CATEGORY SECTION---------------------//

  const categorySlides = [
    {
      title: 'Creative Web Design',
      courses: '20+',
      svg1: (
        <svg width="88" height="243" viewBox="0 0 88 243" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="bar_2" d="M43.68,87.35H87.35V242.55H43.68Z" fill="#4AD2CC" />
          <path className="bar_1" d="M0,87.35H43.68V242.55H0Z" fill="#C3F498" />
          <g className="pen_tip">
            <path d="M43.6752 0L87.3505 87.3505H0L43.6752 0Z" fill="#FFDA8A" />
            <path fillRule="evenodd" clipRule="evenodd" d="M62.3906 38.2161L43.2827 0.000244141L24.1747 38.2161H62.3906Z" fill="#050505" />
          </g>
        </svg>
      ),
      svg2: (
        <svg className="cloud_move" width="198" height="200" viewBox="0 0 198 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M198.001 98.8149H99.0684V0C153.705 0 198.001 44.2167 198.001 98.7557V98.8149Z" fill="#2F584F" />
          <path d="M99.0558 200C44.419 200 0.123047 155.783 0.123047 101.244V101.197H99.0558V200Z" fill="#4AD2CC" />
          <path d="M99 200V99H198V99.0485C198.012 154.806 153.686 200 99 200Z" fill="#F38073" />
          <path d="M99.0567 101.185H39.8965V101.161C39.8965 68.5469 66.3838 42.1069 99.0567 42.1069V101.185Z" fill="#FFDA8A" />
          <path d="M99.0567 157.905C66.3838 157.905 39.8965 131.465 39.8965 98.8503V98.8267H99.0567V157.905Z" fill="#FFDA8A" />
          <path d="M99 158.078C131.673 158.078 158.16 131.638 158.16 99.0237V99H99V158.078Z" fill="#EBEBEB" />
        </svg>
      ),
    },
    {
      title: 'IT Apps & Software',
      courses: '49+',
      svg1: (
        <svg width="173" height="254" viewBox="0 0 173 254" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.4023 132.796H86.5009V253.409L13.4023 132.796Z" fill="#FFDA8A" />
          <path d="M159.598 132.796H86.4991V253.409L159.598 132.796Z" fill="#4AD2CC" />
          <circle cx="86.5" cy="86.5" r="86.5" fill="#F38073" />
          <circle cx="86.5008" cy="86.5001" r="57.2606" fill="white" />
          <path d="M86.5 106C75.7335 106 67 97.2708 67 86.5096V86.4905C67 75.7292 75.7335 67 86.5 67C97.2665 67 106 75.7292 106 86.4905V86.5096C106 97.2708 97.2665 106 86.5 106Z" fill="#F78077" />
        </svg>
      ),
      svg2: (
        <svg width="181" height="120" viewBox="0 0 181 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="box_2">
            <path d="M180.012 107.99L180.012 0L60.0213 -5.24495e-06L60.0213 119.99L168.012 119.99C174.639 119.99 180.012 114.618 180.012 107.99Z" fill="#2F584F" />
            <path d="M120.012 60C153.151 60 180.012 33.1392 180.012 0L60.0117 -5.24537e-06C60.0117 33.1392 86.8725 60 120.012 60Z" fill="#4AD2CC" />
            <path d="M120.012 120C153.151 120 180.012 93.1392 180.012 60L60.0117 60C60.0117 93.1392 86.8725 120 120.012 120Z" fill="white" />
            <path d="M60.0117 120L60.0117 60L0.0117264 60L0.0117238 120L60.0117 120Z" fill="#FF9960" />
          </g>
          <path d="M30 90C30 73.4304 16.5696 60 0 60L0 120C16.5696 120 30 106.57 30 90Z" fill="white" />
          <path d="M119.998 90C136.568 90 149.998 76.5696 149.998 60L89.9981 60C89.9981 76.5696 103.428 90 119.998 90Z" fill="#FFDA8A" />
        </svg>
      ),
    },
    {
      title: 'Web Design Development',
      courses: '20+',
      svg1: (
        <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M81.7034 81.6846V0.0205078H81.6641C36.5641 0.0205078 0 36.5846 0 81.6846H81.7034Z" fill="#F6F1E1" />
          <path d="M81.7025 81.6839V37.9951H81.6829C57.5551 37.9951 37.9941 57.5561 37.9941 81.6839H81.7025Z" fill="#F38073" />
        </svg>
      ),
      svg2: (
        <svg width="210" height="165" viewBox="0 0 210 165" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="rotate_box_2">
            <path d="M127.348 0.703125H45.6836V82.4163H127.348V0.703125Z" fill="#F38073" />
            <path d="M127.348 82.4065H45.6836V82.3673C45.6836 37.2673 82.2477 0.703125 127.348 0.703125V82.4065Z" fill="white" />
            <path d="M209.022 82.4075H127.357V0.694336C172.457 0.694336 209.022 37.2585 209.022 82.3585V82.4075Z" fill="#2F584F" />
            <path d="M127.348 164.12C82.2477 164.12 45.6836 127.556 45.6836 82.4562V82.417H127.348V164.12Z" fill="#4AD2CC" />
            <path d="M127.348 164.12V82.4072H209.012V82.4464C209.022 127.556 172.457 164.12 127.348 164.12Z" fill="#F38073" />
            <path d="M127.347 82.4062H78.5137V82.3866C78.5137 55.4167 100.378 33.5527 127.347 33.5527V82.4062Z" fill="#2F584F" />
            <path d="M127.348 128.664V82.417H173.575V82.4366C173.575 107.966 152.877 128.664 127.348 128.664Z" fill="#F6F1E1" />
            <path d="M127.347 131.27C100.378 131.27 78.5137 109.406 78.5137 82.4366V82.417H127.347V131.27Z" fill="#F7B643" />
          </g>
          <g className="rotate_box">
            <path d="M19.5 46C8.73348 46 0 37.2708 0 26.5096V26.4905C0 15.7292 8.73348 7 19.5 7C30.2665 7 39 15.7292 39 26.4905V26.5096C39 37.2708 30.2665 46 19.5 46Z" fill="#F78077" />
          </g>
        </svg>
      ),
    },
    {
      title: 'UI/UX Design',
      courses: '14+',
      svg1: (
        <svg width="162" height="162" viewBox="0 0 162 162" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="box_3" d="M161.998 80.999C161.998 61.956 155.289 43.5218 143.048 28.934C130.807 14.3461 113.818 4.53746 95.0646 1.23061C76.3109 -2.07625 56.9917 1.33016 40.4999 10.8516C24.0081 20.373 11.3983 35.4006 4.88504 53.2952C-1.62819 71.1897 -1.62835 90.807 4.88459 108.702C11.3975 126.596 24.0071 141.624 40.4987 151.146C56.9904 160.667 76.3096 164.074 95.0633 160.768C113.817 157.461 130.806 147.653 143.047 133.065L80.999 80.999H161.998Z" fill="#4AD2CC" />
          <circle cx="80.9989" cy="80.9989" r="51.4032" fill="white" />
          <circle className="box_4" cx="80.9998" cy="80.9989" r="17.1346" fill="#F38073" />
        </svg>
      ),
      svg2: (
        <svg width="198" height="200" viewBox="0 0 198 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M198 0H98V100H198V0Z" fill="#2F584F" />
          <path className="box_7" d="M147.351 50C147.351 22.384 125.257 0 98 0V100C125.257 100 147.351 77.616 147.351 50Z" fill="#FFDA8A" />
          <path d="M198 100H98V200H186C192.627 200 198 194.627 198 188V100Z" fill="white" />
          <path className="box_5" d="M98 200V100H198C198 155.232 153.232 200 98 200Z" fill="#F38073" />
          <path d="M98 100H0V200H98V100Z" fill="#2F584F" />
          <path className="box_6" d="M0 100H98V200C43.8726 200 0 155.232 0 100Z" fill="#F38073" />
        </svg>
      ),
    },
    {
      title: 'Responsive Web Design',
      courses: '49+',
      svg1: (
        <svg width="89" height="208" viewBox="0 0 89 208" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M89 208C39.8487 208 0 168.17 0 119.043V119H89V208Z" fill="#4AD2CC" />
          <path d="M89 172C59.7293 172 36 148.28 36 119.021V119H89V172Z" fill="#F7B643" />
          <path d="M18,44.21H36V119.05H18Z" fill="#F38073" />
          <path d="M0,44.21H18V119.05H0Z" fill="#4AD2CC" />
          <path fillRule="evenodd" clipRule="evenodd" d="M18 0L2.45464 19.0908C0.866924 21.0406 0 23.5169 0 26.0314C0 35.9725 8.05887 44.2105 18 44.2105V0Z" fill="#F38073" />
          <path fillRule="evenodd" clipRule="evenodd" d="M17.998 0.00239857L18 0L33.5454 19.0908C35.1331 21.0406 36 23.5169 36 26.0314C36 35.9725 27.9411 44.2105 18 44.2105C17.9993 44.2105 17.9987 44.2105 17.998 44.2105V0.00239857Z" fill="#4AD2CC" />
        </svg>
      ),
      svg2: (
        <svg width="181" height="180" viewBox="0 0 181 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.01367 180V91H90.0137V91.0427C90.0242 140.175 50.6233 180 2.01367 180Z" fill="#F38073" />
          <path d="M1.01367 141V91H51.0137V91.0212C51.0137 118.622 28.6266 141 1.01367 141Z" fill="#F6F1E1" />
          <path d="M180.014 0H89.0137V91H180.014V0Z" fill="#2F584F" />
          <path d="M89.0137 180V91H180.014C180.014 140.156 139.275 180 89.0137 180Z" fill="#2F584F" />
          <path d="M89.0137 142V91H142.014C142.014 119.168 118.287 142 89.0137 142Z" fill="#F38073" />
          <path d="M89.0137 0H0.0136719V91H89.0137V0Z" fill="#C3F498" />
          <path d="M0.0136719 0H89.0137V91C39.8572 91 0.0136719 50.2611 0.0136719 0Z" fill="#F38073" />
        </svg>
      ),
    },
  ];

  function CategorySection() {
    const [glow, setGlow] = React.useState(false);
    React.useEffect(() => {
      if (glow) {
        const timeout = setTimeout(() => setGlow(false), 1200);
        return () => clearTimeout(timeout);
      }
    }, [glow]);
    return (
      <section id="ed-category5" className="ed-category5-sec position-relative mt-5" >
        <span className="ed-cate-shape1 right_view position-absolute">
          <img src="/images/line-shape1.svg" alt="" />
        </span>
        <span className="ed-cate-shape2 top_view position-absolute">
          <img src="/images/line-shape2.svg" alt="" />
        </span>
        <div className="container">
          <div className="ed-category5-content">
            <div className="ed-category5-text" data-aos="fade-right">
              <div className="ed-sec-title-5 ed-text headline-5 pera-content">
                <div className="subtitle wow fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">Category</div>
                <h2 className="sec_title ed-sec-tt-anim ed-has-anim">
                  <span>Start Exploring:</span> Find Your Perfect Category
                </h2>
                <p>Start exploring the world of education and unlock endless learning opportunities. Find the perfect category that matches your passion and goals!</p>
              </div>
              <div className="mt-30">
                <button
                  type="button"
                  className="view-all-category-btn"
                  onClick={() => setGlow(true)}
                >
                  <span className="b-text">
                    <Link to="/showallcourses" style={{ textDecoration: 'none', color: 'inherit' }}>
                      View All Category
                    </Link></span>
                  <span className="b-icon" style={{ display: 'flex', alignItems: 'center' }}>
                    <svg width="16" height="16" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.66619 0.833333C1.66619 0.61232 1.75399 0.400358 1.91027 0.244078C2.06655 0.0877975 2.27851 0 2.49953 0H9.16619C9.38721 0 9.59917 0.0877975 9.75545 0.244078C9.91173 0.400358 9.99953 0.61232 9.99953 0.833333V7.5C9.99953 7.72101 9.91173 7.93297 9.75545 8.08926C9.59917 8.24554 9.38721 8.33333 9.16619 8.33333C8.94518 8.33333 8.73322 8.24554 8.57694 8.08926C8.42066 7.93297 8.33286 7.72101 8.33286 7.5V2.845L1.42203 9.75583C1.26486 9.90763 1.05436 9.99163 0.835858 9.98973C0.617361 9.98783 0.40835 9.90019 0.253844 9.74568C0.0993368 9.59118 0.0116958 9.38216 0.00979713 9.16367C0.00789844 8.94517 0.0918941 8.73467 0.243692 8.5775L7.15453 1.66667H2.49953C2.27851 1.66667 2.06655 1.57887 1.91027 1.42259C1.75399 1.26631 1.66619 1.05435 1.66619 0.833333Z" fill="#FF9960"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className={`ed-category5-card-wrap position-relative category-glow-right${glow ? ' glow-active' : ''}`} data-aos="fade-left">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  nextEl: '.ed-ct-next',
                  prevEl: '.ed-ct-prev',
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                className="ed-category5-card-slide"
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
                style={{ cursor: 'pointer' }}
              >
                {categorySlides.map((slide, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      className="ed-category5-card swiper-scale-effect"
                      style={{
                        marginTop: idx % 2 === 0 ? 0 : 60,
                        marginBottom: idx % 2 === 0 ? 60 : 0,
                        transition: 'margin 0.3s',
                      }}
                    >
                      <div className="item-text headline-5">
                        <div className="title-icon d-flex justify-content-between align-items-center">
                          <h3 className="href-underline" style={{ margin: 0 }}>
                            <span>{slide.title}</span>
                          </h3>
                          <div className="arrow-icon">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g opacity="0.24" clipPath="url(#clip0_137_450)">
                                <path d="M0 35.7656L29.7782 5.98781H10.3345V0H40V29.6655H34.0122V10.2219L4.23438 40L0 35.7656Z" fill="#2F584F" />
                              </g>
                              <defs>
                                <clipPath id="clip0_137_450">
                                  <rect width="40" height="40" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="item-icon d-flex justify-content-end align-items-end">
                        <div className="ct_icon_1">{slide.svg1}</div>
                        <div className="ct_icon_2">{slide.svg2}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="ed-ct-nav">
                <div className="ed-ct-next arrow-nav d-flex justify-content-center align-items-center"><i className="fa-solid fa-arrow-right"></i></div>
                <div className="ed-ct-prev arrow-nav d-flex justify-content-center align-items-center"><i className="fa-solid fa-arrow-left"></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }


  /** ---------------- PLACEMENT FOCUSED CURRICULUM (NEW) ---------------- **/
  const PlacementCurriculum = () => {
    const PATHS = {
      beginner: {
        label: "Beginner",
        modules: [
          {
            id: "b0",
            title: "Module 0",
            subtitle: "Crash Course In Digital Marketing",
            duration: "Duration: 45 days",
            intro:
              "For Beginners, it is crucial to make a hold on some tools which are important in digital marketing.\nWithin this module, our mission is to support you in understanding of digital parameters.",
            topics: [
              "Google My Business",
              "Social media marketing",
              "Search engine optimization",
              "Keywords",
              "Content Whale",
              "Rakuten Promotion Platform",
            ],
            outcomes: [
              "After this module, you will be confident in:",
              "Finding keywords for top ranking",
              "Content management system",
            ],
            usps: [
              "USPs of our Delivery:",
              "All topics taught in live class with one on one session and instant doubt support to accelerate learning.",
              "Assignments",
              "Special focus on the topics in which you are not confident.",
            ],
          },
          {
            id: "b1",
            title: "Module 1",
            subtitle: "Data Analysis",
            duration: "Duration: 45 days",
            intro:
              "For a start, it is important to learn how to do analysis.\nWithin this module, our mission is to help you in the analysing process.",
            topics: ["SQL", "Powerbi"],
            outcomes: [
              "After this module, you will be confident in:",
              "Prediction according to the given data.",
              "Data analysis",
            ],
          },
          {
            id: "b2",
            title: "Module 2",
            subtitle: "Crash course in AI",
            duration: "Duration: 45 days",
            intro:
              "For Beginners, it is important to understand the core concept of AI.\nWithin this module, our mission is to support you in understanding AI concepts..",
            topics: [
              "Python",
              "Basic fundamentals of machine learning, Deep learning, Natural language processing.",
            ],
            outcomes: ["After this module, you will be confident in:", "Accessing further AI"],
          },
          {
            id: "b3",
            title: "Module 3",
            subtitle: "Data Science",
            duration: "Duration: 45 days",
            intro:
              "In the beginning, it is important to gain and understand the concept of data science.",
            topics: ["Machine learning and its types ", "Algorithms", "Deep learning"],
            outcomes: [
              "After this module, you will be confident in:",
              "Preparing datasets ",
              "You can different algorithms ",
            ],
            usps: [
              "USPs of our Delivery:",
              "All topics taught in live class with one on one session and instant doubt support to accelerate learning.",
              "Assignments",
              "Special focus on the topics in which you are not confident.",
            ],
          },
          {
            id: "b4",
            title: "Module 4",
            subtitle: "Foundation course of Cybersecurity",
            duration: "Duration: 45 days",
            intro:
              "For Beginners, it is crucial to make a hold on concepts of cybersecurity then you can apply in your actual life.\nWithin this module, our mission is to support you in understanding of cybercrime parameters.",
            topics: [
              "Fundamentals",
              "Search engine ",
              "optimization fundamentals, ",
              "virtual setup ",
              "linux CLI",
              "Malwares",
              "system security",
              "network scanning",
              "Phishing",
              "digital forensics",
              "Burpsuite",
              "sqli, brute force attack, DDOS, wireshark, Portswigger labs + project",
            ],
            outcomes: [
              "After this module, you will be confident in:",
              "you can develop a strong understanding of cybersecurity principles",
              "security controls",
            ],
            usps: [
              "USPs of our Delivery:",
              "All topics taught in live class with one on one session and instant doubt support to accelerate learning.",
              "Assignments",
              "Special focus on the topics in which you are not confident.",
            ],
          },
          {
            id: "b5",
            title: "Module 5",
            subtitle: "Web designing",
            duration: "Duration: 45 days",
            intro:
              "For Beginners, it is important to learn basic frontend languages and implement them into online servers.\nWithin this module, our mission is to support you to practice in frontend languages",
            topics: ["HTML", "CSS", "Javascript"],
            outcomes: ["After this module, you will be confident in:", "Frameworks ", "Web designing "],
            usps: [
              "USPs of our Delivery:",
              "All topics taught in live class with one on one session and instant doubt support to accelerate learning.",
              "Assignments",
              "Special focus on the topics in which you are not confident.",
            ],
          },
        ],
      },

      intermediate: {
        label: "Intermediate",
        modules: [
          {
            id: "i1",
            title: "Module 1",
            subtitle: "Advance AWS services",
            duration: "Duration: 4 months",
            intro:
              "For intermediate, it is important to learn core services.\nWithin this module, our mission is to support you to learn core services.",
            topics: [
              "Amazon EC2 (virtual servers)",
              "Amazon S3 (storage)",
              "AWS Lambda (serverless functions)",
              "Amazon VPC (networking)",
            ],
            outcomes: [
              "After this module, you will be confident in:",
              "Building practical projects",
              "utilizing AWS learning plans",
            ],
            usps: [
              "USPs of our Delivery:",
              "All topics taught in live class with one on one session and instant doubt support to accelerate learning.",
              "Assignments",
              "Special focus on the topics in which you are not confident.",
            ],
          },
          {
            id: "i2",
            title: "Module 2",
            subtitle: "Computer science fundamentals",
            duration: "Duration: 3 months",
            intro:
              "For  intermediate, it is important to learn computer science fundamentals.\nWithin this module, our mission is to support you to learn core services.",
            topics: [
              "Programming",
              "algorithms",
              "data structures",
              "computer architecture",
              "operating systems",
              "software engineering",
            ],
            outcomes: [
              "After this module, you will be confident in:",
              "Understanding of programming languages",
              "Operating systems",
            ],
            usps: [
              "USPs of our Delivery:",
              "All topics taught in live class with one on one session and instant doubt support to accelerate learning.",
              "Assignments",
              "Special focus on the topics in which you are not confident.",
            ],
          },
          {
            id: "i3",
            title: " Module 3",
            subtitle: "Master course in data analysis",
            duration: "Duration: 4 months",
            intro:
              "For  intermediate, now it's time to hold on to data analytic tools.\nWithin this module, our mission is to support you to learn analytic tools.",
            topics: ["Power BI", "Tableau Software", "R language", "RapidMiner", "Qlik"],
            outcomes: ["After this module, you will be confident in:", "Analytic tools"],
            usps: [
              "USPs of our Delivery:",
              "All topics taught in live class with one on one session and instant doubt support to accelerate learning.",
              "Assignments",
              "Special focus on the topics in which you are not confident.",
            ],
          },
          {
            id: "i4",
            title: "Module 4",
            subtitle: "Master course in digital marketing",
            duration: "Duration: 6 months",
            intro:
              "For  intermediate, now it's time to do a master course in digital marketing.",
            topics: [
              "SEO",
              "CMS",
              "Photoshop",
              "Premium pro",
              "Social media ",
              "SEM",
              "Content marketing",
              "Google ads",
              "Web Analytics",
            ],
            outcomes: [
              "After this module, you will be confident in:",
              "Creating content ",
              "Finding keywords ",
              "Campaigns planning ",
            ],
            usps: [
              "USPs of our Delivery:",
              "All topics taught in live class with one on one session and instant doubt support to accelerate learning.",
              "Assignments",
              "Special focus on the topics in which you are not confident.",
            ],
          },
          {
            id: "i5",
            title: "Module 5",
            subtitle: "Master course in web designing",
            duration: "Duration: 5 months ",
            intro:
              "For  intermediate, now it's time to do a master course in digital marketing.",
            topics: [
              "HTML",
              "CSS",
              "Javascript",
              "Responsive design",
              "UI/UX",
              "Web frameworks",
              "Web accessibility",
            ],
            outcomes: [
              "After this module, you will be confident in:",
              "Creating user interface",
              "User experience  ",
              "Dynamic website",
            ],
            usps: [
              "USPs of our Delivery:",
              "All topics taught in live class with one on one session and instant doubt support to accelerate learning.",
              "Assignments",
              "Special focus on the topics in which you are not confident.",
            ],
          },
          {
            id: "i6",
            title: " Module 6",
            subtitle: "Mern Stack",
            duration: "Duration: 6 months ",
            intro:
              "The MERN stack is ideal for developers who want to use a single language, JavaScript, for both the front end and the back end of their applications. ",
            topics: [
              "Advanced Javascript",
              "React Hooks",
              "Content API",
              "Node.js module management",
              "Express.js middleware and REST APIsExpress.js middleware and REST APIs",
              "MongoDB",
            ],
            outcomes: [
              "After this module, you will be confident in:",
              "Creating user interface",
              "User experience  ",
              "Dynamic website",
            ],
            usps: [
              "USPs of our Delivery:",
              "All topics taught in live class with one on one session and instant doubt support to accelerate learning.",
              "Assignments",
              "Special focus on the topics in which you are not confident.",
            ],
          },
        ],
      },

      advanced: {
        label: "Advanced",
        modules: [
          {
            id: "a1",
            title: " Module 1",
            subtitle: "Cloud Computing",
            duration: "Duration: 6 months ",
            intro:
              "In advance level its importance covers advanced subjects which are made in advance in cloud computing.",
            topics: [
              "cloud security and compliance",
              "cloud security and compliance",
              "serverless architectures",
              "microservices",
              "DevOps and infrastructure-as-code (IaC)",
              "AWS",
            ],
            outcomes: [
              "After this module, you will be confident in:",
              "Deployment",
              "secure cloud-based architectures",
            ],
            usps: [
              "USPs of our Delivery:",
              "All topics taught in live class with one on one session and instant doubt support to accelerate learning.",
              "Assignments",
              "Special focus on the topics in which you are not confident.",
            ],
          },
          {
            id: "a2",
            title: " Module 2",
            subtitle: "Cybersecurity",
            duration: "Duration: 6 months ",
            intro: "",
            topics: [
              "Advanced penetration testing ",
              "Ethical hacking",
              "Malware",
              "Cloud ",
              "Mobile security",
            ],
            outcomes: [
              "After this module, you will be confident in:",
              "mitigate complex cyber threats",
              "conduct penetration testing",
              "vulnerability assessments",
            ],
            usps: [
              "USPs of our Delivery:",
              "All topics taught in live class with one on one session and instant doubt support to accelerate learning.",
              "Assignments",
              "Special focus on the topics in which you are not confident.",
            ],
          },
          {
            id: "a3",
            title: " Module 3",
            subtitle: "Artificial Intelligence",
            duration: "Duration: 1 year ",
            intro:
              "In advance level, it is crucial to make you clear in AI concepts.",
            topics: [
              "Natural learning processing",
              "Deep learning",
              "Advanced machine learning techniques",
              "Computer vision",
              "Reinforcement learning",
            ],
            outcomes: [
              "After this module, you will be confident in:",
              "critically analyzing AI systems",
              "communicating scientific work effectively",
            ],
            usps: [
              "USPs of our Delivery:",
              "All topics taught in live class with one on one session and instant doubt support to accelerate learning.",
              "Assignments",
              "Special focus on the topics in which you are not confident.",
            ],
          },
          {
            id: "a4",
            title: " Module 4",
            subtitle: "Machine Learning",
            duration: "Duration: 6 months ",
            intro:
              "In advance level, our focus is to make you an expert in machine learning.",
            topics: [
              "Data preparation",
              "Data algorithms",
              "Reinforcement learning",
              "Deep learning ",
            ],
            outcomes: [
              "After this module, you will be confident in:",
              "Deployment strategies ",
              "Working projects",
            ],
            usps: [
              "USPs of our Delivery:",
              "All topics taught in live class with one on one session and instant doubt support to accelerate learning.",
              "Assignments",
              "Special focus on the topics in which you are not confident.",
            ],
          },
          {
            id: "a5",
            title: " Module 5",
            subtitle: "Full Stack development ",
            duration: "Duration: 6 months ",
            intro:
              "In full stack development it is important to make expertise in frontend and backend both.",
            topics: [
              "Frontend languages HTML, CSS, Javascript",
              "Backend languages Python, node.js , with its associated frameworks react, Angular and Django",
              "Database ( Sql and Nosql )",
            ],
            outcomes: [
              "After this module, you will be confident in:",
              "Deploy dynamic",
              "Interactive",
              "Complete web application",
            ],
            usps: [
              "USPs of our Delivery:",
              "All topics taught in live class with one on one session and instant doubt support to accelerate learning.",
              "Assignments",
              "Special focus on the topics in which you are not confident.",
            ],
          },
        ],
      },
    };

    const [activePath, setActivePath] = React.useState("advanced");
    const [activeModuleIdx, setActiveModuleIdx] = React.useState(0);

    const path = PATHS[activePath];
    const activeModule = path.modules[activeModuleIdx];

    return (
      <section className="py-5 bg-white" id="curriculum" style={{ minWidth: 0 }} >
        <div className="container" style={{ minWidth: 0 }}>
          <div className="text-center mb-2">
            <div className="text-center mb-4"data-aos="fade-up">
              <h2 id="teamHeading" className="fw-bold display-6 mb-2 text-dark">Placement Focused Curriculum</h2>
              <div aria-hidden="true" className="mx-auto" style={{ width: 120, height: 12, background: "radial-gradient(60px 6px at 60px 6px, rgba(2,6,23,.25), rgba(2,6,23,.12) 60%, rgba(0,0,0,0) 61%)" }} />
            </div>
            <p className="text-muted" data-aos="fade-up">
              Choose the path that matches your background and goals.
            </p>
          </div>

          <div className="d-flex justify-content-center gap-2 flex-wrap mb-4" style={{ minWidth: 0 }} data-aos="fade-up">
            {[
              ["beginner", "Beginner"],
              ["intermediate", "Intermediate"],
              ["advanced", "Advanced"],
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={`btn ${activePath === key ? "btn-primary" : "btn-outline-primary"} px-4 py-2`}
                onClick={() => {
                  setActivePath(key);
                  setActiveModuleIdx(0);
                }}
                style={
                  activePath === key
                    ? { /* if you use BRAND.primary globally, keep it; otherwise default btn-primary works */
                      // backgroundColor: BRAND?.primary,
                      // borderColor: BRAND?.primary
                    }
                    : {}
                }
              >
                {label}
              </button>
            ))}
          </div>

          <div
            className="text-center text-muted mb-4 text-wrap text-break"
            style={{ whiteSpace: "pre-line", lineHeight: 1.5, wordBreak: "break-word" }}
          >
            {path?.blurb}
          </div>

          <div className="row g-4" style={{ minWidth: 0 }}>
            {/* LEFT: modules list (fixed) */}
            <div className="col-12 col-lg-4" style={{ minWidth: 0 }}>
              <div
                className="list-group rounded-4 shadow-sm w-100"
                style={{ maxHeight: 460, overflowY: "auto", position: "sticky", top: 88, minWidth: 0 }}
              >
                {path.modules.map((m, idx) => {
                  const isActive = idx === activeModuleIdx;
                  return (
                    <button
                      key={m.id}
                      className={`list-group-item list-group-item-action d-flex flex-column ${isActive ? "active" : ""}`}
                      onClick={() => setActiveModuleIdx(idx)}
                      style={
                        isActive
                          ? {
                            background: "linear-gradient(180deg, #73328e, #5a276f)",
                            borderColor: "transparent",
                            color: "#fff",
                          }
                          : { border: 0, borderBottom: "1px solid rgba(0,0,0,.06)", paddingTop: ".85rem", paddingBottom: ".85rem" }
                      }
                    >
                      <span className="fw-semibold text-wrap text-break" style={{ wordBreak: "break-word" }}>{m.title}</span>
                      <small className={isActive ? "text-white-50" : "text-muted"}>{m.subtitle}</small>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: module detail (scrollable) */}
            <div className="col-12 col-lg-8" style={{ minWidth: 0 }}>
              <div className="bg-white rounded-4 border shadow-sm p-4"
                style={{ minWidth: 0, maxHeight: 460, overflowY: "auto" }}>
                <h5 className="fw-bold mb-1 text-wrap text-break" style={{ wordBreak: "break-word" }}>{activeModule.title}</h5>
                <div className="text-muted mb-2 text-wrap text-break" style={{ wordBreak: "break-word" }}>
                  {activeModule.subtitle}
                </div>

                <div className="mb-3">
                  <span className="fw-semibold">{activeModule.duration}</span>
                </div>

                {activeModule.intro && (
                  <p className="text-muted text-wrap text-break" style={{ whiteSpace: "pre-line", wordBreak: "break-word" }}>
                    {activeModule.intro}
                  </p>
                )}

                <div className="mb-3">
                  <div className="fw-semibold mb-2">Topics that will be covered -</div>
                  <ul className="mb-0 ps-3 text-wrap text-break" style={{ wordBreak: "break-word" }}>
                    {activeModule.topics.map((t, i) => (
                      <li key={i} className="text-muted">{t}</li>
                    ))}
                  </ul>
                </div>

                {activeModule.outcomes && (
                  <div className="mb-3 border-top pt-3">
                    <div className="fw-semibold mb-2">Outcomes:</div>
                    <ul className="mb-0 ps-3 text-wrap text-break" style={{ wordBreak: "break-word" }}>
                      {activeModule.outcomes.map((o, i) => (
                        <li key={i} className="text-muted">{o}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeModule.usps && (
                  <div className="border-top pt-3">
                    <div className="fw-semibold mb-2">USPs of our Delivery:</div>
                    <ul className="mb-0 ps-3 text-wrap text-break" style={{ wordBreak: "break-word" }}>
                      {activeModule.usps.map((u, i) => (
                        <li key={i} className="text-muted">{u}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };


  /** ---------------- OUTCOMES ---------------- **/
  const Outcomes = () => (
    <section
      id="outcomes"
      className="py-5 bg-white"
      style={{ minHeight: "500px", backgroundColor: "#fff" }}
    >
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <div className="text-center mb-4">
            <h2
              id="teamHeading"
              className="fw-bold display-6 mb-2 text-dark"
            >
              Program Outcomes
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto"
              style={{
                width: 120,
                height: 12,
                background:
                  "radial-gradient(60px 6px at 60px 6px, rgba(2,6,23,.25), rgba(2,6,23,.12) 60%, rgba(0,0,0,0) 61%)",
              }}
            />
          </div>
          <p className="text-muted mx-auto" style={{ maxWidth: 720 }}>
            Everything you need to transition into top product roles with
            confidence.
          </p>
        </div>

        {/* Responsive Cards */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {[
            [
              <img
                src={o1}
                alt="Offer-Ready Skills"
                className="img-fluid"
                style={{ width: "64px", height: "64px", objectFit: "contain" }}
              />,
              "Offer-Ready Skills",
              "Strong DSA, System Design, CS Fundamentals & Full-Stack.",
            ],
            [
              <img
                src={o2}
                alt="Portfolio & Projects"
                className="img-fluid"
                style={{ width: "64px", height: "64px", objectFit: "contain" }}
              />,
              "Portfolio & Projects",
              "Production-style projects that showcase real skills.",
            ],
            [
              <img
                src={o3}
                alt="Interview Mastery"
                className="img-fluid"
                style={{ width: "64px", height: "64px", objectFit: "contain" }}
              />,
              "Interview Mastery",
              "Mock interviews, feedback loops & curated question bank.",
            ],
            [
              <img
                src={o4}
                alt="Career Support"
                className="img-fluid"
                style={{ width: "64px", height: "64px", objectFit: "contain" }}
              />,
              "Career Support",
              "Referrals, resume reviews & job search strategy.",
            ],
          ].map(([icon, title, desc], i) => (
            <div
              className={`col d-flex outcomes card-transform-${i}`}
              key={i}
              data-aos="fade-up"
              data-aos-duration={600 + i * 200}
            >
              <div className="p-4 text-center outcomes-card w-100">
                <div className="mb-3">{icon}</div>
                <h3 className="h5 fw-bold mb-2">{title}</h3>
                <p className="text-muted mb-0">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>



  );

  /** ---------------- TESTIMONIALS ---------------- **/
  const Testimonials = () => (
    <section className="py-5" id="review" style={{ backgroundColor: "#fff!important" }}>
      <div className="container">
        <div className="text-center mb-5">
          <div className="text-center mb-4">
            <h2 id="teamHeading" className="fw-bold display-6 mb-2 text-dark">Student Success Stories</h2>
            <div aria-hidden="true" className="mx-auto" style={{ width: 120, height: 12, background: "radial-gradient(60px 6px at 60px 6px, rgba(2,6,23,.25), rgba(2,6,23,.12) 60%, rgba(0,0,0,0) 61%)" }} />
          </div>
          <p className="text-muted mx-auto" style={{ maxWidth: 720 }}>
            Hear from engineers who used the program to switch to product-based roles.
          </p>
        </div>

        <div className="row g-4">
          {[
            {
              name: "Priya Sharma",

              quote:
                "I finished the Digital Marketing Course recently and it was a game-changer for my career. The training was completely practical, with step-by-step guidance on SEO, social media, and Google Ads. I now feel confident to work on real projects."
            },
            {
              name: "Rahul Verma",

              quote:
                "The Web Designing Course was exactly what I needed. The trainers explained HTML, CSS, and JavaScript in a very simple way. I especially loved working on live projects which helped me build my own portfolio."
            },
            {
              name: "Anjali Patel",

              quote:
                "I joined the Cyber Security Course and the hands-on training made all the difference. From ethical hacking to network security, everything was explained clearly. This course has prepared me for a strong career in IT security. ",
            },
          ].map((t, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <figure className="p-4 m-0 h-100 bg-white rounded-4 border shadow-sm">
                <div className="d-flex align-items-center mb-3">
                  <figcaption>
                    <div className="fw-semibold">{t.name}</div>
                  </figcaption>
                </div>
                <blockquote className="mb-0" style={{ textAlign: "justify" }}>"{t.quote}"</blockquote>
                <div class="item-rate ul-li">
                  <ul>
                    <li style={{ color: "#ffd500" }}><i class="fa-solid fa-star"></i></li>
                    <li style={{ color: "#ffd500" }}><i class="fa-solid fa-star"></i></li>
                    <li style={{ color: "#ffd500" }}><i class="fa-solid fa-star"></i></li>
                    <li style={{ color: "#ffd500" }}><i class="fa-solid fa-star"></i></li>
                    <li style={{ color: "#ffd500" }}><i class="fa-solid fa-star"></i></li>
                  </ul>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  /** ---------------- UNIQUE FEATURES ---------------- **/
  const UniqueFeatures = () => (
    <section className="py-5 text-white position-relative" style={{ backgroundColor: BRAND.primary }} >
      {/* Vibrant SVG shapes for hero background */}
      <svg width="100%" height="100%" viewBox="0 0 1440 520" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <defs>
          <radialGradient id="heroGlow1" cx="50%" cy="50%" r="70%" fx="50%" fy="50%" gradientTransform="rotate(20)">
            <stop offset="0%" stopColor="#a259e6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#73328e" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="heroGlow2" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#5a276f" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#73328e" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="heroWave" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#73328e" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Top left glow */}
        <circle cx="220" cy="80" r="180" fill="url(#heroGlow1)" />
        {/* Bottom right glow */}
        <circle cx="1300" cy="420" r="220" fill="url(#heroGlow2)" />
        {/* Decorative wave */}
        <path d="M0 400 Q 400 500 900 400 T 1440 420 V520 H0Z" fill="url(#heroWave)" />
        {/* Small accent shapes */}
        <ellipse cx="320" cy="320" rx="32" ry="14" fill="#fff" opacity="0.10" />
        <ellipse cx="1200" cy="120" rx="22" ry="10" fill="#fff" opacity="0.13" />
        <circle cx="700" cy="100" r="18" fill="#fff" opacity="0.09" />
      </svg>
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold fs-1 mb-4">
            <span>5 Reasons</span> <span className="text-white">Why Virtual Academy Stands Out ?</span>
          </h2>
        </div>

        <div className="row g-4 justify-content-center" data-aos="fade-up">
          {[
            { icon: <img src={ps} style={{ height: "62px" }} alt="Personalised sessions" />, title: "Personalised sessions ", desc: " Mentors attention towards your career goal." },
            { icon: <img src={doubt} style={{ height: "62px" }} alt="24/7 doubt assistance" />, title: "24/7 doubt assistance ", desc: " Immensely active team to solve your problems in course." },
            { icon: <img src={ps} style={{ height: "62px" }} alt="Adaptable hours" />, title: "Adaptable hours", desc: " Set your class timing according to your own schedule." },
          ].map((card, i) => (
            <div className="col-12 col-sm-6 col-lg-4" key={`f1-${i}`}>
              <div
                className="h-100 text-center rounded-4 p-4 border shadow-lg"
                style={{
                  background: "linear-gradient(180deg, rgba(115,50,142,0.14) 0%, rgba(90,39,111,0.14) 100%)",
                  borderColor: "rgba(148,163,184,0.15)",
                }}
              >
                <div
                  className="rounded-circle d-flex align-content-center justify-content-center mx-auto mb-3"
                  style={{
                    width: 64,
                    height: 64,
                    fontSize: 28,
                    background: "linear-gradient(135deg, rgba(115,50,142,0.25), rgba(90,39,111,0.25))",
                    border: "1px solid rgba(148,163,184,0.2)",
                    objectFit: "contain"
                  }}
                  aria-hidden="true"
                >
                  {card.icon}
                </div>
                <h3 className="h5 fw-semibold text-white">{card.title}</h3>
                <p className="mb-0 text-white">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4 justify-content-center mt-1">
          {[
            { icon: <img src={rp} style={{ height: "62px" }} alt="Real live projects" />, title: " Real live projects ", desc: " Get your hands on experience in technical task projects." },
            { icon: <img src={career} style={{ height: "62px" }} alt="Career Support" />, title: "Career Support", desc: "Practice industrial interviews and contests." },
          ].map((card, i) => (
            <div className="col-12 col-sm-6 col-lg-4" key={`f2-${i}`}>
              <div
                className="h-100 text-center rounded-4 p-4 border shadow-lg"
                style={{
                  background: "linear-gradient(180deg, rgba(115,50,142,0.14) 0%, rgba(90,39,111,0.14) 100%)",
                  borderColor: "rgba(148,163,184,0.15)",
                }}
              >
                <div
                  className="rounded-circle d-grid align-content-center justify-content-center mx-auto mb-3"
                  style={{
                    width: 64,
                    height: 64,
                    fontSize: 28,
                    background: "linear-gradient(135deg, rgba(115,50,142,0.25), rgba(90,39,111,0.25))",
                    border: "1px solid rgba(148,163,184,0.2)",
                  }}
                  aria-hidden="true"
                >
                  {card.icon}
                </div>
                <h3 className="h5 fw-semibold text-light">{card.title}</h3>
                <p className="mb-0 text-white">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  /** ---------------- FAQ ---------------- **/
  const FAQ = () => (
    <section id="faq" className="py-5" >
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up"> 
          <div className="text-center mb-4">
            <h2 id="teamHeading" className="fw-bold display-6 mb-2 text-dark">Frequently Asked Questions</h2>
            <div aria-hidden="true" className="mx-auto" style={{ width: 120, height: 12, background: "radial-gradient(60px 6px at 60px 6px, rgba(2,6,23,.25), rgba(2,6,23,.12) 60%, rgba(0,0,0,0) 61%)" }} />
          </div>
          <p className="text-muted">Program · Teaching · Mentors · Placement Support · Tuition Fee</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-up">
            <img src={faq} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="FAQ illustration" />
          </div>

          <div className="col-lg-6" data-aos="fade-up">
            <div className="accordion" id="faqAccordion2">
              {[
                ["What is Virtual Academy ?", " Virtual Academy: Personalized Learning to Accelerate Your Computer science Career."],
                ["Can I join Virtual Academy as a fresher ?", "Yes,sure you can be the part of Virtual because they will guide you from scratch in any IT course. "],
                ["When are the live classes held ?", "Anytime, you can set up your schedule with our team. They willassist you and be there for you anytime. "],
                ["Will I get a free demo session ? ", " Yes, definitely we will give you a demo session accordingto your field."],
                ["Will you provide certification ? ", "Yes, we will provide you proper certification along withreal world skills."],
              ].map(([q, a], i) => (
                <div className="accordion-item rounded-3 overflow-hidden border mb-3" key={i + 4}>
                  <h2 className="accordion-header" id={`h${i + 5}`}>
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#c${i + 5}`}
                      aria-expanded="false"
                      aria-controls={`c${i + 5}`}
                    >
                      {q}
                    </button>
                  </h2>
                  <div
                    id={`c${i + 5}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`h${i + 5}`}
                    data-bs-parent="#faqAccordion2"
                  >
                    <div className="accordion-body">{a}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 mt-4 bg-white rounded-4 border shadow-sm">
              <h3 className="h5 fw-bold mb-2">Still have questions?</h3>
              <p className="text-muted mb-3">Talk to our course counsellor for personalized guidance.</p>
              <a href="#enroll" className="btn btn-outline-primary w-100 schedule-btn">Schedule a Call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );



  function CoursesSection() {
    const [courses, setCourses] = React.useState([]);
    const API_BASE =
      import.meta?.env?.VITE_API_URL ||
      (typeof window !== "undefined"
        ? `${window.location.protocol}//${window.location.hostname}:9000`
        : "http://localhost:9000");

    React.useEffect(() => {
      fetch(`${API_BASE}/showallcourse`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            setCourses(data.slice(0, 6));
          } else if (Array.isArray(data.data)) {
            setCourses(data.data.slice(0, 6));
          }
        });
    }, [API_BASE]);

    // Helper to get first 2-3 lines of description
    const getShortDescription = (desc = "") => {
      // Split by line breaks, fallback to splitting by period
      const lines = desc.split(/\n|\r|\.|\!/).filter(Boolean);
      return lines.slice(0, 3).join('. ') + (lines.length > 3 ? '...' : '');
    };

    return (
      <section id="ed-course5" className="ed-course5-sec pt-125 pb-95" >
        <div className="container">
          <div className="ed-sec-title-5 headline-5 text-center pera-content">
            <div className="subtitle wow fadeInRight" data-aos="fade-up">Our Course</div>
            <div className="text-center mb-4" data-aos="fade-up">
              <h2 id="teamHeading" className="fw-bold display-6 mb-2 text-dark">Our Most Popular Courses</h2>
              <div aria-hidden="true" className="mx-auto" style={{ width: 120, height: 12, background: "radial-gradient(60px 6px at 60px 6px, rgba(2,6,23,.25), rgba(2,6,23,.12) 60%, rgba(0,0,0,0) 61%)" }} />
            </div>
          </div>
          <style>{`
            .ed-course5-sec .swiper-slide {
              transition: filter 0.4s, opacity 0.4s, box-shadow 0.4s, transform 0.4s cubic-bezier(.23,1,.32,1);
              filter: blur(2px) grayscale(30%);
              opacity: 0.5;
              pointer-events: none;
            }
            .ed-course5-sec .swiper-slide-active{
              filter: none;
              opacity: 1;
              box-shadow: 0 0 32px 0 rgba(115,50,142,0.18), 0 2px 16px rgba(90,39,111,0.10);
              z-index: 10;
              pointer-events: auto;
            }
          `}</style>
          <div className="ed-course5-content mt-55" data-aos="fade-up">
            {courses.length === 0 ? (
              <div className="text-center py-5">No courses found.</div>
            ) : (
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                speed={900}
                effect="slide"
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
                className="ed-course5-card-slide"
                style={{ cursor: 'pointer' }}
              >
                {courses.map((course, idx) => (
                  <SwiperSlide key={course._id || idx}>
                    <div className="ed-course5-item">
                      <div className="item-img-cate position-relative">
                        <div className="inner-img">
                          <img src={course.image ? `/uploads/${course.image}` : "assets/img/course/pc1.jpg"} alt={course.coursename || "Course"} />
                        </div>
                      </div>
                      <div className="item-text headline position-relative" style={{ paddingBottom: '60px' }}>
                        <div className="item-rate ul-li">
                          <ul>
                            {[...Array(5)].map((_, i) => (
                              <li key={i}><i className="fa-solid fa-star"></i></li>
                            ))}
                          </ul>
                        </div>
                        <h3 className="href-underline"><a href="course-single.html">{course.course || "Course Name"}</a></h3>
                        <p className="text-muted mb-2" style={{ minHeight: '48px', maxHeight: '72px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {getShortDescription(course.description)}
                        </p>
                        <div className="crs-btn text-center d-flex flex-column gap-2" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: 2 }}>
                          <Link to={`/details/${course._id}`} style={{ width: '100%', display: 'block', textDecoration: 'none!important' }}>Course Details</Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            <div className="mt-30 d-flex align-items-center justify-content-center" >
              <button
                type="button"
                className="view-all-category-btn"
                onClick={() => setGlow(true)}
              >
                <span className="b-text">
                  <Link to="/showallcourses" style={{ textDecoration: 'none', color: 'inherit' }}>
                    View All Courses
                  </Link></span>
                <span className="b-icon" style={{ display: 'flex', alignItems: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.66619 0.833333C1.66619 0.61232 1.75399 0.400358 1.91027 0.244078C2.06655 0.0877975 2.27851 0 2.49953 0H9.16619C9.38721 0 9.59917 0.0877975 9.75545 0.244078C9.91173 0.400358 9.99953 0.61232 9.99953 0.833333V7.5C9.99953 7.72101 9.91173 7.93297 9.75545 8.08926C9.59917 8.24554 9.38721 8.33333 9.16619 8.33333C8.94518 8.33333 8.73322 8.24554 8.57694 8.08926C8.42066 7.93297 8.33286 7.72101 8.33286 7.5V2.845L1.42203 9.75583C1.26486 9.90763 1.05436 9.99163 0.835858 9.98973C0.617361 9.98783 0.40835 9.90019 0.253844 9.74568C0.0993368 9.59118 0.0116958 9.38216 0.00979713 9.16367C0.00789844 8.94517 0.0918941 8.73467 0.243692 8.5775L7.15453 1.66667H2.49953C2.27851 1.66667 2.06655 1.57887 1.91027 1.42259C1.75399 1.26631 1.66619 1.05435 1.66619 0.833333Z" fill="#FF9960"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /** ---------------- FOOTER CTA ---------------- **/
  const FooterCTA = () => (
    <section className="py-4 footer-gradient">
      <div className="container">
        <div className="row align-items-center g-3">
          <div className="col-lg-8 text-center text-lg-start">
            <h3 className="text-white mb-1">Ready to transform your career?</h3>
            <p className="text-white-50 mb-0">Join the next cohort of aspiring software engineers.</p>
          </div>
          <div className="col-lg-4">
            <div className="d-flex flex-column flex-lg-row gap-2 justify-content-lg-end">
              <a className="btn bg-white px-4 py-2 fw-semibold" href="#enroll">Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  /** ---------------- MANAGEMENT TEAM 
   * 
   ---------------- **/
  const TeamSection = () => {

    return (
      <section className="py-5 team-section" aria-labelledby="teamHeading">
        <div className="container">
          <div className="text-center mb-4" data-aos="fade-up">
            <h2 id="teamHeading" className="fw-bold display-6 mb-2 text-dark">Our Management Team</h2>
            <div aria-hidden="true" className="mx-auto" style={{ width: 120, height: 12, background: "radial-gradient(60px 6px at 60px 6px, rgba(2,6,23,.25), rgba(2,6,23,.12) 60%, rgba(0,0,0,0) 61%)" }} />
          </div>
          <div className="teamvtc-section">
            <img src={team} alt="" className="img-fluid"/>
          </div>
        </div>
      </section>
    );
  }

  const WhyUsSection = () => (
    <section className="py-5">
      <div className="text-center mb-5" data-aos="fade-up">
        <h2 id="teamHeading" className="fw-bold display-6  text-dark">About Us</h2>
        <div aria-hidden="true" className="mx-auto" style={{ width: 120, height: 12, background: "radial-gradient(60px 6px at 60px 6px, rgba(2,6,23,.25), rgba(2,6,23,.12) 60%, rgba(0,0,0,0) 61%)" }} />
      </div>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-12 col-lg-6 mb-4" data-aos="fade-right">
            <img src={whyus} alt="" className="img-fluid" style={{ borderRadius: "30px" }} />
          </div>

          {/* Right Content */}
          <div className="col-12 col-lg-6 mb-4" data-aos="fade-left">
            <h1 className="fw-bold mb-3" style={{ fontSize: "32px" }}>
              Virtual Techcadd<br />The Global Online IT Platform
            </h1>
            <p>Virtual TechCadd is a 24x7 online learning platform that offers world-class IT training to learners worldwide. With a focus on practical, career-driven courses, we help students and professionals build job-ready skills for global opportunities.</p>
            <p>Our programs cover Artificial Intelligence, Machine Learning, Data Science, Cloud Computing, Cybersecurity, CAD/CAM, Web Development, UI/UX Design, and Digital Marketing.</p>
            <p>With Virtual TechCadd, you can learn anytime, anywhere, and prepare for a successful future in the digital world.</p>
            <p>Join Virtual TechCadd today – where knowledge meets opportunity.</p>

            {/* Features List */}
            <div className="row mt-4 gy-4">
              {/* Feature 1 */}
              <div className="col-12 d-flex align-items-start">
                <div className="flex-shrink-0 me-3 d-flex align-items-center justify-content-center rounded-4 about-icon"
                  style={{
                    background: "linear-gradient(120deg, #73328e 0%, #5a276f 100%)",
                    borderRadius: "20px",
                    height: "60px",
                    width: "60px",
                  }}>
                  <i className="bx bx-chart-trend text-white fs-3"></i>
                </div>
                <div>
                  <h5 className="mb-1">Industry-Oriented Courses</h5>
                  <p className="mb-0">
                    Learn AI, Data Analytics, AWS, CAD/CAM, UI/UX, and Digital Marketing with a practical approach and real-world projects.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="col-12 d-flex align-items-start">
                <div className="flex-shrink-0 me-3 d-flex align-items-center justify-content-center rounded-4 about-icon"
                  style={{
                    background: "linear-gradient(120deg, #73328e 0%, #5a276f 100%)",
                    borderRadius: "20px",
                    height: "60px",
                    width: "60px",
                  }}>
                  <i className="bx bx-widget text-white fs-3"></i>
                </div>
                <div>
                  <h5 className="mb-1">Placement Assistance</h5>
                  <p className="mb-0">
                    We guide students with internships, certifications, and 100% placement support to build a strong career path.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )

  const Gallery = () => (
    <div class="gallery-area overflow-hidden">
      <div class="container th-container">
        <div className="text-center mb-4" data-aos="fade-up">
          <h2 id="teamHeading" className="fw-bold display-6 mb-2 text-dark">Our Gallery</h2>
          <div aria-hidden="true" className="mx-auto" style={{ width: 120, height: 12, background: "radial-gradient(60px 6px at 60px 6px, rgba(2,6,23,.25), rgba(2,6,23,.12) 60%, rgba(0,0,0,0) 61%)" }} />
        </div>
        <div class="row gy-10 gx-10 justify-content-center align-items-center">
          <div class="col-md-6 col-lg-2">
            <div class="gallery-card">
              <div class="box-img global-img"><a href="assets/img/gallery/gallery_1_1.jpg"
                class="popup-image">
                <div class="icon-btn"><i class="fa fa-magnifying-glass-plus"></i></div><img
                  src="assets/img/gallery/gallery_1_1.jpg" alt="gallery image" />
              </a></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-2">
            <div class="gallery-card">
              <div class="box-img global-img"><a href="assets/img/gallery/gallery_1_2.jpg"
                class="popup-image">
                <div class="icon-btn"><i class="fa fa-magnifying-glass-plus"></i></div><img
                  src="assets/img/gallery/gallery_1_2.jpg" alt="gallery image" />
              </a></div>
            </div>
            <div class="gallery-card">
              <div class="box-img global-img"><a href="assets/img/gallery/gallery_1_3.jpg"
                class="popup-image">
                <div class="icon-btn"><i class="fa fa-magnifying-glass-plus"></i></div><img
                  src="assets/img/gallery/gallery_1_3.jpg" alt="gallery image" />
              </a></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-2">
            <div class="gallery-card">
              <div class="box-img global-img"><a href="assets/img/gallery/gallery_1_4.jpg"
                class="popup-image">
                <div class="icon-btn"><i class="fa fa-magnifying-glass-plus"></i></div><img
                  src="assets/img/gallery/gallery_1_4.jpg" alt="gallery image" />
              </a></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-2">
            <div class="gallery-card">
              <div class="box-img global-img"><a href="assets/img/gallery/gallery_1_5.jpg"
                class="popup-image">
                <div class="icon-btn"><i class="fa fa-magnifying-glass-plus"></i></div><img
                  src="assets/img/gallery/gallery_1_5.jpg" alt="gallery image" />
              </a></div>
            </div>
            <div class="gallery-card">
              <div class="box-img global-img"><a href="assets/img/gallery/gallery_1_6.jpg"
                class="popup-image">
                <div class="icon-btn"><i class="fa fa-magnifying-glass-plus"></i></div><img
                  src="assets/img/gallery/gallery_1_6.jpg" alt="gallery image" />
              </a></div>
            </div>
          </div>
          <div class="col-md-6 col-lg-2">
            <div class="gallery-card">
              <div class="box-img global-img"><a href="assets/img/gallery/gallery_1_7.jpg"
                class="popup-image">
                <div class="icon-btn"><i class="fa fa-magnifying-glass-plus"></i></div><img
                  src="assets/img/gallery/gallery_1_7.jpg" alt="gallery image" />
              </a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>

      {/* Global theme overrides so Bootstrap's "primary" uses #73328e */}


      <style>{

        `html, body { margin: 0 !important; padding: 0 !important; overflow-x: hidden; width: 100%; }

 

            :root {
          --bs-primary: #73328e;
          --bs-primary-rgb: 115, 50, 142;
        }
        .btn-primary {
          background-color: #73328e !important;
          border-color: #73328e !important;
        }
        .btn-primary:hover, .btn-primary:focus {
          background-color: #5a276f !important;
          border-color: #5a276f !important;
        }
        .btn-outline-primary {
          color: #73328e !important;
          border-color: #73328e !important;
        }
        .btn-outline-primary:hover, .btn-outline-primary:focus {
          background-color: #73328e !important;
          border-color: #73328e !important;
          color: #fff !important;
        }
        .text-primary { color: #73328e !important; }
        .bg-primary { background-color: #73328e !important; }
        .border-primary { border-color: #73328e !important; }
        a.nav-link:hover { color: #73328e !important; }
      `}</style>

      <Hero />
      <Section24x7 />
      <Highlights />
      <CategorySection />
      <CoursesSection />
      <PlacementCurriculum />
      <Slider />
      <WhyUsSection />
      <Outcomes />
      <Gallery />
      <FooterCTA />
      <Testimonials />
      {/* <UniqueFeatures /> */}
      <FAQ />
      <TeamSection />
      <Brands />
      <Colleges />
    </>
  );
};

export default SoftwareEngineeringCourse;
