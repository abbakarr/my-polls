import { connect } from "react-redux";
import { useState } from "react";
import NavigationBar from "./NavigationBar";
import Poll from "./Poll";
import { Footer } from "./Footer";
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";


const Dashboard = ({ uquestions, aquestions, users, authedUser }) => {
  const [toggleView, setToggleView] = useState(true);
  const toggle = () => setToggleView(!setToggleView);

  return (
    <>
      <NavigationBar />
      <section className="ms-4">
      <h2 className="text-dark pt-5">Available polls</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4 card-lists p-5">
    { uquestions.map((question) => (
                <li key={question.id}>
                  <Poll
                    key={question.id}
                    id={question.id}
                    {...question}
                    question={question}
                    title={"UnAnswered Questions"}
                  />
                </li>
              ))}
               
  </div>
       
        </section>
        <section className="ms-4">
        <h2 className="text-dark">Participated polls</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4 card-lists p-5">
        {
         aquestions.map((question) => (
                <li key={question.id}>
                  <Poll
                    key={question.id}
                    id={question.id}
                    {...question}
                    question={question}
                    timestamp={question.timestamp}
                    title={"UnAnswered Questions"}
                  />
                </li>
              ))}
        </div>
        
        </section>
     
      <Footer />
    </>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => {
  const unansweredQuestions = (question) =>
    !question.optionOne.votes.includes(authedUser.id) &&
    !question.optionTwo.votes.includes(authedUser.id);

  const answeredQuestions = (question) =>
    question.optionOne.votes.includes(authedUser.id) ||
    question.optionTwo.votes.includes(authedUser.id);
  const uquestions = Object.values(questions)
    .sort((a, b) => b.timestamp - a.timestamp)
    .filter(unansweredQuestions);
  const aquestions = Object.values(questions)
    .sort((a, b) => b.timestamp - a.timestamp)
    .filter(answeredQuestions);
  return {
    authedUser,
    users,
    uquestions,
    aquestions,
  };
};
export default connect(mapStateToProps)(Dashboard);
