const adminButton = document.getElementById('adminButton');
const employeeButton = document.getElementById('employeeButton');
const allButton = document.getElementById('allButton');

let displayByRole = (data, wantedRole) => {
    let [ tbody ] = document.getElementsByTagName('tbody');
    tbody.innerHTML = '';
    for(let element of data){
        if (element.roles[0].role === wantedRole){
            tbody.innerHTML +=
                `<tr>
                    <th>${element.id}</th> 
                    <th>${element.number}</th> 
                    <th>${element.name}</th>
                    <th>${element.position}</th> 
                    <th>${element.birthday}</th>
                    <th>${element.age}</th>
                    <th>${element.email}</th> 
                    <th>${element.roles[0].role}</th> 
                </tr>`
        } 
        if (wantedRole === 'all'){
            tbody.innerHTML +=
                `<tr>
                    <th>${element.id}</th> 
                    <th>${element.number}</th> 
                    <th>${element.name}</th>
                    <th>${element.position}</th> 
                    <th>${element.birthday}</th>
                    <th>${element.age}</th>
                    <th>${element.email}</th> 
                    <th>${element.roles[0].role}</th> 
                </tr>`
        }    
    }

}

let getUsers = async () =>{
    let url = 'https://myjson.dit.upm.es/api/bins/4ddl';
    try {
        let response = await fetch(url);
        let data = await response.json();
        
        for(let element of data){
            element.age = (new Date().getFullYear()) - element.birthday.slice(-4);
            let month = element.birthday.slice(2,-4);
            console.log(element.birthday.slice(0,2), element.birthday.slice(2,-4),element.birthday.slice(-4))
            if(month.length === 1) element.birthday = element.birthday.slice(0,2) + '.0' + element.birthday.slice(2,-4) + '.' + element.birthday.slice(-4) + '.';
            if(month.length === 2) element.birthday = element.birthday.slice(0,2) + '.' + element.birthday.slice(2,-4) + '.' + element.birthday.slice(-4) + '.';
        }
        console.log(data)

        adminButton.onclick = displayByRole.bind(this,data,'admin');
        employeeButton.onclick = displayByRole.bind(this,data,'employee');
        allButton.onclick = displayByRole.bind(this,data,'all');

/*
        let [ tbody ] = document.getElementsByTagName('tbody');
        for(let element of data){
            tbody.innerHTML +=
                `<tr>
                    <th>${element.id}</th> 
                    <th>${element.number}</th> 
                    <th>${element.name}</th>
                    <th>${element.position}</th> 
                    <th>${element.birthday}</th>
                    <th>${element.age}</th>
                    <th>${element.email}</th> 
                    <th>${element.roles[0].role}</th> 
                </tr>`
        }

        tbody.innerHTML = '';
        for(let element of data){
            if (element.roles[0].role === 'admin'){
                tbody.innerHTML +=
                    `<tr>
                        <th>${element.id}</th> 
                        <th>${element.number}</th> 
                        <th>${element.name}</th>
                        <th>${element.position}</th> 
                        <th>${element.birthday}</th>
                        <th>${element.age}</th>
                        <th>${element.email}</th> 
                        <th>${element.roles[0].role}</th> 
                    </tr>`
            }    
        }

        tbody.innerHTML = '';
        for(let element of data){
            if (element.roles[0].role === 'employee'){
                tbody.innerHTML +=
                    `<tr>
                        <th>${element.id}</th> 
                        <th>${element.number}</th> 
                        <th>${element.name}</th>
                        <th>${element.position}</th> 
                        <th>${element.birthday}</th>
                        <th>${element.age}</th>
                        <th>${element.email}</th> 
                        <th>${element.roles[0].role}</th> 
                    </tr>`
            }    
        }

*/

/*
        for (let i = 0; i < birthdayList.length; i++) {
            let element = birthdayList[i];
            let month = element.slice(2,-4);
            let currentYear = new Date().getFullYear();
            console.log(currentYear,element.slice(-4))
            let age = currentYear - element.slice(-4);
            if(month.length === 1) element = element.slice(0,2) + '0' + element.slice(2);
            element = element.slice(0,2) + '.' + element.slice(2,4) + '.' + element.slice(-4) + '.';
            birthdayList[i] = element;
            ageList.push(age);
        }
*/
/*
        console.log(birthdayList.sort((a,b) => {
            let [a1,a2,a3] = a.split('.');
            let [b1,b2,b3] = b.split('.');
            a = a3+a2+a1;
            b = b3+b2+b1;
            return a-b;
        }))
*/
        //console.log(ageList);



    } catch (error) {
        console.log(error);
    }
}



getUsers();