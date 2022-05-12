const adminButton = document.getElementById('adminButton');
const employeeButton = document.getElementById('employeeButton');
const allButton = document.getElementById('allButton');
const ageButton = document.getElementById('ageButton');
let data;
let displayedData = [];

const getUsers = async () => {
    const url = 'https://myjson.dit.upm.es/api/bins/4ddl';
    try {
        const response = await fetch(url);
        const backendData = await response.json();
        
        data = backendData.map((element) => ({
            id: `${element.id}`,
            number:`${element.number}`,
            name:`${element.name}`,
            position:`${element.position}`,
            birthday: dateSyntax(element.birthday),
            age:(new Date().getFullYear()) - element.birthday.slice(-4),
            email:`${element.email}`,
            roles:`${element.roles[0].role}`,
            ageOrder: Number(new Date(dateSyntax(element.birthday).split('.').reverse().join('-')))
        }));

        displayByRole(data,'all');

        adminButton.addEventListener('click', () => displayByRole(data,'admin'));
        employeeButton.addEventListener('click', () => displayByRole(data,'employee'));
        allButton.addEventListener('click', () => displayByRole(data,'all'));
        ageButton.addEventListener('click', () => {
            displayByRole(orderByAge(),'all'); 
        });
    } catch (error) {
        console.log(error);
    }
}

const displayByRole = (data, wantedRole) => {
    const [ tbody ] = document.getElementsByTagName('tbody');
    tbody.innerHTML = '';

    const itemsToRender = wantedRole === 'all' ? data : data.filter((element) => element.roles === wantedRole);
    displayedData = [...itemsToRender];

    for(let element of displayedData){
            tbody.innerHTML +=
                `<tr>
                    <th>${element.id}</th> 
                    <th>${element.number}</th> 
                    <th>${element.name}</th>
                    <th>${element.position}</th> 
                    <th>${element.birthday}</th>
                    <th>${element.age}</th>
                    <th>${element.email}</th> 
                    <th>${element.roles}</th> 
                </tr>`
    }
}

const orderByAge = () => displayedData.sort((a,b) => a.ageOrder - b.ageOrder);

const dateSyntax = (date) => {
    const day = date.slice(0,2);
    const month = date.slice(2,-4).length === 1 ? '0' + date.slice(2,-4) : date.slice(2,-4);
    const year = date.slice(-4);
    return [day, month, year].join('.');
}


getUsers();