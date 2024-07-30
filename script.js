
function add() {
    const type = document.getElementById("options").value;
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    if(type!=="" && name!=="" && amount!==""){
        const table = document.querySelector("table");
        const row = document.createElement("tr");
        const typecell = document.createElement("td");
        const namecell = document.createElement("td");
        const amountcell = document.createElement("td");
        const optioncell = document.createElement("td");
        typecell.innerText=type;
        row.appendChild(typecell);
        namecell.innerText=name;
        row.appendChild(namecell);
        amountcell.innerText=amount;
        row.appendChild(amountcell);
        optioncell.innerHTML='<button onclick="removeItem(this)">Remove</button>';
        row.appendChild(optioncell);
        table.appendChild(row);
    } else {
        document.querySelector(".error").innerHTML="<p>⚠ Please Fill all the fields</p>";
    }
}

function removeItem(button) {
    const remove = button.parentNode.parentNode;
    remove.parentNode.removeChild(remove);
}