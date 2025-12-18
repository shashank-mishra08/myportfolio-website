import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import CanvasLoader from "./components/Loader";

const App = () => {
  return (
    <BrowserRouter>


      <div className='relative z-0 bg-primary'>
      {/* this div is for navbar and hero section, enclosed within it. */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Suspense fallback={<CanvasLoader />}>
          <Hero />
          </Suspense>
        </div>
        {/* just below this section we have, we have other sections */}

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
