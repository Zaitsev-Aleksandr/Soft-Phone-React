import { useRef } from "react";

export  const colorArr = [["#FFE1E1","#FD8181"],["#D7F7C8", "#6DD453"],["#FFF2C9", "#FFCA27"], ["#D9EAFE", "#213991"], ["#e4d5f6", "#9B51E0"]];
export const addColorAvatar=(arr)=>arr[Math.floor(Math.random()*5)];

const useRandomColor = () => useRef(addColorAvatar(colorArr)).current;
export default useRandomColor;