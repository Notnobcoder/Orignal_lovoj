import React from "react";
import "./scss/index.scss";
import { NavLink } from "react-router-dom";
// import { InputField, Button } from "../../components";
import mainlogo from "../../assests/images/mainlogo.svg";
import Facebook from "../../assests/images/mini-facebook.svg";
import Instagram from "../../assests/images/Instagram.svg";
import Youtube from "../../assests/images/YouTube.svg";
import LinkedIn from "../../assests/images/LinkedIn.svg";
import Twitter from "../../assests/images/Twitter.svg";
import indianFlag from "../../assests/images/indianflag.svg";
import singaproeflag from "../../assests/images/singapore.png";
import playstore from "../../assests/images/playStore.png";
import appleImage from "../../assests/images/appleStore.png";
import logo from "../../assests/images/Logo.png";

const initialState = [
  { id: 1, workType: "Tailor & Designer", link: "/account-registration" },
  { id: 2, workType: "Fabric", link: "/account-registration" },
  { id: 3, workType: "Sticting Factory", link: "/account-registration" },
  { id: 4, workType: "Accessories", link: "/account-registration" },
];

const pageLinks = [
  {
    id: 1,
    pageName: "About Us",
    links: "/about-us",
  },
  {
    id: 2,
    pageName: "Product",
    links: "/",
  },
  {
    id: 3,
    pageName: "Media & Press",
    links: "/",
  },
  {
    id: 4,
    pageName: "Our Team",
    links: "/our-team",
  },
  {
    id: 5,
    pageName: "Contact Us",
    links: "/contact-us",
  },
  {
    id: 6,
    pageName: "Jobs",
    links: "/jobs",
  },
  {
    id: 7,
    pageName: "Help Center",
    links: "/help-center",
  },
];

export const Footer = () => {
  return (
    <div className="footer my-6">
      <div className="nested-footer">
        <div className="footerside-1">
          <NavLink to="/">
            <img src={logo} alt="main logo" className="flex" />
          </NavLink>
          <p className="address-footer flex gap-2">
            <span>
              <img
                src={indianFlag}
                alt="indianflag"
                width={"35px"}
                height="35px"
              />
            </span>
            12 Todermal Road, New Delhi - 110001, India{" "}
          </p>
          <p>Follow us and keep updated!</p>
          <div className="social-links my-2 flex justify-start gap-3 items-center">
            <a
              href={"https://www.facebook.com/lovoj.marketplace"}
              target="_blank"
            >
              <img src={Facebook} alt="facebook" loading="lazy" />
            </a>
            <img src={Twitter} alt="facebook" loading="lazy" />
            <img src={Instagram} alt="facebook" loading="lazy" />
            <a href="https://www.linkedin.com/company/lovoj">
              <img src={LinkedIn} alt="facebook" loading="lazy" />
            </a>
            <a href="#">
              <img src={Youtube} alt="facebook" loading="lazy" />
            </a>
          </div>
        </div>
        <div className="footerside-2 mt-2">
          <h5>Be Our Partner</h5>
          <ul>
            {initialState.map((value) => {
              return (
                <NavLink to={`${value.link}/${value.workType}`} key={value.id}>
                  <li>{value.workType}</li>
                </NavLink>
              );
            })}
          </ul>
        </div>
        <div className="footerside-3 mt-2">
          <h5>Quick Links</h5>
          <ul>
            {pageLinks.map((value) => {
              return (
                <li key={value.id}>
                  <NavLink to={value.links}>{value.pageName}</NavLink>
                </li>
              );
            })}
            <li>
              <a href="./Website TERMS OF USE & PRIVACY POLICY.docx">
                Terms of use
              </a>
            </li>
          </ul>
        </div>
        <div className="footerside-4 mt-2">
          <h5>Download Our App</h5>
          <a
            //href="https://play.google.com/store/apps/details?id=com.LOVOJ.marketplace"
            target={"_blank"}
          >
            <img src={playstore} alt="playstore" className="mt-7 w-44" />
          </a>
          <img src={appleImage} alt="appstore" className="mt-2 w-44" />
        </div>
      </div>
    </div>
  );
};
