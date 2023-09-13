import { logo } from "../assets";

const Hero = () => {
  return (
    <header
      className="w-full flex 
    justify-center items-center flex-col"
    >
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/YevheniiLi")}
          className="black_btn"
        >
          My GitHub
        </button>
      </nav>
      <h1 className="head_text">
      Article Summarization Powered by <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc p-2">
      Simplify Your Reading Experience with Summize, the Open-Source Article Summarizer
      </h2>
    </header>
  );
};

export default Hero;
