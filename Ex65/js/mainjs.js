function addNode()
{
    let content = document.getElementById("txtContent").value;
    let pos = parseInt(document.getElementById("txtPosAdd").value);
    let ul = document.getElementById("webNode");

    let li = document.createElement("li");
    li.innerHTML = content;

    let items = ul.getElementsByTagName("li");

    if(pos < 0 || pos > items.length)
    {
        alert("Invalid Position");
        return;
    }

    if(pos == items.length)
        ul.appendChild(li);
    else
        ul.insertBefore(li, items[pos]);
}
function removeNode()
{
    let pos = parseInt(document.getElementById("txtPosRemove").value);
    let ul = document.getElementById("webNode");
    let items = ul.getElementsByTagName("li");

    if(pos < 0 || pos >= items.length)
    {
        alert("Invalid Position");
        return;
    }

    ul.removeChild(items[pos]);
}
function modifyNode()
{
    let newContent = document.getElementById("txtNewContent").value;
    let pos = parseInt(document.getElementById("txtPosModify").value);
    let ul = document.getElementById("webNode");
    let items = ul.getElementsByTagName("li");

    if(pos < 0 || pos >= items.length)
    {
        alert("Invalid Position");
        return;
    }

    items[pos].innerHTML = newContent;
}