import { getDefaultNormalizer } from "@testing-library/dom";
import "./User.css"

const User = (props) => {

    const date = new Date(props.user.dob.date);
    const genderClass = props.user.gender === "male" ? "" : "female";
    const gridClass = props.grid ? "user-grid" : "";

    const getEmail = () => {
        const emailSpl = props.user.email.split("");
        console.log(emailSpl)
        emailSpl.splice(3, 5, "...");
        console.log(emailSpl.splice(3, 5, "..."))
        return emailSpl.join("");

    }
    return (
        <div className={`user ${genderClass} ${gridClass}`}>

            <div className="img-wrapper">
                <img src={props.user.picture.large}></img>
            </div>
            <div className="text-wrapper">
                <h4>{props.user.name.first} {props.user.name.last}</h4>
                <p>Email:{getEmail()}</p>
                <p>Birthday: {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}.</p>
            </div>





        </div>
    )
}

export default User