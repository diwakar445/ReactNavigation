import React,{ useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const Github = () => {
    const data = useLoaderData();
//   let [data, setData] = useState(0);
//   useEffect( () => {
//     fetch('https://api.github.com/users/hiteshchoudhary').
//     then(response => response.json())
//     .then(data => {
//         console.log(data);
//         setData(data)
//     })
// }, []);
  return <div className="bg-gray-600 text-white text-4xl p-4">
    Github Followers: {data.followers}
  </div>
};

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
};