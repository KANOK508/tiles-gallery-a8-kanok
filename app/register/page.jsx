// "use client";
// import React from 'react';
// import { authClient } from "@/lib/auth-client";
// import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
// import Link from "next/link";
// import { toast } from "react-toastify";

// const RegisterPage = () => {

//   const handelRegistation = async (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const photourl = e.target.photourl.value;
//     const password = e.target.password.value;
    
//     // Using Better-Auth's secure async event object context listeners
//     await authClient.signUp.email({
//       name: name,
//       email: email,
//       password: password,
//       image: photourl, // Maps correctly to your user document profile image
//       callbackURL: '/my-profile' // Sends them straight to their dashboard upon success
//     }, {
//       onRequest: () => {
//         toast.info("Creating your account...");
//       },
//       onSuccess: () => {
//         toast.success("🎉 Registration successful! Welcome aboard.");
//       },
//       onError: (ctx) => {
//         // Displays exact message from your MongoDB engine (e.g., "Email already exists")
//         toast.error(ctx.error.message || "Registration failed. Please try again.");
//       }
//     });
//   };
  
//   return (
//     <div className="pt-10 pb-20 min-h-[80vh] flex flex-col items-center justify-center">
//       <Form 
//         onSubmit={handelRegistation}
//         className="flex w-full max-w-md flex-col gap-4 p-8 border border-base-content/20 mx-auto rounded-2xl bg-base-100 shadow-md"
//       >
//         <h2 className="text-2xl font-bold text-center mb-2">Create an Account</h2>

//         <TextField
//           isRequired
//           name="name"
//           type="text"
//         >
//           <Label className="text-sm font-medium text-white">Name</Label>
//           <Input placeholder="Enter your name" />
//           <FieldError className="text-xs text-error mt-1" />
//         </TextField>

//         <TextField
//           isRequired
//           name="email"
//           type="email"
//           validate={(value) => {
//             if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//               return "Please enter a valid email address";
//             }
//             return null;
//           }}
//         >
//           <Label className="text-sm font-medium text-white">Email</Label>
//           <Input placeholder="john@example.com" />
//           <FieldError className="text-xs text-error mt-1" />
//         </TextField>

//         <TextField
//           isRequired
//           name="photourl"
//           type="url" // Using type="url" leverages native HTML link verification
//         >
//           <Label className="text-sm font-medium text-white">Photo URL (Link)</Label>
//           <Input placeholder="https://example.com/photo.jpg" />
//           <FieldError className="text-xs text-error mt-1" />
//         </TextField>

//         <TextField
//           isRequired
//           minLength={8}
//           name="password"
//           type="password"
//           validate={(value) => {
//             if (value.length < 8) {
//               return "Password must be at least 8 characters";
//             }
//             return null;
//           }}
//         >
//           <Label className="text-sm font-medium text-white">Password</Label>
//           <Input placeholder="Enter your password" />
//           <Description className="text-xs text-base-content/50 mt-1">
//             Must be at least 8 characters long
//           </Description>
//           <FieldError className="text-xs text-error mt-1" />
//         </TextField>

//         <div className="flex gap-2 justify-center mt-2">
//           <Button type="submit" className="w-full btn btn-primary">
//             Register
//           </Button>
//         </div>

//         <div className="text-center pt-4 border-t border-base-content/10 mt-2">
//           <Link
//             href="/login"
//             className="text-sm font-medium link link-hover text-primary"
//           >
//             Already have an account? Login here
//           </Link>
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default RegisterPage;


"use client";
import { authClient } from "@/lib/auth-client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { toast } from "react-toastify";
// ➕ Imported the GitHub icon from react-icons
import { FaGithub } from "react-icons/fa";

const LoginPage = () => {
  
  // 1. Email and Password Login Execution Handler
  const handelLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: '/my-profile', 
      },
      {
        onRequest: () => {
          toast.info("Logging you in...");
        },
        onSuccess: () => {
          toast.success("Welcome back! Login successful.");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Login failed. Please check your credentials.");
        }
      }
    );
  };

  // 2. Google OAuth Login Execution Handler
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: '/my-profile' 
    }, {
      onRequest: () => {
        toast.info("Connecting to Google...");
      },
      onError: (ctx) => {
        toast.error(ctx.error.message || "Google Authentication failed.");
      }
    });
  };

  // 3. 🐙 GitHub OAuth Login Execution Handler
  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: '/my-profile'
    }, {
      onRequest: () => {
        toast.info("Connecting to GitHub...");
      },
      onError: (ctx) => {
        toast.error(ctx.error.message || "GitHub Authentication failed.");
      }
    });
  };

  return (
    <div className="pt-20">
      <div className="border p-8 w-fit py-5 rounded-2xl my-20 mx-auto bg-base-100 shadow-md">
        <Form
          onSubmit={handelLogin}
          className="flex w-90 flex-col gap-4"
          render={(props) => <form {...props} />}
        >
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="font-medium text-sm text-white">Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError className="text-xs text-error mt-1" />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              return null;
            }}
          >
            <Label className="font-medium text-sm text-white">Password</Label>
            <Input placeholder="Enter your password" />
            <Description className="text-xs text-base-content/50 mt-1">
              Must be at least 8 characters long
            </Description>
            <FieldError className="text-xs text-error mt-1" />
          </TextField>

          <div className="flex gap-2 justify-center mt-2">
            <Button type="submit" className="w-full btn btn-primary">
              Login
            </Button>
          </div>
        </Form>

        {/* 🔐 Social Authentication Section */}
        <div className="border-t border-base-content/10 mt-6 text-center pt-5 flex flex-col gap-3">
          
          {/* Google Button */}
          <Button 
            onClick={handleGoogleSignIn} 
            className="w-full btn btn-outline flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Login With Google
          </Button>

          {/* ➕ Added GitHub Button */}
          <Button 
            onClick={handleGithubSignIn} 
            className="w-full btn btn-outline flex items-center justify-center gap-2"
          >
            <FaGithub className="w-4 h-4 text-white" />
            Login With GitHub
          </Button>

        </div>

        <div className="text-center pt-5">
          <Link
            href="/register"
            className="text-sm font-medium link link-hover text-primary"
          >
            Dont have an account? Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;