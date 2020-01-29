import React from "react";
import Layout from "../components/layout";
import IntroInfo from "../components/intro-info";
import Insert from "../components/insert";
import Meetings from "../components/meetings";
import LinksSection from '../components/link-section';
import NYContactInfo from '../components/ny-contact-info';
import LAContactInfo from '../components/la-contact-info';
import SEO from "../components/seo";
import "../css/styles.css";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroInfo />
    <Insert />
    <Meetings />
    <LinksSection />

    <h5 className="blue-background mt-5 mb-3 blue-title">Contact Info</h5>
    <div className="row" id="contact-row">
      <div className="col-12 col-sm-6">
        <NYContactInfo />
      </div>
      <div className="col-12 col-sm-6">
        <LAContactInfo />
      </div>
    </div>

  </Layout>
)

export default IndexPage;
