import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { UtensilsCrossed } from "lucide-react";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", form);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm p-6 shadow-lg bg-white rounded-xl">
        <CardHeader className="text-center mb-4 flex items-center space-x-2 justify-center flex-row">
          <UtensilsCrossed className="h-8 w-8" />
          <CardTitle className="text-3xl font-bold text-gray-800 font-inter">
            KOT
          </CardTitle>
          {/* <CardDescription>Welcome Back</CardDescription> */}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="username"
              autoFocus
              placeholder="Username"
              className="p-3 py-5 text-sm"
              value={form.username}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              className="p-3 py-5 text-sm"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="password"
              isPassword
              placeholder="Password"
              className="p-3 py-5 text-sm"
              value={form.password}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="confirmPassword"
              isPassword
              placeholder="Confirm Password"
              className="p-3 py-5 text-sm"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              className="w-full !mt-8 text-white py-6 rounded-lg transition"
            >
              Register
            </Button>
          </form>
        </CardContent>

        <CardFooter className="justify-center">
          <p className="text-center text-sm text-muted-foreground">
            Already have an account ?{" "}
            <Link to="/auth/login" className="text-primary font-semibold">
              Login
            </Link>{" "}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Register;
