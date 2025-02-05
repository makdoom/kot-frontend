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
import { postRequest } from "@/config/api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await postRequest("/auth/login", {
        username: form.username,
        userpassword: form.password,
        machinename: "127.0.0.1",
      });
      localStorage.setItem("accessToken", data.accessToken);
      navigate("/app");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/app");
    }
  });

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
              type="password"
              name="password"
              isPassword
              placeholder="Password"
              className="p-3 py-5 text-sm"
              value={form.password}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              className="w-full !mt-8 text-white py-6 rounded-lg transition"
            >
              Login
            </Button>
          </form>
        </CardContent>

        <CardFooter className="justify-center">
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account ?{" "}
            <Link to="/auth/register" className="text-primary font-semibold">
              Create One
            </Link>{" "}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Login;
