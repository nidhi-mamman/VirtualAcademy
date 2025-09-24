import './App.css';
import Siteroutes from './components/siteroutes';
import Footer from './components/footer';
import Header from './adminpanel/adminheader';
import { useEffect, useState } from 'react';
import usercontext from './components/Contextapi';
import Userheader from './components/userheader';

function App() {
  const [flag, setflag] = useState(() => {
    const storedFlag = localStorage.getItem('flag');
    return storedFlag ? storedFlag : null;
  });
  const [utype, setutype] = useState(null);

  useEffect(() => {
    if (flag === "user") {
      setutype("user");
    } else if (flag === "admin") {
      setutype("admin");
    }
  }, [flag]);

  useEffect(() => {
    if (flag) {
      localStorage.setItem('flag', flag);
    } else {
      localStorage.removeItem('flag');
    }
  }, [flag]);

  return (
    <usercontext.Provider value={{ setflag, flag }}>
      {utype === "admin" ? <Header /> : <Userheader />}
      <Siteroutes />
      <Footer />
    </usercontext.Provider>
  );
}

export default App;