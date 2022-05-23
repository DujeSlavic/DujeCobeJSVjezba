const Tbody = (props) => (
    <tbody>
        <tr>
            <th>{props.id}</th> 
            <th>{props.number}</th> 
            <th>{props.name}</th>
            <th>{props.position}</th> 
            <th>{props.birthday}</th>
            <th>{props.age}</th>
            <th>{props.email}</th> 
            <th>{props.roles}</th> 
        </tr>
    </tbody>
)

export default Tbody;