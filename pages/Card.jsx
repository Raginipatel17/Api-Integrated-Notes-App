// import React, { useEffect, useState } from "react";
import Mapwidget from "../api/mapwidget";
import Calorie from "../api/Calorie";
import WeatherWidget from "../api/weatherwidget";
export function Card({ data, deleteitem }) {
  const priorityColor = (e) => {
    if (e == "High") {
      return "#FA8072";
    }
    if (e == "Medium") {
      return "#89e783";
    }
    return "#d8ee68";
  };
  return (
    <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
      {data.map((task, index) => (
        <span
          style={{ background: priorityColor(task.priority) }}
          
          className="cursor-pointer rounded-xl flex justify-between font-semibold bg-red-100 m-3 p-2"
          key={index}
        >
          <div className="sm:flex sm:justify-between">
          {task.notelist}
         <WeatherWidget task={task.notelist}/>
         <Mapwidget place={task.notelist}/>
         {/* <Calorie food={task.notelist}/> */}

          </div>
          <span
            className="font-bold h-8 bg-red-500 rounded-xl ps-2 pe-2 cursor-pointer d-fixed"
            onClick={() => deleteitem(index)}
            >
            x
          </span>
        </span>
      ))}
    </div>
  );
}
