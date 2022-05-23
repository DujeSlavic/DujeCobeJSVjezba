import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Table from "../components/Table/Table";
//import Thead from "../components/Table/Thead";
//import TestC from "../components/TestC/TestC";

const Home = () => { 

    // const [count, setCount] = useState(0)

    // const add = ()=> {
    //     setCount((prevCount) => prevCount + 1) 
    //     setCount((prevCount) => prevCount + 1)
    // }

    // useEffect(() => {
    //   console.log("use effect")
    // }, [count])

    const [undoOrderByAge, setundoOrderByAge] = useState(false);
    const [data, setData] = useState([]);
    const [role, setRole] = useState("all");
    const [buttonText, setButtonText] = useState('order by age');

    useEffect(() => {
        requestData();
    },[]);

    const requestData = async () => {
        const response = await fetch ('https://myjson.dit.upm.es/api/bins/4ddl');
        const backendData = await response.json();

        const data1 = backendData.map((element) => ({
            id: element.id,
            number: element.number,
            name: element.name,
            position: element.position,
            birthday: dateSyntax(element.birthday),
            age:(new Date().getFullYear()) - element.birthday.slice(-4),
            email: element.email,
            roles: element.roles[0].role,
            ageOrder: Number(new Date(dateSyntax(element.birthday).split('.').reverse().join('-')))
        }));

        setData(data1);
        //return data1
    }

    

    

    const dateSyntax = (date) => {
        const day = date.slice(0,2);
        const month = date.slice(2,-4).length === 1 ? '0' + date.slice(2,-4) : date.slice(2,-4);
        const year = date.slice(-4);
        return [day, month, year].join('.');
    }

    const renderData = role === 'all' ? data : data.filter((element) => element.roles === role);

    // const displayByRole = (data, wantedRole) => {
    //     const itemsToRender = wantedRole === 'all' ? data : data.filter((element) => element.roles === wantedRole);

    //     <Table data={itemsToRender} />
    // }
    
    const orderByAge = (array) => array.sort((a,b) => a.ageOrder - b.ageOrder);
    const orderById = (array) => array.sort((a,b) => a.id - b.id);

   return (
        // <>
        // <Button onClick={add}>
        //     <div>{ count }</div>
        // </Button>
        // <TestC />
        // </>
        <>
        {
            renderData && <Table data={renderData} />
        }
        <Button  buttonName={'show all'} handleClick={() => setRole("all")} />
        <Button  buttonName={'show admin'} handleClick={() => {setRole("admin")}} />
        <Button  buttonName={'show employee'} handleClick={() => {setRole("employee")}} />
        <Button  buttonName={buttonText} handleClick={() => {
            //let tempArray = orderByAge(data)
            if(buttonText === 'order by age') {
                //setundoOrderByAge(true);
                setButtonText('order by id');
                setData(orderByAge(data)); 
            }
            if(buttonText === 'order by id') {
                //setundoOrderByAge(false);
                setButtonText('order by age');
                setData(orderById(data));
            }
            //this.fordeUpdate();
            //setRole('admin') 
            //setRole('all');
            }}/>
        </>
        // <table>
        //     <thead>
        //         <Thead />
        //     </thead>
        //     <tbody>
        //     {data && data.map((element) => {
        //         return<Table 
        //         id={element.id}
        //         key={element.id}
        //         number={element.number}
        //         name={element.name}
        //         position={element.position}
        //         birthday={element.birthday}
        //         age={element.age}
        //         email={element.email}
        //         roles={element.roles}
        //         ageOrder={element.ageOrder}
        //         />
        //     })}
        //     </tbody>
        // </table>


        // <Table 
        //     id={data[1].id}
        //     number={data[1].number}
        //     name={data[1].name}
        //     position={data[1].position}
        //     birthday={data[1].birthday}
        //     age={data[1].age}
        //     email={data[1].email}
        //     roles={data[1].roles}
        //     ageOrder={data[1].ageOrder}
        
        // />

    )
}

export default Home;