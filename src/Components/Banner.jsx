
const Banner = () => {
  return (
    <div className="hero" style={{
      backgroundImage: 'url(https://i.ibb.co/gJLnsXd/Background.jpg)',
      height: '65vh'
    }}>
      <div className="hero-overlay bg-white bg-opacity-90 "></div>
      <div className="text-center text-neutral-content flex flex-col justify-center mx-5">
        <div className="text-center">
          <h1 className="mb-5 text-2xl lg:text-4xl text-black font-bold">I Grow By Helping People In Need</h1>
        </div>
        <div className="form-control">
          <div className="input-group">
            <input type="text" placeholder="Search here…" className="input input-bordered w-11/12" />
            <button className="btn btn-error text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Banner;