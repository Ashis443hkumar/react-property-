import React from "react";
import './home.css'
import Hero from "./hero/Hero";
import Card from "./card/Card";
import Banner from "./banner/banner";
import Service from "./service/Service";
import Testimonial from './testimonial/Testimonial'

export default function Home() {
  return (
    <div>
        <Hero/>
        <Card/>
        <Service/>
        <Testimonial/>
        <Banner/>

    </div>
  );
}
