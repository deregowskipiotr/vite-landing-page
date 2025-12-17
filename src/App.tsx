
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Feature } from "./components/Feature";
import {  Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { SectionDividerAnimated } from "./components/SectionDividerAnimated";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <Layout>
      {/* your pages/components go here */}
      <Hero />
      <SectionDividerAnimated />
      <About />
      <SectionDividerAnimated />
      <Feature />
      <SectionDividerAnimated />
      <Pricing />
      <SectionDividerAnimated />
      <Contact />
    </Layout>
  );
}

export default App;
