export const clickInComingLine = e => {
    console.log(true);
    if (e.currentTarget.classList.contains("on-hold")) {
       document.querySelector(".incoming-line-button-item.active").classList.add("on-hold");
       document.querySelector(".incoming-line-button-item.active").classList.remove("active");

        e.currentTarget.classList.remove("on-hold");
        e.currentTarget.classList.add("active");
    }
};

export  const toggleHeaghtKeyboard = e =>{
    e.currentTarget.closest(".main-wrapper").querySelector(".keyboard-wrapper").classList.toggle("open");
    e.currentTarget.classList.toggle("open")
};