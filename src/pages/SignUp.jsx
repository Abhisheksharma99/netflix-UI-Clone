import React, { useEffect, useState } from "react";
import Background from "../components/Background";
import Header from "../components/Header";
import styled from "styled-components";
import { BsArrowBarRight } from "react-icons/bs";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          margin-left: 0.25rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          margin-left: 0.25rem;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
          .arrow {
            padding-top: 0.25rem;
          }
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSignUp = async () => {
    try {
      const { email, password } = formValue;
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((UserCredential) => {
          sendEmailVerification(UserCredential.user);
          firebaseAuth.signOut();
          alert("Email Verification Sent");
        })
        .catch(alert);
    } catch (err) {
      console.log(err);
    }
  };

      useEffect(() => {
        const unsubscribe =  onAuthStateChanged(firebaseAuth, (currentUser) => {
          (currentUser && currentUser.emailVerified) &&  navigate("/");
        });
        return () => unsubscribe;
      }, [navigate]);
   
  return (
    <Container>
      <Background />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere, Cancel anytime</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              value={formValue.email}
              onChange={(e) =>
                setFormValue({ ...formValue, [e.target.name]: e.target.value })
              }
              placeholder="Email Address"
              name="email"
            />
            {showPassword ? (
              <input
                type="password"
                value={formValue.password}
                onChange={(e) =>
                  setFormValue({
                    ...formValue,
                    [e.target.name]: e.target.value,
                  })
                }
                placeholder="Password"
                name="password"
              />
            ) : (
              <button
                onClick={() => {
                  setShowPassword(true);
                }}
              >
                Get Started <BsArrowBarRight className="arrow"/>
              </button>
            )}
          </div>
          {showPassword && <button onClick={handleSignUp}>Sign Up</button>}
        </div>
      </div>
    </Container>
  );
}
