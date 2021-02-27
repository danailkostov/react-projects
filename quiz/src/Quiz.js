import { Button, Paper, Typography, Box } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useGlobalContext } from "./context";

const Quiz = () => {
  const {
    questions,
    integer,
    setInteger,
    setIsModalOpen,
    setPercent,
    count,
    setCount,
  } = useGlobalContext();
  const [currAnswers, setCurrAnswers] = useState([]);
  const correctAnswer = questions[integer].correct_answer;

  const concatAnswers = () => {
    const incorrect = questions[integer].incorrect_answers;
    const correct = questions[integer].correct_answer;
    const answers = incorrect.concat(correct);
    return answers.sort(() => Math.random() - 0.5);
  };

  const handleAnswer = (answer) => {
    if (answer === correctAnswer) {
      setCount((state) => state + 1);
    }
    if (integer === questions.length - 1) {
      setIsModalOpen(true);
    } else {
      setInteger((state) => state + 1);
    }
  };

  const handleNext = () => {
    if (integer === questions.length - 1) {
      let percent = (count / questions.length) * 100;
      setPercent(percent.toFixed(0));
      setIsModalOpen(true);
    } else {
      setInteger((state) => state + 1);
    }
  };

  useEffect(() => {
    setCurrAnswers(concatAnswers);
  }, [integer]);

  return (
    <Paper
      component="section"
      style={{
        margin: "4rem auto",
        padding: "3rem",
        width: "90vw",
        maxWidth: "1170px",
      }}
    >
      <Typography variant="subtitle1" component="p">
        Correct Answers {count}/{integer}
      </Typography>
      <article>
        <Typography
          variant="h3"
          component="h2"
          style={{ fontWeight: "700" }}
          align="center"
          gutterBottom
          paragraph
        >
          {questions[integer].question}
        </Typography>
        <Box style={{ textAlign: "-webkit-center" }}>
          {currAnswers.map((answer) => {
            return (
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => handleAnswer(answer)}
                style={{
                  margin: ".50rem auto",
                  textTransform: "none",
                  maxWidth: "60%",
                }}
              >
                {answer}
              </Button>
            );
          })}
        </Box>
      </article>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleNext}
        style={{
          marginTop: "2rem",
          marginLeft: "auto",
          width: "35%",
          display: "flex",
        }}
      >
        Next Question
      </Button>
    </Paper>
  );
};

export default Quiz;
