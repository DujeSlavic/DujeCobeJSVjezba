import Tbody from "./Tbody";
import Thead from "./Thead";

const Table = (props) => (
    <table>
        <Thead />
        {props.data.map((element) => (
            <Tbody
                id={element.id}
                key={element.id}
                number={element.number}
                name={element.name}
                position={element.position}
                birthday={element.birthday}
                age={element.age}
                email={element.email}
                roles={element.roles}
                ageOrder={element.ageOrder}
            />
        ))}
    </table>
);

export default Table;