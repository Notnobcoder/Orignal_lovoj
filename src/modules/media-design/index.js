import React from "react";
import "./scss/index.scss";
import { Header, Footer } from "../../layout";
import aliazeera from "../../assests/news/aliazeera.png";
import busniessworld from "../../assests/news/busniessworld.png";
import digitalfirstmag from "../../assests/news/digitalfirstmag.jpg";
import fibrefashion from "../../assests/news/fibrefashion.png";
import freepress from "../../assests/news/freepress.png";
import hansindia from "../../assests/news/hansindia.png";
import herzindagi from "../../assests/news/herzindagi.png";
import hindutantimes from "../../assests/news/hindutantimes.jpg";
import indianretalior from "../../assests/news/indianretalior.png";
import itvoice from "../../assests/news/itvoice.png";
import lanslife from "../../assests/news/lanslife.png";
import midDay from "../../assests/news/mid-day.png";
import newkerala from "../../assests/news/newkerala.png";
import smeworld from "../../assests/news/smeworld.jpg";
import tangnews from "../../assests/news/tangnews.png";
import thepointer from "../../assests/news/thepointer.png";
import thestatment from "../../assests/news/thestatment.png";
import yourstory from "../../assests/news/yourstory.png";
import zeebusniess from "../../assests/news/zeebusniess.png";
const initialimg = [
  {
    id: 1,
    img: aliazeera,
    link: "https://aljazeera.co.in/business/customization-is-the-new-trend-bibhuti-bhushan-dash-co-founder-LOVOJ/",
    name: "Al Jazeera",
  },
  {
    id: 2,
    img: busniessworld,
    link: "http://bwdisrupt.businessworld.in/article/Is-Digital-The-Future-Of-Fashion-/16-11-2021-412061/",
    name: "BW Busniess World",
  },
  {
    id: 3,
    img: digitalfirstmag,
    link: "https://www.digitalfirstmagazine.com/how-startups-are-redefining-indias-bespoke-clothing-segment/",
    name: "DigitalFirstMagazine",
  },
  {
    id: 4,
    img: fibrefashion,
    link: "https://www.fibre2fashion.com/industry-article/9282/is-custom-fit-the-future-of-fashion",
    name: "FF Fabre2Fashion",
  },
  {
    id: 5,
    img: freepress,
    link: "https://www.freepressjournal.in/lifestyle/from-vr-to-metaverse-how-technology-is-changing-the-face-of-indias-fashion-industry",
    name: "Free Press Journal",
  },
  {
    id: 6,
    img: hansindia,
    link: "https://www.thehansindia.com/featured/womenia/custom-fit-is-the-new-trend-730134",
    name: "The Hans India",
  },
  {
    id: 7,
    img: herzindagi,
    link: "https://www.herzindagi.com/fashion/how-digital-is-becoming-the-future-of-fashion-article-191010",
    name: "Her Zindagi",
  },
  {
    id: 8,
    img: hindutantimes,
    link: "https://www.hindustantimes.com/lifestyle/fashion/workwear-fashion-tips-trendy-womenswear-and-menswear-corporate-styling-for-summers-101651804569127.html",
    name: "The Hindustan Times",
  },
  {
    id: 9,
    img: indianretalior,
    link: "https://www.indianretailer.com/news/LOVOJ-releases-bespoke-software-with-3d-visualization.n11924/",
    name: "Indian Retalior",
  },
  {
    id: 10,
    img: itvoice,
    link: "https://www.itvoice.in/is-fashions-future-going-to-be-digital",
    name: "IT Voice",
  },
  {
    id: 11,
    img: lanslife,
    link: "https://ianslife.in/fashion/custom-fit-future-fashion",
    name: "IANS Life",
  },
  {
    id: 12,
    img: midDay,
    link: "https://www.mid-day.com/lifestyle/fashion/article/custom-fit-is-the-future-of-fashion-23215301#:~:text=Based%20on%20current%20trends%2C%20the,doubt%2C%20the%20future%20of%20fashion",
    name: "Mid-Day",
  },
  {
    id: 13,
    img: newkerala,
    link: "https://www.newkerala.com/news/2022/27464.htm",
    name: "New Kerala",
  },
  {
    id: 14,
    img: smeworld,
    link: "https://www.smeworld.asia/sme-digital-magazine.aspx#.YsU9vtJByFA",
    name: "SM World",
  },
  {
    id: 15,

    img: tangnews,
    link: "https://www.tangmagazine.com/post/custom-fit-is-the-future-of-fashion-with-LOVOJ",
    name: "Tang News",
  },
  {
    id: 16,
    img: thepointer,
    link: "https://www.dailypioneer.com/2021/sunday-edition/digital-transformation.html",
    name: "The Poineer",
  },
  {
    id: 17,
    img: thestatment,
    link: "https://www.thestatesman.com/business/startups-restructuring-bespoke-clothing-sector-india-1503047004.html",
    name: "The Statment",
  },
  {
    id: 18,
    img: yourstory,
    link: "https://yourstory.com/weekender/unique-wardrobe-custom-fits-future-fashion/amp",
    name: "Your Story",
  },
  {
    id: 19,
    img: zeebusniess,
    link: "https://www.zeebiz.com/market-news/news-budget-2022-expectations-startup-tech-industry-s-wishlist-and-suggestions-177062",
    name: "ZEE Busniess",
  },
];
export const MediaDesign = () => {
  return (
    <div>
      <Header />
      {/* content */}
      <div className="media-design-section">
        <div className="nested-media">
          <div className="media-heading">
            <h1>Media Outreach</h1>
          </div>
          <div className="news">
            {initialimg.map((value) => {
              return (
                <div
                  className="actual_news flex flex-col justify-center items-center"
                  key={value.id}
                >
                  <img src={value.img} alt="aliazeera" />
                  <a href={value.link} target="_blank" className="py-3 text-blue-500">
                    {value.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
