//selecting all requered element
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = ()=>{ //once window loaded
    filterItem.onclick = (selectedItem)=>{ //when user clicked on filterItem div
        if(selectedItem.target.classList.contains("item")){ //if user click element has .item class
            filterItem.querySelector(.active).classList.remove("active"); //remove the active class which is in the first element
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
            console.log(filterName);
        }
    }
}
