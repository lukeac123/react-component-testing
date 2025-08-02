import { type HTMLAttributes, useState } from "react";

interface FormState {
  name: string;
  number: string;
  gender: string;
}

export default function App() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    number: "",
    gender: "",
  });

  const handleChange = (event) => {
    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  console.log(formState.gender);

  return (
    <form style={{ padding: "1rem" }} action={"www.myurl.com"}>
      <label>What Is your Name?</label>
      <input
        id={"name"}
        name={"name"}
        value={formState.name}
        autoComplete="name"
        onChange={handleChange}
      />

      <label>What greeting do you want to say?</label>
      <input
        id={"nameInput"}
        name={"inputName"}
        value={formState.number}
        autoComplete="tel-national"
        onChange={handleChange}
      />

      <fieldset>
        <h2>Choose an Option:</h2>
        <label>
          <input
            type="radio"
            value="male"
            name="gender"
            checked={formState.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            name="gender"
            checked={formState.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            value="other"
            name="gender"
            checked={formState.gender === "other"}
            onChange={handleChange}
          />
          Other
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}
