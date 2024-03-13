import Button from "@/UI/Button";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prevForm) => {
      const { name, value } = e.target;
      return {
        ...prevForm,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, tel, message } = form;
    if (!name || !email ||  !message) {
      toast.warn("please fill all the inputs");
      return;
    }
    try {
      const response = await fetch(
        "https://formsubmit.co/bcdd5a6a00ad2e1f22b9479fa43e50e5",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
          credentials: "include"
        }
      );
      if (response.ok) {
        toast.success("sent successfully");
        setForm({
          name: "",
          email: "",
          tel: "",
          message: "",
        });
      }
    } catch (error: any) {
      toast.error("something wrong happened, try again later");
      console.log(error);
    }
  };

  return (
    <form
      className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
      onSubmit={handleSubmit}
    >
      <label className="block">
        <span className="mb-1">Full name</span>
        <input
          type="text"
          placeholder="Your Name"
          className="block w-full rounded-md shadow-sm px-4 py-2 focus:outline-none "
          value={form.name}
          name="name"
          onChange={handleChange}
        />
      </label>
      <label className="block">
        <span className="mb-1">Email address</span>
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="block w-full rounded-md shadow-sm px-4 py-2 focus:outline-none"
          value={form.email}
          name="email"
          onChange={handleChange}
        />
      </label>
      <label className="block">
        <span className="mb-1">Message</span>
        <textarea
          rows={5}
          className="block w-full rounded-md shadow-sm px-4 py-2 focus:outline-none "
          value={form.message}
          name="message"
          onChange={handleChange}
        />
      </label>
      <Button type="submit" text="SUBMIT" />
    </form>
  );
};

export default ContactForm;
