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

        
      </div>
    </section>
  );
};

export default index;
