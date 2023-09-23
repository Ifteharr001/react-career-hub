import userImg from "../../images/user.png"

const Banner = () => {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <img
            src={userImg}
            className="max-w-sm rounded-lg "
          />
          <div>
            <h1 className="text-5xl font-bold leading-[60px]">
              One Step <br /> Closer To Your <br />
              <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">
                Dream Job
              </span>
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the <br /> information
              you need. Its your future. Come find it. Manage all <br /> your job
              application from start to finish.
            </p>
            <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;