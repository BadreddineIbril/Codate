import "./style.scss";
import Hero from "./partials/Hero";
import Selector from "./partials/Selector";
import Formats from "./partials/formats";
import Faq from "./partials/faq/Faq";
import WhyUs from "./partials/why-us/WhyUs";
import Features from "./partials/features/Features";
import HowToUse from "./partials/how-to-use/HowToUse";
import Testimonial from "./partials/testimonial/Testimonial";

export default function Index() {
  return (
    <div className="home-page">
      <Hero />
      <Selector />
      <Formats />
      <Features />
      <HowToUse />
      <WhyUs />
      <Testimonial />
      <Faq />
    </div>
  )
}
