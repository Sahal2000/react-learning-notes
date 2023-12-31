import React from "react";

const users = [
  {
    fullName: "Anisul Islam",
    age: 32,
    phone: [{ home: "23432423432" }, { office: "342352432" }],
  },
  {
    fullName: "Anisul Alam",
    age: 23,
    phone: [{ home: "23432423432" }, { office: "342352432" }],
  },
];

function NestedMapping() {
  return (
    <div>
      {users.map((user, index) => (
        <article key={index}>
          <h3>{user.fullName}</h3>
          <p>{user.age}</p>
          {user.phone.map((phone, index) => (
            <div>
              <p>Home: {phone.home}</p>
              <p>Office: {phone.office}</p>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
}

export default NestedMapping;
