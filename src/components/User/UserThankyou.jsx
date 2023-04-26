import React from "react";
import { useState, useEffect } from "react";
import { Context, UserContext, useContext } from '../../Context/index';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function UserThankyou() {

  // SET STATES / CONTEXTS
  const { user } = useContext(UserContext);

  useEffect(() => {
    // Add the home-background class to the body element (this is being used for background color on home page without affecting other pages)
    document.body.classList.add("admin-background");
    // Remove the home-background class when component unmounts
    return () => {
      document.body.classList.remove("admin-background");
    };
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="thanks-msg">
        Thank you {user.name} for your payment and for dining with us today. We'll see you again soon!
      </div>
      <button className='back-to-home' onClick={() => { navigate('/'); }}>
        Back to Home Page </button>
    </>
  );

}