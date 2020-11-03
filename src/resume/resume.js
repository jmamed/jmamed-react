import React from "react";

export default function ResumePage() {
  return (
    <div className="resume-container">
      <h1 className="title">Professional Experience WIP</h1>
      <div id="current-job">
        <h2>Citigroup or TCS</h2>
        <h4 className="title">Software Engineer Consultant</h4>
        <h5>July 2018 to Present</h5>
        <ul>
          <li>Primarily developed application features and enhancements for 
            30+ retail partners who are partnered with one of America's biggest banking firms, 
            generating 1.5 million daily users and accounting for 10% of the company's income.
          </li>
          <li>
            Working in a primarily Angular environment, assisted in writing user stories in Kanban software
            tools (primarily Jira), using scrum development practices to meet every requirement.
          </li>
        </ul>
      </div>
      <div id="past-jobs">
        <h2>Office of Research Commercialization @ Texas Tech University</h2>
        <h4 className="title">IP Analyst Intern</h4>
        <h5>July 2017 to February 2018</h5>
        <ul>
          <li>Reviewed patent applications and provided assessments to inventors and managers.</li>
          <li>Researched and produced Commercialization Plans of patents to licensing manager.</li>
        </ul>
      </div>
      <div id="past-jobs">
        <h2>OneConnxt</h2>
        <h4 className="title">Independent Network Consultant</h4>
        <h5>July 2014 to November 2016</h5>
        <ul>
          <li>Provided Front Line support with alert and email review, working remotely from Texas.</li>
          <li>Trained by engineers to troubleshoot OneConnxt product for on-site clients.</li>
          <li>Contacted on-call engineers and given escalation call sheet if needed.</li>
          <li>Interacted with the CTO and other technicians to adjust shift times to accommodate personal schedules.</li>
        </ul>

      </div>
      <div id="education">
        <h1 className="title">Education</h1>
        <div>
          <h2>Texas Tech University, Rawls College of Business</h2>
          <h5>2016 - 2018</h5>
          <h4 className="title">Master of Business Administration - STEM</h4>
        </div>
        <div>
          <h2>Texas Tech University, Whitacre College of Engineering</h2>
          <h5>2012 - 2016</h5>
          <h4 className="title">Bachelor of Science, Computer Engineering</h4>
        </div>

      </div>
      
    </div>
  );
}