"use client";
import React from 'react';
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { toast } from "react-toastify";

const RegisterPage = () => {

  const handelRegistation = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photourl = e.target.photourl.value;
    const password = e.target.password.value;
    
    // Using Better-Auth's secure async event object context listeners
    await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photourl, // Maps correctly to your user document profile image
      callbackURL: '/my-profile' // Sends them straight to their dashboard upon success
    }, {
      onRequest: () => {
        toast.info("Creating your account...");
      },
      onSuccess: () => {
        toast.success("🎉 Registration successful! Welcome aboard.");
      },
      onError: (ctx) => {
        // Displays exact message from your MongoDB engine (e.g., "Email already exists")
        toast.error(ctx.error.message || "Registration failed. Please try again.");
      }
    });
  };
  
  return (
    <div className="pt-10 pb-20 min-h-[80vh] flex flex-col items-center justify-center">
      <Form 
        onSubmit={handelRegistation}
        className="flex w-full max-w-md flex-col gap-4 p-8 border border-base-content/20 mx-auto rounded-2xl bg-base-100 shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-2">Create an Account</h2>

        <TextField
          isRequired
          name="name"
          type="text"
        >
          <Label className="text-sm font-medium text-white">Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError className="text-xs text-error mt-1" />
        </TextField>

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
          <Label className="text-sm font-medium text-white">Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError className="text-xs text-error mt-1" />
        </TextField>

        <TextField
          isRequired
          name="photourl"
          type="url" // Using type="url" leverages native HTML link verification
        >
          <Label className="text-sm font-medium text-white">Photo URL (Link)</Label>
          <Input placeholder="https://example.com/photo.jpg" />
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
          <Label className="text-sm font-medium text-white">Password</Label>
          <Input placeholder="Enter your password" />
          <Description className="text-xs text-base-content/50 mt-1">
            Must be at least 8 characters long
          </Description>
          <FieldError className="text-xs text-error mt-1" />
        </TextField>

        <div className="flex gap-2 justify-center mt-2">
          <Button type="submit" className="w-full btn btn-primary">
            Register
          </Button>
        </div>

        <div className="text-center pt-4 border-t border-base-content/10 mt-2">
          <Link
            href="/login"
            className="text-sm font-medium link link-hover text-primary"
          >
            Already have an account? Login here
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;