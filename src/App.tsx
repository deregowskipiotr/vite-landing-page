
import {  Hero } from "./components/Hero";
import Pricing from "./components/Pricing";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <Layout>
      {/* your pages/components go here */}
      <Hero />
      <Pricing />
      
    </Layout>
  );
}

export default App;
