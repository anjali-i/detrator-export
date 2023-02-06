import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>body</th>
          <th>userId</th>
        </tr>
      </thead>
      {users.length > 0 &&
        users.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>{item.userId}</td>
            </tr>
          );
        })}
    </table>
  );
}
