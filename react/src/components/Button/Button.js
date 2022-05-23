import Table from "../Table/Table";

const Button = (props) => {
    // //<button onClick={props.onClick}>{props.children}</button>
    // const displayByRole = (data, wantedRole) => {
    //     const [ tbody ] = document.getElementsByTagName('tbody');
    //     tbody.innerHTML = '';
    
    //     const itemsToRender = wantedRole === 'all' ? data : data.filter((element) => element.roles === wantedRole);
    //     displayedData = [...itemsToRender];
    
    //     for(let element of displayedData){
    //             tbody.innerHTML +=
    //                 `<tr>
    //                     <th>${element.id}</th> 
    //                     <th>${element.number}</th> 
    //                     <th>${element.name}</th>
    //                     <th>${element.position}</th> 
    //                     <th>${element.birthday}</th>
    //                     <th>${element.age}</th>
    //                     <th>${element.email}</th> 
    //                     <th>${element.roles}</th> 
    //                 </tr>`
    //     }
    // }


    // const displayByRole = (data, wantedRole) => {
    //     const itemsToRender = wantedRole === 'all' ? data : data.filter((element) => element.roles === wantedRole);

    //     <Table data={itemsToRender} />
    // }

    return(
        <button onClick={props.handleClick}>{props.buttonName}</button>
    )
     
}

export default Button;