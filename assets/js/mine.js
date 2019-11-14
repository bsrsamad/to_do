let formc = document.getElementById("form");

formc.addEventListener("submit",(e) => {
    e.preventDefault();
    bsr()
});

function bsr() {

    let task =document.getElementById("task").value
    let time =document.getElementById("time").value
    let day =document.getElementById("day").value
    let status=document.getElementById("status").value
    let date=document.getElementById("date").value
    let tbody = document.getElementById('gh');
    let all = {
        task,
        time,
        day,
        status,
        date
    }

    console.log(all);

    // document.getElementById('first').innerHTML=all.task
    // document.getElementById('second').innerHTML=all.time
    // document.getElementById('third').innerHTML=all.day
    // document.getElementById('forth').innerHTML=all.status
    // document.getElementById('fifth').innerHTML=all.date



    let tr = document.createElement('tr');
    let tdtask = document.createElement('td')
    let tdtime = document.createElement('td')
    let tdday = document.createElement('td')
    let tdstatus = document.createElement('td')
    let tddate = document.createElement('td')

    tdtask.textContent = all.task;
    tdtime.textContent = all.time;
    tdday.textContent = all.day;
    tdstatus.textContent = all.status;
    tddate.textContent = all.date;

    tr.appendChild(tdtask)
    tr.appendChild(tdtime)
    tr.appendChild(tdday)
    tr.appendChild(tdstatus)
    tr.appendChild(tddate)

    tbody.appendChild(tr);
}
