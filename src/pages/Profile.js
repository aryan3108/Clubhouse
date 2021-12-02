import React from "react";
import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";
import { Link } from "react-router-dom";
import { BsAt, BsPlus, BsUpload } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineSetting,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Profile() {
  return (
    <>
      <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
          <div className={`${exploreStyle.head} text-right mb-0`}>
            <Link to="/home">
              <img
                src="/images/arrow.png"
                alt=""
                className={exploreStyle.arrow_icon}
              />
            </Link>
            <div className={style.actionBtn}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <img
          src="/images/user-img3.jpg"
          alt=""
          className={style.profile_image}
        />
        <h4>Aryan Srivastava</h4>
        <p>@noaaah</p>
        <div className={style.follow}>
          <p>
            <span>17</span> followers
          </p>
          <p>
            <span>44</span> following
          </p>
          <button>Add a bio...</button>
          <div className="mb-4">
            <button className="mb-0">
              <AiOutlineTwitter /> Add Twitter{" "}
            </button>
            <button className="mb-0">
              <AiOutlineInstagram /> Add Instagram{" "}
            </button>
          </div>
          <div className={style.nominated}>
            <img src="/images/user-img3.jpg" alt="" />
            <div>
              <p>Joined May 24, 2021</p>
              <p>
                Nominated by <span>Ruby Matthews</span>
              </p>
            </div>
          </div>
          <p>Member of</p>
          <button className={style.addMemberBtn}>
            <BsPlus />
          </button>
        </div>
      </div>
    </>
  );
}
