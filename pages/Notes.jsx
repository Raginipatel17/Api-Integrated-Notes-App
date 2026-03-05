import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export function Notes({setnotes}) {
 
  const close=()=>{
  setnotes(false);
  window.location.reload();
  }
  const inputunit={
    notelist:"",
    priority:""
  }
  const [note,set]=useState(inputunit);
  const handleInput=(e)=>{
    set({...note,[e.target.name]:e.target.value});
    
  }
  console.log(note);
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(note.notelist=='' || note.priority==''){
      alert('fill the note ');
    }else{
      const getitem=JSON.parse(localStorage.getItem('list')||'[]');
      let arr=[]
      arr=[...getitem];
      arr.push(note);
      localStorage.setItem('list',JSON.stringify(arr));
      alert('Note is added');
    }
  }
  return (
    <div className='w-90 sm:w-120 sm:m-10 p-5 rounded-xl bg-white d-fixed flex flex-col justify-center border border-black'>
      <div className='flex justify-between'>
        <h1 className='text-2xl text-black m-auto font-semibold sm:text-center p-2 mb-2 '>Add Notes :</h1>
        <span onClick={close} className='font-bold text-red-600 text-2xl ps-2 pe-2 cursor-pointer d-fixed'>x</span>
      </div>
    <form  className=' flex flex-col justify-center'>
      <label className='flex'>
             <textarea name='notelist' className="w-90 bg-white p-2 text-center rounded-lg border-2 border-gray-400 sm:w-185" id="textarea" placeholder='Add Notes' onChange={handleInput}/>
             </label>
             <label className='flex align-center m-2'><span className='text-2xl text-black font-semibold m-auto sm:text-center p-2 mb-2'>Priority of task:</span></label>
             <select name='priority' id='priority' onChange={handleInput} className="w-50 sm:w-100 bg-white border-2 border-gray-400 p-2 rounded-lg sm:w-110"  value="Priority">
              <option value="">---select and option---</option>
              <option value='High'>High</option>
              <option value='Medium'>Medium</option>
              <option value='Low'>Low</option>
             </select>
             
           <button onClick={handlesubmit} className='w-15 text-center border-2 cursor-pointer border-purple-500 text-white m-auto rounded-lg my-4 bg-purple-500 p-2 font-semibold'>Add</button>
           </form>
           </div>
  )
}
