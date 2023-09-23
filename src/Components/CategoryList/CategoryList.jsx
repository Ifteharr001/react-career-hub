import icons1 from "../../icons/calendar.png";
import icons2 from "../../icons/creative.png";
import icons3 from "../../icons/marketing.png";
import icons4 from "../../icons/money.png";

const CategoryList = () => {
    return (
      <div>
        <div className="my-12 text-center ">
          <h2 className="font-bold text-4xl py-5">Job Category List</h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="flex gap-5">
            {/* card - 01 */}
          <div className="card bg-gray-300 rounded-xl p-8">
            <figure>
              <img className="w-11"
                src={icons1}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Account & Finance</h2>
              <p>300 Jobs Available</p>
            </div>
          </div>
            {/* card - 02 */}
          <div className="card bg-gray-300 rounded-xl p-8">
            <figure>
              <img className="w-11"
                src={icons2}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Account & Finance</h2>
              <p>300 Jobs Available</p>
            </div>
          </div>
            {/* card - 03 */}
          <div className="card bg-gray-300 rounded-xl p-8">
            <figure>
              <img className="w-11"
                src={icons3}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Account & Finance</h2>
              <p>300 Jobs Available</p>
            </div>
          </div>
            {/* card - 04 */}
          <div className="card bg-gray-300 rounded-xl p-8">
            <figure>
              <img className="w-11"
                src={icons4}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Account & Finance</h2>
              <p>300 Jobs Available</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CategoryList;