import "./Header.css"


const Header = (props) => {



    const searchUsers = (e) => {
        // console.log(e.target.value)
        props.data(e.target.value)
    }


    return (
        <div className="Header">
            <nav>
                <div className="logo-wrapper">
                    <h1>BIT People</h1>
                </div>

                <div className="right-side-wrapper">
                    <h3 className="refresh">REFRESH</h3>
                    <h3 className="grid-list">#</h3>
                </div>

            </nav>
            <input type="text" placeholder="Search Users" onChange={searchUsers} ></input>
        </div>
    )
}


export default Header