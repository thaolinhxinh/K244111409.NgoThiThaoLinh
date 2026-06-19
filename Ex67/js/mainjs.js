function load_customers_from_external_xml(dataset,bodystudent)
{
    var xhr =new XMLHttpRequest();
    xhr.open("GET",dataset,true);
    xhr.send();
    xhr.onreadystatechange=function()
    {
    if (xhr.readyState==4 && xhr.status==200)
    {
        console.log("Data loaded successfully");
        console.log(xhr.responseXML);
        var xmlDoc = xhr.responseXML;
        render_xml2html(xmlDoc,bodystudent);
    }
        else if (xhr.readyState==4)
    {
        console.log("Error loading data. Status: " + xhr.status);
        console.log("ReadyState: " + xhr.readyState);
    }
    }
}


function load_customers_from_xml(dataset,bodystudent)
{
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(dataset,"text/xml");
    render_xml2html(xmlDoc,bodystudent);

   

}
function render_xml2html(xmlDoc,bodystudent)
{
     var student_tags=xmlDoc.getElementsByTagName("student");
    for (i=0;i<student_tags.length;i++)
    {
        //get tag at i position
        //XML DOM
        student_tag=student_tags[i];

        id_tag=student_tag.getElementsByTagName("id")[0];
        name_tag=student_tag.getElementsByTagName("name")[0];
        birthday_tag=student_tag.getElementsByTagName("birthday")[0];
        gender_tag=student_tag.getElementsByTagName("gender")[0];

        student_id=id_tag.childNodes[0].nodeValue;
        student_name=name_tag.childNodes[0].nodeValue;
        student_birthday=birthday_tag.childNodes[0].nodeValue;
        student_gender=gender_tag.childNodes[0].nodeValue;
        //HTML DOM
        tr=document.createElement("tr");
        td_id=document.createElement("td");
        td_name=document.createElement("td");
        td_birthday=document.createElement("td");
        td_gender=document.createElement("td");
        td_id.innerHTML=student_id;
        td_name.innerHTML=student_name;
        td_birthday.innerHTML=student_birthday;
        td_gender.innerHTML=student_gender;
        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_birthday);
        tr.appendChild(td_gender);
        
        (function(id, name, birthday, gender)
        {
            tr.onclick = function()
            {
                var studentData = {
                    id: id,
                    name: name,
                    birthday: birthday,
                    gender: gender
                };
                localStorage.setItem("student", JSON.stringify(studentData));
                window.location.href = "detail.html";
            };
        })(student_id, student_name, student_birthday, student_gender);
        bodystudent.appendChild(tr);
    }
}
function create_tr(student)
{
    tr = document.createElement("tr");

    tdID = document.createElement("td");
    tdName = document.createElement("td");
    tdBirthday = document.createElement("td");
    tdGender = document.createElement("td");

    tdID.innerHTML = student.id;
    tdName.innerHTML = student.name;
    tdBirthday.innerHTML = student.birthday;
    tdGender.innerHTML = student.gender;

    tr.appendChild(tdID);
    tr.appendChild(tdName);
    tr.appendChild(tdBirthday);
    tr.appendChild(tdGender);

    tr.onclick = function()
    {
        localStorage.setItem(
            "student",
            JSON.stringify(student)
        );
        window.location.href = "detail.html";
    };
    return tr;
}