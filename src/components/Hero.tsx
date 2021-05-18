import { h } from "preact";
import type { FunctionComponent } from "preact";

import ScrollText from "./ScrollText";

import heroImg from "../assets/hero.svg";

const Hero: FunctionComponent = () => {
  return (
    <div class="relative w-full h-screen flex justify-center items-center">
      <img class="h-28" alt="Title" src={heroImg} />
      <div class="absolute bottom-4">
        <ScrollText />
      </div>
    </div>
  );
};

export default Hero;
