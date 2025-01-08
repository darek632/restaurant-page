export function createMenu() { 
    let mainDiv = document.getElementById("content");
    let titleDiv = document.createElement("div");
    let oneLiner = document.createElement("div");
    let table = document.createElement("table");

    titleDiv.id = "menu-title";
    titleDiv.textContent = "Daily Deli";
    mainDiv.appendChild(titleDiv);

    oneLiner.textContent = "Our menu is all about fresh local ingredients made right here, with no chemicals, additives, or anything artificial. Just real good bread.";
    oneLiner.classList.add("one-liner")
    mainDiv.appendChild(oneLiner);

    table.id = "menu-table";
    mainDiv.appendChild(table);

    const menuItems = [
        {name:"Bread",price:"3.5"},
        {name:"Bread and butter",price:"5.5"},
        {name:"Bread and oil",price:"5.5"},
        {name:"Butter and bread",price:"6.5"},
        {name:"Bread sandwich",price:"7.5"},
        {name:"Bread soup",price:"6.5"},
        {name:"Bread with chicken",price:"9.5"},
        {name:"Chicken with bread",price:"10.5"},
        {name:"Bread and chips",price:"7.5"},
        {name:"Bread tartare",price:"11"},

    ]

    menuItems.forEach(item => {

        const row = table.insertRow();

        const nameCell = row.insertCell(0);
        nameCell.textContent = item.name;
        nameCell.classList.add("item");

        const priceCell = row.insertCell(1);
        priceCell.textContent = item.price;
        priceCell.classList.add("price");
    })




  

    // for ( let i=0; i<10; i++) { 
    //     let newRow = document.createElement("tr");
    //     for (let j=0; j<2; j++) { 
    //         let newColumn = document.createElement("td");
    //         newRow.appendChild(newColumn);
    //     }
    //     table.appendChild(newRow);
    // }

    
    // mainDiv.appendChild(table);

}