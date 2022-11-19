import "./styles.css";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, changeName, deleteUser } from "./redux/reducer/UserSlice";
export default function App() {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  console.log(user);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="user name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch(addUser({ id: user.length + 1, userName, name }))
        }
      >
        add a new user
      </button>
      <br />
      {user.map((u, i) => (
        <Fragment key={i}>
          <h2>{u.id}</h2>
          <h2>{u.userName}</h2>
          <h2>{u.name}</h2>
          <input type="text" onChange={(e) => setNewName(e.target.value)} />
          <button
            onClick={() => dispatch(changeName({ id: u.id, name: newName }))}
          >
            {" "}
            update a name{" "}
          </button>

          <button onClick={() => dispatch(deleteUser({ id: u.id }))}>
            {" "}
            delete{" "}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
