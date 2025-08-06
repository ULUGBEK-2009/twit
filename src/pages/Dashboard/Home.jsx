// import React from 'react'
// import { Heading, Input } from '../../components'
// import { ModeIcon } from '../../assets/icons'
// import { Logo } from '../../assets/images'

// const Home = () => {
//   return (
//     <div>

//       <div className='flex items-center justify-between p-5 border-b-[1px] border-[#D8D8D8]  '>


//         <Heading tag={"h2"} title={"Home"} />
//         <ModeIcon />

//       </div>

//       <div className='flex gap-[15px] p-5 border-b-[1px] border-[#D8D8D8] '>
//         <img src={Logo} alt="Logo img" width={60} height={60} />
//         <form >


//           <Input classList={'!border-none  !mb-[32px] !p-0 !pt-[11px] front-semibold'} name={""} placeholder={"what's happening"} />

//           {/* <div className='flex  items-center gap-[22px]' >
//             <button><ChooseImgIcon /></button>
//             <button><GiftIcon /></button>
//             <button><GiftIcon /></button>
//             <button><GiftIcon /></button>
//             <button><GiftIcon /></button>
//           </div> */}



//         </form>
//       </div>

//     </div>


//   )
// }

// export default Home

import React, { useState } from "react";

const TodoApp = () => {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") return;

    const newTask = {
      id: Date.now(),
      name: taskName,
     
    };

    setTaskList([newTask, ...taskList]);
    setTaskName("");
  };

  return (
    <div className="max-w-[600px] mx-auto mt-10 px-4">
      <h2 className="text-xl font-bold mb-4">message</h2>

      {/* Task qo‘shish formasi */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Vazifani yozing..."
          className="flex-1 border px-4 py-2 rounded"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
         
        >
       
        </button>
      </form>

  
      <ul className="space-y-4">
        {taskList.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <div>
              <p className="font-semibold"> message {task.name}</p>
            </div>
            <span className="text-sm text-gray-400">#{task.id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
