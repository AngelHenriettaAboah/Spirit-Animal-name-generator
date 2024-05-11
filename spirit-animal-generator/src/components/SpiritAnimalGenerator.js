import React, { useState } from "react";
import "./SpiritAnimalGenerator.css";

// Define animalNames outside of the component
const animalNames = {
  lion: ["Simba", "Nala", "Mufasa", "Scar", "Sarabi"],
  bear: ["Baloo", "Yogi", "Paddington", "Winnie", "Teddy"],
  wolf: ["Alpha", "Luna", "Shadow", "Ghost", "Bolt"],
  eagle: ["Apollo", "Athena", "Zeus", "Artemis", "Hera"],
  dolphin: ["Flipper", "Dolly", "Echo", "Sunny", "Nalu"],
  elephant: ["Dumbo", "Ellie", "Babar", "Tantor", "Jumbo"],
  tiger: ["Shere Khan", "Rajah", "Tony", "Kitty", "Tigger"],
  giraffe: ["Gerald", "Gina", "George", "Grace", "Gabby"],
  dog: ["Buddy", "Max", "Bailey", "Charlie", "Lucy"],
  cat: ["Whiskers", "Mittens", "Tiger", "Shadow", "Kitty"],
  pig: ["Wilbur", "Porky", "Babe", "Piglet", "Hamlet"],
  rabbit: ["Bugs", "Thumper", "Flopsy", "Mopsy", "Peter"],
};

const SpiritAnimalGenerator = () => {
  const [gender, setGender] = useState("male");
  const [animalType, setAnimalType] = useState("lion");
  const [generatedName, setGeneratedName] = useState("");

  // Function to generate a random name
  const generateName = () => {
    let names;
    if (gender === "male") {
      names = animalNames[animalType];
    } else {
      // If gender is female, select from the first five names of the animal type
      names = animalNames[animalType].slice(0, 5);
    }
    return names[Math.floor(Math.random() * names.length)];
  };

  // Function to handle name generation
  const handleGenerateName = () => {
    const generatedName = generateName();
    setGeneratedName(generatedName);
  };

  const handleReset = () => {
    setGeneratedName("");
  };

  return (
    <div className="spirit-animal-generator">
      <h2>Generate Your Spirit Animal Name</h2>
      <div className="form-group">
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      <div className="form-group">
        <label>
          Animal Type:
          <select
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
          >
            {Object.keys(animalNames).map((animal) => (
              <option key={animal} value={animal}>
                {animal.charAt(0).toUpperCase() + animal.slice(1)}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={handleGenerateName}>Generate Name</button>
      {generatedName && <p>Your spirit animal name: {generatedName}</p>}
      <div className="button-group">
        <button onClick={handleReset}>Reset</button>
        <button onClick={() => (window.location.href = "/")}>
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default SpiritAnimalGenerator;
