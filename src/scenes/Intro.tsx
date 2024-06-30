import FlipWords from "../components/FlipWords";
import { INTRO } from "./constants";

const Intro = () => {
  return (
    <div className="w-full h-full justify-center flex flex-col items-center gap-2">
      <h1 className="text-neutral-300 text-7xl">Hi, I'm Sahaj.</h1>
      <h3 className="text-neutral-400 text-3xl">
        I'm a
        <span>
          <FlipWords words={INTRO.roles} className="text-orange-800" />
        </span>
      </h3>
      <p className="text-neutral-400 text-center px-4 max-w-prose">
        {INTRO.info}
      </p>
    </div>
  );
};

export default Intro;
