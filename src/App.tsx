import React from "react";
import HeroImage from "./components/HeroImage";
import Card from "./components/Card";
import Label from "./components/Label";
import Text from "./components/Text";
import Img from "./components/Img";
import Button from "./components/Button";
import Table from "./components/Table";

import { workItems } from "./data/work";
import { skills } from "./data/skills";
import { resources } from "./data/resources";
import { developerSetup } from "./data/developerSetup";
import "./App.css";

function App() {
  return (
    <div className="app-container">

      {/* ================= HOME SECTION ================= */}
      <section className="hero-section" id="home">
        <HeroImage className="hero" src="./../images/hero.jpg" alt="Hero" title="" />

        <h1 className="name">Saviti Saviti</h1>
        <p className="description">
          Full Stack Web Developer | Winnipeg, MB
        </p>
        <p className="summary">
  I’m a Full Stack Web Development student with hands-on experience building dynamic, user-focused applications using HTML, CSS, JavaScript, React, PHP, and MySQL. Through academic and personal projects like a PHP-based CMS, a React API app, and my own portfolio, I’ve strengthened my skills in front-end design, database-driven back-end development, and clean, maintainable code. I’m passionate about creating meaningful digital experiences and continuously learning new tools and frameworks. Currently, I'm seeking opportunities to grow, collaborate, and contribute to real-world development projects.
</p>


        <Button
          className="button"
          label="View my work"
          onClick={() =>
            document
              .getElementById("work")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </section>

      {/* ================= WORK SECTION ================= */}
      <section className="hero-section" id="work">
        <Label className="label" text="Work" />

        {workItems.map((w) => (
  <div key={w.title}>
    <Card
      title={w.title}
      content={w.description}
      image={w.image}
      className="card workcard"
    />
    <Table className="table" headers={["Tech"]} data={w.tech.map((t) => [t])} />
  </div>
))}

      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section className="hero-section" id="skills">
        <Label text="Skills" />
        <Text value={skills.description} />

        <Card
          title="Languages / Frameworks"
          content=""
          className="card workcard"
        />
        <Table className="table" headers={["Name"]} data={skills.languagesFrameworks.map(lf => [lf])} />


        <Card
          title="Tools"
          content=""
        />
        <Table headers={["Tool"]} data={skills.tools.map(tool => [tool])} />
      </section>

      {/* ================= RESOURCES SECTION ================= */}
      <section className="hero-section" id="resources">
        <Label text="Resources" />

        {resources.map((r) => (
          <Card
            key={r.title}
            title={r.title}
            content={r.summary}
            image={r.image}
          />
        ))}

        {resources.map((r) => (
          <a
            key={`${r.title}-link`}
            href={r.link}
            target="_blank"
            rel="noreferrer"
          >
            Read
          </a>
        ))}
      </section>

      {/* ================= DEVELOPER SETUP ================= */}
      <section className="hero-section" id="developer-setup">
        <Label text="Developer Setup" />

        <Card
          title="VS Code Setup"
          content={developerSetup.vsCode.join("\n")}
        />

        <Card
          title="Terminal Setup"
          content={developerSetup.terminal.join("\n")}
        />

        <Card
          title="Preferred Editor Font"
          content={developerSetup.font}
        />

        <Card
          title="Supporting Resources"
          content=""
        />
        <Table
        headers={["Title", "Link"]}
        data={developerSetup.supportLinks.map(r => [r.title, r.link])}
        />

      </section>
    </div>
  );
}

export default App;
