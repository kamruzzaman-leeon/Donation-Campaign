import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const Banner = ({setCategories}) => {
  const allCategories = useLoaderData();
  const SearchRef = useRef();

  const handleSubmit = () => {
    const search = SearchRef?.current?.value.toUpperCase();

    const filterData = allCategories.filter(item => item.category.toUpperCase().includes(search));
    // console.log(filterData.length);
    if (filterData.length > 0) {
      toast.success(`Total ${filterData.length} item(s) found`);
      setCategories(filterData);
    } else {
      toast.error('Invalid search! Try again.');
    }
  };
  
 
  return (
    <div className="hero" style={{
      backgroundImage: 'url(https://i.ibb.co/gJLnsXd/Background.jpg)',
      height: '65vh'
    }}>
      <div className="hero-overlay bg-white bg-opacity-90 "></div>
      <div className="flex flex-col items-center justify-center h-full mx-5">
        <div className="text-center mb-2 mb:mb-10">
          <h1 className="mb-5 text-2xl lg:text-4xl xl:text-7xl text-black font-bold">I Grow By Helping People In Need</h1>
        </div>

        <div className="form-control text-center w-3/5">
          <div className="input-group ">
            <input  ref={SearchRef }
              defaultValue={""} type="text" placeholder="Search here…" className="input input-bordered w-11/12" />
            <button 
            onClick={handleSubmit}
            className="btn btn-error text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


Banner.propTypes = {
  setCategories: PropTypes.func
}

export default Banner;
