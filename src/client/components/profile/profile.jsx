import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Media,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Experience from "./profile-experiences";
import "./profile.module.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Frank",
      title: "Student",
      location: "Atlanta, GA",
      about:
        "hello, my name is frank.hello, my name is frank.hello, my name is frank.hello, my name is frank.hello, my name is frank.hello, my name is frank.hello, my name is frank.hello, my name is frank.hello, my name is frank.hello, my name is frank.",
      skills: ["java", "python", "git", "react", "javascript"],
      courses: [
        {
          tags: ["Product Management", "Product Manager"],
          degree: false,
          _id: "5e8935b96eb291b24ab293ce",
          affiliates: [],
          duration: "1 week",
          learning:
            "This course is your first step towards a successful career in Product Management. Be equipped to lead the product strategy of industry-defining products, and learn to successfully bring them to market.",
          key: "ud034",
          image:
            "https://d20vrrgs8k4bvw.cloudfront.net/images/course-catalog/en-us/ud034-catalog-image.jpg",
          level: "beginner",
          isFreeCourse: true,
          lessons: [
            {
              points: [
                "Understand what skills, abilities, and experience impress Hiring Managers and help you stand out",
                "Learn how to prepare for a Product Manager interview, including what assets to prioritize and how responses should be structured",
                "Get advice from practicing Product Managers on how to get into Product Management",
              ],
              title:
                "What You Need to Know Before the Product Manager Interview",
            },
            {
              points: [
                "Learn how to answer case questions that touch upon feature enhancements to improve product performance, metrics to measure success, and how to increase product subscriptions",
                "Learn how to justify your product decisions with a strategic framework that is structured and defensible",
                "Evaluate the strengths and weaknesses in the mock strategy interview, and apply your learnings to a set of practice questions",
              ],
              title: "Mock Interview: Product Strategy Questions",
            },
            {
              points: [
                "Learn how to answer questions around prioritizing resources in a product roadmap, and convincing cross-functional teams to execute on your vision",
                "Learn how to answer technical questions like explaining the back-end of a Google search",
                "Evaluate the strengths and weaknesses in the mock technical interview, and apply your learnings to a set of practice questions",
              ],
              title: "Mock Interview: Technical Product Questions",
            },
            {
              points: [
                "Understand how Product Managers structure their day, and which skills are applied how on the job",
                "Explain the typical decisions Product Managers have to make, and the unique challenges and opportunities that are encapsulated in this role",
                "Experience a day in the life of Product Managers in the Growth and AI specializations",
              ],
              title: "Day in the Life of a Product Manager",
            },
          ],
          prerequisite:
            "<p>This course is ideal for anyone looking to upgrade their PM interviewing skills or break into the Product Management field, and learn best practices for Product Management interviews. There are no technical prerequisites for this course.</p>",
          shortSummary:
            "Ace your product management interview by understanding how to answer key strategic, technical, and practical product questions.",
          url:
            "https://www.udacity.com/course/product-manager-interview-preparation--ud034",
          subtitle:
            "Prove your qualifications in your Product Manager interviews, and watch experienced Product Managers go through mock strategy and technical interviews, as well as share insights about the PM interview process.",
          summary:
            "In this course, you'll learn exactly what to expect during a product management interview, and view exclusive interviews with practicing core, data, growth, and AI Product Managers. You'll cover how to prepare for a Product Management interview, and understand what skills, abilities, and experience impress hiring managers and help you stand out. You'll watch actual Product Managers run mock strategy and technical interviews, and learn directly from their experience and answers. Finally, you'll get to see what a day in the life looks like for product managers in different specializations. Throughout the course, you will receive additional practice questions to prepare you to ace your next PM interview. Complete this course and be equipped to land your dream role in product management!",
          title: "Product Manager Interview Preparation",
          platform: "udacity",
          __v: 0,
        },
        {
          tags: [],
          degree: false,
          _id: "5e8935b96eb291b24ab293d7",
          affiliates: [],
          duration: "1 months",
          learning:
            "This course will teach you how to think like a software tester, how to find bugs in code earlier, and write better code.",
          key: "cs258",
          image:
            "https://d20vrrgs8k4bvw.cloudfront.net/images/courses/thumbnails/cs258_thumbnail.jpg",
          level: "intermediate",
          isFreeCourse: true,
          lessons: [
            {
              points: [
                "How to think about the different elements of software testing.",
              ],
              title: "Domains, Ranges, Oracles, and Kinds of Testing",
            },
            {
              points: [
                "How to find parts of a program that need more testing.",
              ],
              title: "Code Coverage",
            },
            {
              points: [
                "How to automatically generate test cases that break code in unexpected ways.",
              ],
              title: "Random Testing",
            },
            {
              points: [
                "How to engineer a sophisticated random test case generator.",
              ],
              title: "Advanced Random Testing",
            },
            {
              points: [
                "How to deal with lots of bugs, how to take a big input that triggers a bug and make it smaller, how to report a bug, and more!",
              ],
              title: "Consequences",
            },
            {
              points: [],
              title: "Conclusion",
            },
          ],
          prerequisite: "<p>Programming experience is required.</p>",
          shortSummary:
            "Learn how to catch bugs and break software as you discover different testing methods that will help you build better software.",
          url: "https://www.udacity.com/course/software-testing--cs258",
          subtitle: "How to Make Software Fail",
          summary:
            "When writing software, destruction can be just as valuable as creation. Learn how to catch bugs and break software as you discover different testing methods that will help you build better software.",
          title: "Software Testing",
          platform: "udacity",
          __v: 0,
        },
      ],
      experiences: [
        {
          title: "Software Engineer Inern",
          company: "Some Company one",
          startDate: "Jan 2020",
          endDate: "May 2020",
          description:
            "worked on projects, coded, learned a lot. build some things.worked on projects, coded, learned a lot. build some things. ",
        },
        {
          title: "Software Engineer Inern",
          company: "Some Company two",
          startDate: "Jan 2019",
          endDate: "May 2019",
          description:
            "worked on projects, coded, learned a lot. build some things.worked on projects, coded, learned a lot. build some things. ",
        },
      ],
    };
  }
  renderSkillList() {
    return this.state.skills.map((skill, index) => {
      return (
        <ListGroupItem key={index} style={{ border: "none" }}>
          {skill}
        </ListGroupItem>
      );
    });
  }

  renderCourseList() {
    return this.state.courses.map((course, index) => {
      return (
        <ListGroupItem key={index} style={{ border: "none" }}>
          <Media className="course-card">
            <img className="mr-3 course-image" src={course.image} />
            <Media.Body>
              <h3>{course.title}</h3>
              <p className="course-summary">{course.shortSummary}</p>
              <div className="text-right"></div>
            </Media.Body>
          </Media>
        </ListGroupItem>
      );
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} className="mt-5 mb-0">
            <Jumbotron
              style={{
                backgroundImage:
                  "url(" +
                  "https://mdbootstrap.com/img/Photos/Others/gradient1.jpg" +
                  ")",
                backgroundSize: "cover",
              }}
            >
              <h2>{this.state.name}</h2>
              <h5 style={{ color: "#47646f" }}>
                {this.state.title} | {this.state.location}
              </h5>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Body>
                <Card.Title style={{ fontSize: "30px" }}>About</Card.Title>
                <Card.Subtitle muted>{this.state.about}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="mt-4">
            <Card>
              <Card.Body>
                <Card.Title style={{ fontSize: "30px" }}>Skills</Card.Title>
                <ListGroup horizontal>{this.renderSkillList()}</ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="mt-4">
            <Card>
              <Card.Body>
                <Card.Title style={{ fontSize: "30px" }}>Courses</Card.Title>
                <ListGroup>{this.renderCourseList()}</ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col xs={12} className="mt-4">
            <Card>
              <Card.Body>
                <Card.Title style={{ fontSize: "30px" }}>
                  Experiences
                </Card.Title>
                <Experience experiencesList={this.state.experiences} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
