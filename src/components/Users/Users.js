import "./Users.css"
import User from "../User/User"


const Users = (props) => {

    let maleVar = 0;
    let femaleVar = 0;
    const a = () => {
        props.users.forEach(e => {
            e.gender === "male" ? maleVar++ : femaleVar++;
        })
    }

    a()


    return (
        <>
            <div className="genderCounter" >Male:{maleVar} Female:{femaleVar}</div>
            <div className={props.grid ? "Users Users-grid" : "Users"}>


                {
                    props.users.map(e => <User grid={props.grid} user={e} />)
                }
            </div >
        </>
    )

}


export default Users