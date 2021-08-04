import React from "react";

export default function ResumePage() {
  return (
    <div className="resume-container">
      <h1 className="title">Professional Experience</h1>
      <div id="current-job">
        <h2>Tata Consultancy Services</h2>
        <h4 className="title">Software Engineer Consultant</h4>
        <h5>July 2018 to Present</h5>
        <ul>
          <li>
            Collaborated with a UI team of four developers developing application features such as geolocation, user web traffic tracking, and partner onboarding using the geolocation api and internal reporting suite. This application serves 78 million customer accounts and accounts for roughly 10% of one of America's largest banking firm's income.
          </li>
          <li>
            Worked in a Angular environment, assisted in writing user stories in the Kanban software tools Jira, using scrum development practices to meet every requirement.
          </li>
          <li>
            Acted as scrum master for daily standups frequently and assisted in backlog grooming for upcoming enhancements, communicating heavily with business journey owners to understand and deliver on product requirements.
          </li>
          <li>
            Updated the bank's consumer Angular framework from Angular 5.4 to Angular 7 to ensure industry best practices and security standards.
          </li>
          <li>
            In coordination with adjacent teams, built test cases using unit testing tools (Karma and Jasmine), as well as working with analytics tools (Google Analytics) to enhance the UI/UX.
          </li>
          <li>
            Used AXE accessibility checker to update ADA compliance throughout application to provide the best user experience without excluding any potential demographics.
          </li>
          <li>
            Used the bank's internal content management system to maintain content for all 30+ retail partners.
          </li>
          <li>
            Maintained the legacy consumer servicing application and built a new features carousel module on a Jade, Coffeescript, SASS, and JSP tech stack to market new features developed for the application.
          </li>
          <li>
            Trained new hires on the various tech stack, including documenting procedures in Confluence to onboard members within a four week sprint.
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