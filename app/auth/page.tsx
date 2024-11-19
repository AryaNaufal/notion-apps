"use client";

import Login from "@/components/login";
import Register from "@/components/register";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Auth() {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Login</TabsTrigger>
          <TabsTrigger value="password">Register</TabsTrigger>
        </TabsList>
        <Login />
        <Register />
      </Tabs>
    </section>
  );
}
