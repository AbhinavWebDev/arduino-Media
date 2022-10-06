import { useForm } from "@mantine/form";
import { PasswordInput, TextInput, Button } from "@mantine/core";
import './Signup.css'
import Logo from '../../img/Logo_ae.svg'

export function Signup() {
  const form = useForm({
    initialValues: { name: "", email: "", mobile:'',password: '',
    confirmPassword: '' },

    // functions will be used to validate values at corresponding key
    validate: {
        // first_name: (value) =>
        // value.length < 2 ? "Name must have at least 2 letters" : null,
        
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      mobile: (value) => value.length < 6 ? "Invalid mobile number" : null,
      password: (value) =>
      value.length < 6 ? "Password must have at least 6 letters" : null,
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    
      
    },
    
  });
  

  return (
    <div className="Signup">
        <div className="card">

        <div className="image">
                          <img src={Logo} alt=''/>
                          <h3>arduino Media</h3>
                        
                      </div>
                      
        <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="First Name"
        placeholder="First Name"
        {...form.getInputProps("first_name")}
      />
      <TextInput
        label="Last Name"
        placeholder="Last Name"
        {...form.getInputProps("last_name")}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        {...form.getInputProps("email")}
      />
      <TextInput
        mt="sm"
        label="Mobile"
        placeholder="Mobile"
        {...form.getInputProps("mobile")}
      />
     
      <PasswordInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />

        <PasswordInput
          mt="sm"
          label="Confirm password"
          placeholder="Confirm password"
          {...form.getInputProps('confirmPassword')}
        />

<div className="dont">
            <a href="#">Already have an account?</a>
          </div>
        
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
    </div>
    </div>
    
  );
}
