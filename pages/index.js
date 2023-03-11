const index = () => {
  return (
    <section>
      <div className="h-screen w-full background ">
        <div className="h-[10%]">
          <div className="flex items-center justify-between p-5">
            <div>
              <p className="text-white">IO TEAM</p>
            </div>
            <div className="flex items-center gap-x-10">
              <div>
                <p className="text-white text-sm">SIGN IN</p>
              </div>
              <div>
                {' '}
                <button className="border border-orange-300 px-3 py-1 rounded-md text-white text-sm">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[90%] flex flex-col  ">
        <div className="h-[50%] w-full  flex items-center justify-center pt-16">
          <p className="text-gray-300 text-4xl">Welcome to io-team-website</p>
        </div>
        <div className=" flex  justify-center w-full">
          <input
            placeholder="search by Name,Projects,etc"
            className="bg-gray-300 w-[30%] text-xs  px-5 rounded-xl mx-2"
          ></input>
          <button className=" text-white rounded-xl py-3 px-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            LOOK UP
          </button>
        </div>
      </div>


      </div>
    </section>
  );
};

export default index;
