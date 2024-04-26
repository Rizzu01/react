"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import "../../../public/css/style.css";
import "../../../public/css/responsive.css";
export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  const [isActive, setActive] = useState(false);

  const ToggleClass = () => {
    setActive(!isActive); // Toggle isActive state
  };

  // const [activeLink, setActiveLink] = useState("Company"); // Default active link

  // const handleSetActiveLink = (link) => {
  //   setActiveLink(link);
  // };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [activeLink, setActiveLink] = useState("Account");

  const handleSetActiveLink = (link: React.SetStateAction<string>) => {
    setActiveLink(link);
  };

  const renderTabContent = () => {
    switch (activeLink) {
      case "Account":
        return <form className="">
        <div className="grid grid-cols-2 gap-x-4 max-[643px]:grid-cols-1 ">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              First Name23
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name@flowbite.com"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="l-name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Last Name
            </label>
            <input
              type="text"
              id="l-name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="contact-n"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="contact-n"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="email-address"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email Address
            </label>
            <input
              type="email"
              id="email-address"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              City
            </label>
            <select
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option>Jaipur</option>
              <option>Delhi</option>
              <option>Indore</option>
              <option>Ranchi1</option>
            </select>
          </div>
          <div className="mb-8">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              State/County
            </label>
            <select
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option>Jaipur</option>
              <option>Delhi</option>
              <option>Indore</option>
              <option>Ranchi</option>
            </select>
          </div>
          <div className="mb-8">
            <label
              htmlFor="postal"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Postal Code
            </label>
            <input
              type="number"
              id="postal"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Country
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-6 py-4 text-center "
        >
          Update
        </button>
      </form>;
      case "Company":
        return  <form className="">
        <div className="grid grid-cols-2 gap-x-4 max-[643px]:grid-cols-1 ">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              First Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name@flowbite.com"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="l-name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Last Name
            </label>
            <input
              type="text"
              id="l-name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="contact-n"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="contact-n"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="email-address"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email Address
            </label>
            <input
              type="email"
              id="email-address"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              City
            </label>
            <select
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option>Jaipur</option>
              <option>Delhi</option>
              <option>Indore</option>
              <option>Ranchi</option>
            </select>
          </div>
          <div className="mb-8">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              State/County
            </label>
            <select
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option>Jaipur</option>
              <option>Delhi</option>
              <option>Indore</option>
              <option>Ranchi</option>
            </select>
          </div>
          <div className="mb-8">
            <label
              htmlFor="postal"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Postal Code
            </label>
            <input
              type="number"
              id="postal"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Country
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-6 py-4 text-center "
        >
          Update
        </button>
      </form>;
      case "Documents":
        return  <form className="">
        <div className="grid grid-cols-2 gap-x-4 max-[643px]:grid-cols-1 ">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              First Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name@flowbite.com"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="l-name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Last Name
            </label>
            <input
              type="text"
              id="l-name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="contact-n"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="contact-n"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="email-address"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email Address
            </label>
            <input
              type="email"
              id="email-address"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              City
            </label>
            <select
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option>Jaipur</option>
              <option>Delhi</option>
              <option>Indore</option>
              <option>Ranchi</option>
            </select>
          </div>
          <div className="mb-8">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              State/County
            </label>
            <select
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option>Jaipur</option>
              <option>Delhi</option>
              <option>Indore</option>
              <option>Ranchi</option>
            </select>
          </div>
          <div className="mb-8">
            <label
              htmlFor="postal"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Postal Code
            </label>
            <input
              type="number"
              id="postal"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Country
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-6 py-4 text-center "
        >
          Update
        </button>
      </form>;
      case "Billings":
        return  <form className="">
        <div className="grid grid-cols-2 gap-x-4 max-[643px]:grid-cols-1 ">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              First Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name@flowbite.com"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="l-name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Last Name
            </label>
            <input
              type="text"
              id="l-name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="contact-n"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="contact-n"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="email-address"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email Address
            </label>
            <input
              type="email"
              id="email-address"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              City
            </label>
            <select
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option>Jaipur</option>
              <option>Delhi</option>
              <option>Indore</option>
              <option>Ranchi</option>
            </select>
          </div>
          <div className="mb-8">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              State/County
            </label>
            <select
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option>Jaipur</option>
              <option>Delhi</option>
              <option>Indore</option>
              <option>Ranchi</option>
            </select>
          </div>
          <div className="mb-8">
            <label
              htmlFor="postal"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Postal Code
            </label>
            <input
              type="number"
              id="postal"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Country
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-6 py-4 text-center "
        >
          Update
        </button>
      </form>;
      case "Notifications":
        return  <form className="">
        <div className="grid grid-cols-2 gap-x-4 max-[643px]:grid-cols-1 ">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              First Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name@flowbite.com"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="l-name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Last Name
            </label>
            <input
              type="text"
              id="l-name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="contact-n"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="contact-n"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="email-address"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email Address
            </label>
            <input
              type="email"
              id="email-address"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              City
            </label>
            <select
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option>Jaipur</option>
              <option>Delhi</option>
              <option>Indore</option>
              <option>Ranchi</option>
            </select>
          </div>
          <div className="mb-8">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              State/County
            </label>
            <select
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option>Jaipur</option>
              <option>Delhi</option>
              <option>Indore</option>
              <option>Ranchi</option>
            </select>
          </div>
          <div className="mb-8">
            <label
              htmlFor="postal"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Postal Code
            </label>
            <input
              type="number"
              id="postal"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Country
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-6 py-4 text-center "
        >
          Update
        </button>
      </form>;
      default:
        return null;
    }
  };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    //     <h1>Profile</h1>
    //     <hr />
    //     <p>Profile page</p>
    //     <h2 className="p-1 rounded bg-green-500">{data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}
    //     </Link>}</h2>
    // <hr />
    // <button
    // onClick={logout}
    // className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    // >Logout</button>

    // <button
    // onClick={getUserDetails}
    // className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    // >GetUser Details</button>

    //     </div>
    <>
      <section id="admin" className="profile bg-white">
        <div className="side-bar md:relative">
          <div className="flex">
            <aside
              id="sidebar"
              // className='flex flex-col w-16 hover:w-64 ease-in-out transition-all h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l overflow-hidden '
              className={
                isActive
                  ? " flex flex-col w-12  hover:px-4 hover:w-64 ease-in-out transition-all h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l overflow-hidden lg:relative fixed inctive"
                  : "hover:px-4 flex flex-col w-16 hover:w-64 ease-in-out transition-all h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l overflow-hidden lg:relative md:fixed active"
              }
            >
              <div className="in-side w-64">
                <Link href="#">
                  <img
                    className="w-auto h-6 sm:h-7"
                    src="https://merakiui.com/images/logo.svg"
                    alt=""
                  />
                </Link>
                <div className="flex flex-col justify-between flex-1 mt-6 w-full">
                  <nav>
                    <Link
                      className="flex items-center px-4 py-2 text-gray-700  rounded-md  hover:bg-[#779341]   hover:text-white"
                      href="#"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="mx-4 font-medium">Dashboard</span>
                    </Link>
                    <Link
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-[#779341]   hover:text-white"
                      href="#"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="mx-4 font-medium">Accounts</span>
                    </Link>
                    <Link
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-[#779341]   hover:text-white"
                      href="#"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="mx-4 font-medium">Tickets</span>
                    </Link>
                    <Link
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-[#779341]   hover:text-white"
                      href="#"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="mx-4 font-medium">Settings</span>
                    </Link>
                    <Link
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-[#779341]   hover:text-white"
                      href="#"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="mx-4 font-medium">Tickets</span>
                    </Link>
                    <Link
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-[#779341]   hover:text-white"
                      href="#"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="mx-4 font-medium">Settings</span>
                    </Link>
                  </nav>
                </div>
              </div>
            </aside>
            <div className="main-content w-full">
              <header className="antialiased">
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
                  <div className="flex flex-wrap justify-between items-center">
                    <div className="flex justify-start items-center">
                      <button
                        id="toggleSidebar"
                        onClick={ToggleClass}
                        aria-controls="sidebar"
                        className="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100"
                      >
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 16 12"
                        >
                          {" "}
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h14M1 6h14M1 11h7"
                          />{" "}
                        </svg>
                      </button>
                      <button
                        id="toggleSidebar"
                        onClick={ToggleClass}
                        aria-expanded="true"
                        aria-controls="sidebar"
                        className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100  focus:ring-2 focus:ring-gray-100 "
                      >
                        <svg
                          className="w-[18px] h-[18px]"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 17 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                          />
                        </svg>
                        <span className="sr-only">Toggle sidebar</span>
                      </button>
                      <p className="flex mr-4 text-black">Profile</p>
                    </div>
                    <div className="flex items-center lg:order-2 relative">
                      {/* Notifications */}
                      <button
                        type="button"
                        data-dropdown-toggle="notification-dropdown"
                        className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100   focus:ring-4 focus:ring-gray-300 "
                      >
                        <span className="sr-only">View notifications</span>
                        {/* Bell icon */}
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 14 20"
                        >
                          <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
                        </svg>
                      </button>
                  
                     
                 
                      <button
                        type="button"
                        className="flex mx-3 text-sm items-center space-x-2 "
                        id="user-menu-button"
                        onClick={toggleDropdown}
                        
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown"
                      >
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="user photo"
                        />

                        <p className="text-black">Rizwan</p>
                      </button>
                      {isOpen && (
           <div
           className="z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow  absolute top-[110%] left-[-40%]"
           id="dropdown"
         >
           <div className="py-3 px-4">
             <span className="block text-sm font-semibold text-gray-900 ">
               Neil sims
             </span>
             <span className="block text-sm text-gray-500 truncate ">
               name@flowbite.com
             </span>
           </div>
           <ul
             className="py-1 text-gray-500 "
             aria-labelledby="dropdown"
           >
             <li>
               <Link
                 href="#"
                 className="block py-2 px-4 text-sm hover:bg-gray-100 "
               >
                 My profile
               </Link>
             </li>
             <li>
               <Link
                 href="#"
                 className="block py-2 px-4 text-sm hover:bg-gray-100 "
               >
                 Account settings
               </Link>
             </li>
           </ul>
           <ul
             className="py-1 text-gray-500 "
             aria-labelledby="dropdown"
           >
             <li>
               <Link
                 href="#"
                 className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 "
               >
                 <svg
                   className="mr-2 w-4 h-4 text-gray-400"
                   aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor"
                   viewBox="0 0 20 18"
                 >
                   <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                 </svg>
                 My likes
               </Link>
             </li>
             <li>
               <Link
                 href="#"
                 className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
               >
                 <svg
                   className="mr-2 w-4 h-4 text-gray-400"
                   aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor"
                   viewBox="0 0 20 20"
                 >
                   {" "}
                   <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />{" "}
                   <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />{" "}
                   <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />{" "}
                 </svg>
                 Collections
               </Link>
             </li>
             <li>
               <Link
                 href="#"
                 className="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
               >
                 <span className="flex items-center">
                   <svg
                     className="mr-2 w-4 h-4 text-primary-600 dark:text-primary-500"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                   >
                     <path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
                   </svg>
                   Pro version
                 </span>
                 <svg
                   className="w-2.5 h-2.5 text-gray-400"
                   aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 6 10"
                 >
                   <path
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="m1 9 4-4-4-4"
                   />
                 </svg>
               </Link>
             </li>
           </ul>
           <ul
             className="py-1 text-gray-500 dark:text-gray-400"
             aria-labelledby="dropdown"
           >
             <li>
               <Link
               onClick={logout}
                 href="#"
                 className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
               >
                 Sign out
               </Link>
             </li>
           </ul>
         </div>
      )}
                      {/* Dropdown menu */}
                   
                    </div>
                  </div>
                </nav>
              </header>

              <div
                className="cover h-96 bg-cover"
                style={{
                  backgroundImage: "url('../../../images/bg-cover.jpg')",
                }}
              ></div>

              <div className="profile-wrapper lg:px-6 md:pl-20 md:pr-8 sm:pl-20 pl-20 max-[767px]:pr-8  mt-[-120px] mb-10 max-[992px]:pr-8 max-[643px]:pl-20 max-[400px]:pl-16 max-[400px]:pr-4 ">
                <div className="flex md:space-x-0 lg:space-x-8  gap-y-8 md:flex-wrap lg:flex-nowrap sm:flex-wrap max-[992px]:flex-wrap">
                  <div
                    className="profile bg-white border rounded-lg h-auto md:w-[100%] sm:w-[100%] lg:w-1/4 max-[992px]:w-[100%]	"
                    style={{ height: "max-content" }}
                  >
                    <div className="av-image  pt-10">
                      <div className="con-img">
                        <div className="image-circle rounded-full lg:w-24 md:w-18 sm:w-16 overflow-hidden m-auto max-[643px]:w-24 ">
                          <img
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt=""
                          />
                        
                        </div>
                        <h3 className="user-n text-black mt-[10px] text-center font-semibold lg:text-[18px] md:text-[20px]">
                          Rizwan Khan
                        </h3>
                        <p className="c-name text-black mt-[5px] mb-4 text-center lg:text-[15px] md:text-[18px]">
                          Creative Arrow
                        </p>
                      </div>
                      <hr />

                      <div className="op-box">
                        <div className="box px-4 flex items-center h-[3rem]">
                          <div className="flex w-full justify-between">
                            <h4 className="  text-[15px] inner-text max-[1200px]:text-[12px]">
                              opportunities applied
                            </h4>
                            <h5 className="num font-semibold text-[#779341]">
                              32
                            </h5>
                          </div>
                        </div>
                        <hr />
                        <div className="box px-4 flex items-center h-[3rem]">
                          <div className="flex w-full justify-between">
                            <h4 className="  text-[15px] inner-text max-[1200px]:text-[12px]">Opportunities won</h4>
                            <h5 className="num font-semibold text-[#779341]">
                              6
                            </h5>
                          </div>
                        </div>
                        <hr />
                        <div className="box px-4 flex items-center h-[3rem]">
                          <div className="flex w-full justify-between">
                            <h4 className="  text-[15px] inner-text max-[1200px]:text-[12px]">Current opportunities</h4>
                            <h5 className="num font-semibold text-[#779341]">
                              26
                            </h5>
                          </div>
                        </div>
                        <hr />
                        <div className="box px-4 flex items-center h-[5rem]">
                          <button
                            type="button"
                            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 block m-auto"
                          >
                            View Public Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile-tab bg-white md:w-[100%] lg:w-[75%]  rounded-lg border overflow-hidden ">
                    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 px-6 overflow-x-auto overflow-y-hidden">
                      <div className="flex flex-wrap -mb-px max-[767px]:w-[42rem] max-[1150px]:w-[40rem]">
                      <button
          className={` me-2 inline-block px-4 py-4 border-b-2 rounded-t-lg hover:border-blue-600 hover:text-blue-600 max-[1300px]:px-2 ${
            activeLink === "Account" ? "text-blue-600 border-blue-600" : ""
          }`}
          onClick={() => handleSetActiveLink("Account")}
        >
          Account Settings
        </button>
        <button
          className={`me-2 inline-block px-4 py-4 border-b-2 rounded-t-lg hover:border-blue-600 hover:text-blue-600 max-[1300px]:px-2 ${
            activeLink === "Company" ? "text-blue-600 border-blue-600" : ""
          }`}
          onClick={() => handleSetActiveLink("Company")}
        >
          Company Settings
        </button>
        <button
          className={`me-2 inline-block px-4 py-4 border-b-2 rounded-t-lg hover:border-blue-600 hover:text-blue-600 max-[1300px]:px-2 ${
            activeLink === "Documents" ? "text-blue-600 border-blue-600" : ""
          }`}
          onClick={() => handleSetActiveLink("Documents")}
        >
          Documents
        </button>
        <button
          className={`me-2 inline-block px-4 py-4 border-b-2 rounded-t-lg hover:border-blue-600 hover:text-blue-600 max-[1300px]:px-2 ${
            activeLink === "Billings" ? "text-blue-600 border-blue-600" : ""
          }`}
          onClick={() => handleSetActiveLink("Billings")}
        >
          Billings
        </button>
        <button
          className={`me-2 inline-block px-4 py-4 border-b-2 rounded-t-lg hover:border-blue-600 hover:text-blue-600 max-[1300px]:px-2 ${
            activeLink === "Notifications" ? "text-blue-600 border-blue-600" : ""
          }`}
          onClick={() => handleSetActiveLink("Notifications")}
        >
          Notifications
        </button>
                      </div>
                    </div>
                    

                    
                    <div className="tab-content px-6 py-10">
                    {renderTabContent()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
