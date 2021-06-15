import "./User.css"

const User = (props) => {

    const date = new Date(props.user.dob.date);
    return (
        <div className={props.user.gender === "male" ? "user" : "user female"}>
            <div className="img-wrapper">
                <img src={props.user.picture.thumbnail}></img>
            </div>
            <div className="text-wrapper">
                <h4>{props.user.name.first} {props.user.name.last}</h4>
                <p>Email: {props.user.email}</p>
                <p>Birthday: {date.getDate()}.{date.getMonth()}.{date.getFullYear()}.</p>
            </div>





        </div>
    )
}

export default User