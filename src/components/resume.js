import React from "react";
import { Card, CardGroup} from "react-bootstrap";
// import TTULogo from "../assets/ttu-logo.svg";
import TTUBusinessLogo from "../assets/ttu-bus-logo.png";
import TTUEngineerLogo from "../assets/ttu-eng-logo.png";


export default function ResumePage() {
  return (
    <div className="resume-container layout">
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
        {/* <CardGroup>
          <Card style={{ width: '100%'}}>
            <Card.Body>
              <Card.Title>Office of Research Commercialization</Card.Title>
              <Card.Subtitle>IP Analyst Intern @ Texas Tech University</Card.Subtitle>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Reviewed patent applications and provided assessments to inventors and managers.</ListGroupItem>
                <ListGroupItem>Researched and produced Commercialization Plans of patents to licensing manager.</ListGroupItem>
              </ListGroup>
              
            </Card.Body>
            <Card.Footer><Card.Subtitle>July 2017 to February 2018</Card.Subtitle></Card.Footer>
          </Card>
          <Card style={{ width: '100%'}}>
            <Card.Body>
              <Card.Title>OneConnxt</Card.Title>
              <Card.Subtitle>Independent Network Consultant</Card.Subtitle>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Provided Front Line support with alert and email review, working remotely from Texas.</ListGroupItem>
                <ListGroupItem>Trained by engineers to troubleshoot OneConnxt product for on-site clients.</ListGroupItem>
                <ListGroupItem>Contacted on-call engineers and given escalation call sheet if needed.</ListGroupItem>
                <ListGroupItem>Interacted with the CTO and other technicians to adjust shift times to accommodate personal schedules.</ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Card.Subtitle>July 2014 to November 2016</Card.Subtitle>
            </Card.Footer>
          </Card>
        </CardGroup> */}

      </div>
      <div id="education">
        <h1 className="title">Education</h1>
        <CardGroup>
          <Card style={{ width: '100%', padding: '10px'}}>
            <Card.Img variant="top" src={TTUBusinessLogo} />
            <Card.Body>
              <Card.Title>Texas Tech University</Card.Title>
              <Card.Subtitle>Master of Business Administration - STEM</Card.Subtitle>
              <Card.Text>Attended: 2016 to 2018</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '100%', padding: '10px'}}>
            <Card.Img variant="top" src={TTUEngineerLogo} />
            <Card.Body>
              <Card.Title>Texas Tech University</Card.Title>
              <Card.Subtitle>Bachelor of Science, Computer Engineering</Card.Subtitle>
              <Card.Text>Attended: 2012 to 2016</Card.Text>
              <Card.Footer>
                <Card.Link href="https://www.depts.ttu.edu/coe/departments/Newsletters/ECE/Fall2017students.php" target="_blank">IEEE Region 5 West region paper contest</Card.Link>
              </Card.Footer>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      
    </div>
  );
}