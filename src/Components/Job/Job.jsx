import { FaLocationDot, FaCircleDollarToSlot } from "react-icons/fa6";
const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img className="w-50 h-[150px]" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">
            {job_type}
          </button>
        </div>
        <div className="mt-4 flex">
          <h2 className="flex mr-4">
            <FaLocationDot className="text-2xl mr-2"></FaLocationDot>
            {location}
          </h2>
          <h2 className="flex">
            <FaCircleDollarToSlot className="text-2xl mr-2"></FaCircleDollarToSlot>
            {salary}
          </h2>
        </div>
        <div className="card-actions">
          <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
