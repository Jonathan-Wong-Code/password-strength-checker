import React, { useState, useEffect } from "react";
import "./App.css";
import { Reasons, StrengthMeter, Input } from "./css";
import Password from "./Password";

// ** INITIAL BEFORE CLASS IMPLEMENTATION ** //

// function calculatePasswordStrength(password) {
//   const weaknesses = [];
//   weaknesses.push(lengthWeakness(password));
//   weaknesses.push(lowercaseWeakness(password));
//   weaknesses.push(uppercaseWeakness(password));
//   weaknesses.push(numberWeakness(password));
//   weaknesses.push(specialCharactersWeakness(password));
//   weaknesses.push(repeatCharactersWeakness(password));
//   return weaknesses;
// }

// function lengthWeakness(password) {
//   const length = password.length;

//   if (length <= 5) {
//     return {
//       message: "Your password is too short",
//       deduction: 40,
//     };
//   }

//   if (length <= 10) {
//     return {
//       message: "Your password could be longer",
//       deduction: 15,
//     };
//   }

//   return {
//     message: "",
//     deduction: 0,
//   };
// }

// function lowercaseWeakness(password) {
//   return characterTypeWeakness(password, /[a-z]/g, "lowercase");
// }

// function uppercaseWeakness(password) {
//   return characterTypeWeakness(password, /[A-Z]/g, "uppercase");
// }

// function numberWeakness(password) {
//   return characterTypeWeakness(password, /[0-9]/g, "numbers");
// }

// function specialCharactersWeakness(password) {
//   return characterTypeWeakness(
//     password,
//     /[^0-9a-zA-Z\s]/g,
//     "special characters"
//   );
// }

// function repeatCharactersWeakness(password) {
//   const matches = password.match(/(.)\1/g) || [];
//   if (matches.length > 0) {
//     return {
//       message: "Your password has repeat characters",
//       deduction: matches.length * 10,
//     };
//   }

//   return {
//     message: "",
//     deduction: 0,
//   };
// }

// function characterTypeWeakness(password, regex, type) {
//   const matches = password.match(regex) || [];

//   if (matches.length === 0) {
//     return {
//       message: `Your password has no ${type} characters`,
//       deduction: 20,
//     };
//   }

//   if (matches.length <= 2) {
//     return {
//       message: `Your message could use more ${type} characters`,
//       deduction: 5,
//     };
//   }

//   return {
//     message: "",
//     deduction: 0,
//   };
// }
function App() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [weakness, setWeakness] = useState([]);

  function updateStrengthMeter(value) {
    const password = new Password(value);
    const weaknesses = password.calculatePasswordStrength(value);
    let strength = 100;

    weaknesses.forEach((weakness) => {
      if (!weakness) return;
      strength -= weakness.deduction;
    });

    setWeakness(weaknesses);
    setStrength(strength);
  }

  return (
    <div className="App">
      <h1>Password strength</h1>
      <StrengthMeter
        className="strength-meter"
        strength={strength}
      ></StrengthMeter>
      <Input
        type="text"
        id="password"
        autoFocus
        aria-labelledby="password"
        id="password-input"
        value={password}
        onChange={(e) => {
          updateStrengthMeter(e.target.value);
          setPassword(e.target.value);
        }}
      />
      <Reasons id="reasons" class="reasons">
        {weakness && weakness.map((weakness) => <p>{weakness.message}</p>)}
      </Reasons>
    </div>
  );
}

export default App;
