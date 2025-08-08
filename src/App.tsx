import { Route, Routes } from "react-router-dom";
import { Footer } from "./component/Footer/Footer.tsx";
import Header from "./component/Header/Header.tsx";
import { lazy, Suspense } from "react";
import Services from "./pages/Services/Services.tsx";
import { Loading } from "./component/Loading.tsx";
import ErrorBoundary from "./component/ErrorBoundary.tsx";

const Home = lazy(() => import("./pages/Home/Home.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const OurTeam = lazy(() => import("./pages/OurTeam/OurTeam.tsx"));
const Careers = lazy(() => import("./pages/Careers/Careers.tsx"));
const Products = lazy(() => import("./pages/Products/Products.tsx"));
const NotFoundPage = lazy(() => import("./pages/NotFound.tsx"));

function App() {
  return (
    <ErrorBoundary>
      <div className="w-full">
        <Header />

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/careers" element={<Careers />} />

            {/* Products Routes */}
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<Products />} />

            {/* Services Routes */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<Services />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
