// import React from "react";
// import axios from "axios";

// export default class PersonList extends React.Component {
//   state = {
//     persons: [],
//   };

//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
//       const persons = res.data;
//       this.setState({ persons });
//     });
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.persons.map((person) => (
//           <li key={person.id}>{person.name}</li>
//         ))}
//       </ul>
//     );
//   }
// }

import React, { useState, useEffect } from "react";
import axios from "axios";

const PersonList = () => {
  // Define state using useState hook
  const [persons, setPersons] = useState([]);

  // useEffect hook to mimic componentDidMount
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setPersons(res.data); // Update state with fetched data
    });
  }, []); // Empty dependency array ensures this runs once after the component mounts

  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
};

export default PersonList;
