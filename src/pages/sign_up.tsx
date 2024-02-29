"use client"
import React from "react";
import * as z from "zod"
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { 
      Form, 
      FormControl,
      FormField ,
      FormItem,
      FormLabel,
      FormMessage
    } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {FaFacebook, FaGithub, FaGoogle} from "react-icons"
import { Link } from "next/link";

const signUpSchema = z.object({
  name: z.string().min(2, "Name should have atleast 2 characters").max(50," Name should not exceed 50 characters.").refine((value)=> /^[a-zA-Z+[-'s]?[a-zA-Z ]+$/.test(value), 'Name shourd contain only alphabets.'),
  email: z.string().email("Email must be valid"),
  password: z.string().min(8,"Password should have must 8 characters."),
  confirmPassword: z.string().min(8, "Password should be have 8 characters.")
}).refine((data)=>data.password===data.confirmPassword, {
  message: "Passwords does not match.",
  path: ["confirmPassword"],
});

const Page = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver:zodResolver(signUpSchema),
    defaultValues:{
      name: "",
      email:"",
      password:"",
      confirmPassword:"",
    },
  })


  function onSubmit(values:z.infer<typeof signUpSchema>){
    console.log(values);
    
  }  
  
  return (
    <>
      <div className="signUpWrapper">
      
      </div>
    </>
  )
  }

export default Page;