import React from "react";
import { useState } from "react";
import { Context, UserContext, useContext } from '../../Context/index';
import { Link } from "react-router-dom";


export default function UserThankyou () {

  // SET STATES / CONTEXTS
  const { user } = useContext(UserContext)

  return (
  <>
  <div>
    Thank you {user.name} for your payment and for dining with us today. We'll see you soon!
  </div>

  </>
  )

}