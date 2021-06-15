import "./Users.css"
import User from "../User/User"


const Users = (props) => {
    return (
        <div className="Users">
            {
                props.users.map(e => <User user={e} />)
            }
        </div >
    )

}


export default Users