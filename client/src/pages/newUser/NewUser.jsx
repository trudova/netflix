import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./newUser.css"

export default function NewUser() {
    return (
      <>
      <Topbar/>
      <div className="container">
       <Sidebar className="side"/>
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form  className="newUserForm">
                <section className="newUserItem">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="" id="username" placeholder="username"/>
                </section>
                  <section className="newUserItem">
                    <label htmlFor="name">Full name</label>
                    <input type="text" name="" id="name" placeholder="Full Name"/>
                </section>

                  <section className="newUserItem">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" placeholder="email"/>
                </section>

                  <section className="newUserItem">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="password" placeholder="password"/>
                </section>

                  <section className="newUserItem">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="" id="phone" placeholder="phone"/>
                </section>

                  <section className="newUserItem">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="" id="address" placeholder="address"/>
                </section>

                   <section className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male"/>
                    <label for="male">Male</label>

                     <input type="radio" name="gender" id="female" value="female"/>
                    <label for="female">Female</label>

                     <input type="radio" name="gender" id="other" value="other"/>
                    <label for="other">Other</label>
                    </div>
                </section>

                  <section className="newUserItem">
                      <label>Active</label>
                      <select name="active" id="active" className="newUserSelect">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                      </select>
                  </section>
                  <button className="newUserButton">Create</button>
            </form>
        </div>
        </div>
        </>
    )
}
