import React from 'react'

const Sitebar = () => {
  return (
    // <div className='w-[402px]'>Sitebar</div>
   



    <div className="w-[350px] p-4 text-sm text-gray-700">
      {/* Search input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Twitter"
          className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
        />
      </div>

      {/* Trends */}
      <div className="bg-gray-100 rounded-xl mb-4">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center font-bold text-base">
          Trends for you
          <span className="text-gray-500 cursor-pointer">⚙️</span>
        </div>
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="p-4 border-b border-gray-200 hover:bg-gray-200 cursor-pointer">
            <p className="text-gray-500 text-xs mb-1">Trending in Germany</p>
            <p className="font-semibold">Revolution</p>
            <p className="text-gray-500 text-xs">50.4K Tweets</p>
          </div>
        ))}
        <div className="p-4 text-blue-500 hover:underline cursor-pointer">
          Show more
        </div>
      </div>

      {/* Suggestions */}
      <div className="bg-gray-100 rounded-xl mb-4">
        <div className="p-4 border-b border-gray-200 font-bold text-base">
          You might like
        </div>
        {[
          { name: 'Mushtariy', username: '@Mushtar565266' },
          { name: 'Shuhratbek', username: '@mrshukhrat' },
        ].map((user, idx) => (
          <div key={idx} className="p-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer">
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-500 text-xs">{user.username}</p>
            </div>
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full">
              Follow
            </button>
          </div>
        ))}
        <div className="p-4 text-blue-500 hover:underline cursor-pointer">
          Show more
        </div>
      </div>

      {/* Footer links */}
      <div className="text-xs text-gray-500 leading-relaxed px-4">
        <p className="inline-block mr-2 hover:underline cursor-pointer">Terms of Service</p>
        <p className="inline-block mr-2 hover:underline cursor-pointer">Privacy Policy</p>
        <p className="inline-block mr-2 hover:underline cursor-pointer">Cookie Policy</p>
        <p className="inline-block mr-2 hover:underline cursor-pointer">Imprint</p>
        <p className="inline-block mr-2 hover:underline cursor-pointer">Ads Info</p>
        <p className="inline-block hover:underline cursor-pointer">More...</p>
        <p className="mt-2">© 2021 Twitter, Inc.</p>
      </div>
    </div>
  );
};




export default Sitebar