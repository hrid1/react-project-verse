import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="flex items-center p-2 bg-slate-300">
      <button className="btn border-none rounded-none btn-primary text-lg">Latest News</button>

      <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
