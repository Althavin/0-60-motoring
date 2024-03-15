import Button from "@/UI/Button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';
interface FormInputs {
  name: string;
  email: string;
  comment: string;
}
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    try {

      const templateParams = {
        from_name: data.name,
        to_name: 'YOUR_NAME',
        message: data.comment,
        reply_to: data.email
      };
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID || '', // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID || '', // Template ID
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY|| '' // public key
      );


      if (response.status === 200) {

        toast.success("Sent successfully");
        reset();
      } else {
      
        console.log(response)
        toast.error("Something wrong happened,try again later")
       
      }
    } catch (error) {
      toast.error("An error occurred");
      console.log(error)
    }
  };
  return (
    <form
      className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="block">
        <span className="mb-1">Full name</span>

        <input
          {...register("name", { required: true })}
          placeholder="Your Name"
          className="block w-full rounded-md shadow-sm px-4 py-2 focus:outline-none "
        />
        {errors.name && <p className="text-darkRed text-sm">Your name is required</p>}
      </label>
      <label className="block">
        <span className="mb-1">Email address</span>

        <input
          {...register("email", { required: true })}
          placeholder="Enter Your Email Address"
          className="block w-full rounded-md shadow-sm px-4 py-2 focus:outline-none"
        />
        {errors.email && <p className="text-darkRed text-sm">Email address is required</p>}
      </label>
      <label className="block">
        <span className="mb-1">Message</span>

        <textarea
          rows={5}
          className="block w-full rounded-md shadow-sm px-4 py-2 focus:outline-none "
          {...register("comment", { required: true })}
          placeholder="Your Message"

        />
        {errors.comment && <p className="text-darkRed text-sm">Message is required</p>}
      </label>
      <Button type="submit" text="SUBMIT" />
    </form>
  );
};

export default ContactForm;
