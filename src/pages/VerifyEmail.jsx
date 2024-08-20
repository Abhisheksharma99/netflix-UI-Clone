import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import styled from "styled-components";

// styled component
const EmailVerified = styled.div`
    
`

export default function VerifyEmail() {
    const navigate = useNavigate();

    useEffect(()=> {
        onAuthStateChanged(firebaseAuth, (user)=> {
          if (user?.emailVerified) {
            navigate('/');
          } else {
            navigate('/verifyemail');
          }
        })
      }, [navigate])
  
    return <EmailVerified>Verify Email needs to be created</EmailVerified>;
}
