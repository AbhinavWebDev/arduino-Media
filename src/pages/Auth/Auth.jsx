import { useForm } from "@mantine/form";
import { PasswordInput, TextInput, Button } from "@mantine/core";
import "./Auth.css";
import Logo from "../../img/Logo_ae.svg";

export function Auth() {
  const form = useForm({
    initialValues: {

      email: "",
      password: "",

    },

    // functions will be used to validate values at corresponding key
    validate: {
      
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 6 ? "Name must have at least 6 letters" : null,
    },
  });

  return (
    <div className="Signup">
      <div className="card">
        <div className="image">
          <img src={Logo} alt="" />
          <h3>arduino Media</h3>
          <p>Welcome Back</p>
        </div>

        <form onSubmit={form.onSubmit(console.log)}>
          
          <TextInput
            mt="sm"
            label="Email"
            placeholder="Email"
            {...form.getInputProps("email")}
          />
         

          <PasswordInput
            label="Password"
            placeholder="Password"
            {...form.getInputProps("password")}
          />

          
          <div className="dont">
            <a href="#">Don't have an account?</a>
            <a href="#">Forgot Password?</a>
          </div>

          <Button type="submit" mt="sm">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
