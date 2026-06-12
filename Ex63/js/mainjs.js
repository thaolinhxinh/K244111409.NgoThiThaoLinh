function load_data()
{
    tbody =
    document.getElementById("tblBody");

    for(i=0;i<members.length;i++)
    {
        if(members[i].name == undefined)
            continue;
        tr =create_tr(members[i]);

        tbody.appendChild(tr);
    }
}
function create_tr(member)
{
    tr = document.createElement("tr");
    tdName = document.createElement("td");
    tdName.innerHTML = member.name;
    tr.appendChild(tdName);
    tdEmail =document.createElement("td");
    tdEmail.innerHTML = member.email;
    tr.appendChild(tdEmail);
    tdGender =  document.createElement("td");
    tdGender.innerHTML = member.gender;
    tr.appendChild(tdGender);
    tdBirthday =document.createElement("td");
    tdBirthday.innerHTML = member.birthday;
    tr.appendChild(tdBirthday);
    tdHobbies =document.createElement("td");

    tdHobbies.innerHTML =member.hobbies;
    tr.appendChild(tdHobbies);
    tdColor = document.createElement("td");
    tdColor.innerHTML =
    member.color;
    tr.appendChild(tdColor);
    return tr;
}
function create_new_member()
{
    var name =
    document.getElementById("txtName").value;

    var email =
    document.getElementById("txtEmail").value;

    if(name=="")
    {
        alert("Name cannot be blank");
        return;
    }

    if(validEmail(email)==false)
    {
        alert("Email invalid");
        return;
    }

    var member =
    {
        name:name,
        email:email,
        gender:getGender(),
        birthday:getBirthday(),
        hobbies:getHobbies(),
        color:getColor()
    };

    var tr =
    create_tr(member);

    document.getElementById("tblBody")
            .appendChild(tr);
}
function loadBirth()
{
    for(var i=1;i<=31;i++)
    {
        option =document.createElement("option");
        option.innerHTML = i
        day.appendChild(option);
    }

    for(var i=1;i<=12;i++)
    {
        option = document.createElement("option");
        option.innerHTML = i;
        month.appendChild(option);
    }

    for(var i=1970;i<=2025;i++)
    {
        option = document.createElement("option");
        option.innerHTML = i;
        year.appendChild(option);
    }
}
function getGender()
{
    return document.querySelector(
        "input[name='gender']:checked"
    ).value;
}

function getBirthday()
{
    return day.value + "/" +
           month.value + "/" +
           year.value;
}

function getHobbies()
{
    var hobbies = "";
    if(cbShopping.checked)
        hobbies += "Shopping, ";
    if(cbTourism.checked)
        hobbies += "Tourism, ";
    if(cbChat.checked)
        hobbies += "Chat, ";
    if(cbReading.checked)
        hobbies += "Read a book, ";
    if(cbMusic.checked)
        hobbies += "Listening to music, ";
    return hobbies.replace(/,\s*$/, "");
}

function getColor()
{
    return document.querySelector(
        "input[name='color']:checked"
    ).value;
}
function validEmail(email)
{
    var pattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);
}