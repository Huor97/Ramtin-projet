import React, { useEffect, useState } from "react";
import "./News.css"; // Assurez-vous de créer un fichier de style séparé
import Tuna from "../images/products/Tuna.jpg";

const Post = ({ day, month, image, title, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <figure
      className={`snip1529 ${isHovered ? "hover" : ""} `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt="post" />
      <div className="date">
        <span className="day">{day}</span>
        <span className="month">{month}</span>
      </div>
      <figcaption>
        <h3>{title}</h3>
        <p>{content}</p>
      </figcaption>
      <div className="hover">
        <i className="ion-android-open"></i>
      </div>
      <a href="#"></a>
    </figure>
  );
};

export default function News() {
  const [visibled, setVisibled] = useState(false);

  useEffect(() => {
    const vesibledScroll = () => {
      window.scrollY > 10531 ? setVisibled(true) : setVisibled(false);
    };

    window.addEventListener("scroll", vesibledScroll);

    return () => {
      window.removeEventListener("scroll", vesibledScroll);
    };
  }, []);
  const newss = [
    {
      day: "28",
      month: "Apr",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample21.jpg",
      title: "Lorem Ipsum",
      content:
        "Which is worse, that everyone has his price, or that the price is always so low."
    },
    {
      day: "28",
      month: "Apr",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample21.jpg",
      title: "Lorem Ipsum",
      content:
        "Which is worse, that everyone has his price, or that the price is always so low."
    },
    {
      day: "28",
      month: "Apr",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample21.jpg",
      title: "Lorem Ipsum",
      content:
        "Which is worse, that everyone has his price, or that the price is always so low."
    }
  ];

  return (
    <div className={`container-news ${visibled ? "fixed-news" : ""}`}>
      {/* {newss.map((news, index) => (
        <Post
          key={index}
          day={news.day}
          month={news.month}
          image={news.image}
          title={news.title}
          content={news.content}
        />
      ))} */}
      <Post
        day="28"
        month="Apr"
        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample23.jpg"
        title="Lorem Ipsum"
        content="Which is worse, that everyone has his price, or that the price is always so low."
      />
      <Post
        day="17"
        month="May"
        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample23.jpg"
        title="Lorem Ipsum"
        content="I'm killing time while I wait for life to shower me with meaning and happiness."
      />
      <Post
        day="08"
        month="June"
        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample23.jpg"
        title="Lorem Ipsum"
        content="The only skills I have the patience to learn are those that have no real application in life."
      />
    </div>
  );
}
