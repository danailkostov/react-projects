import React, { useEffect } from "react";
import { Button, Modal, Paper, Typography } from "@material-ui/core";
import { useGlobalContext } from "./context";

const ModalComp = () => {
  const {
    isModalOpen,
    setIsModalOpen,
    percent,
    setPercent,
    count,
    amount,
    setQuestions,
    setInteger,
  } = useGlobalContext();

  useEffect(() => {
    let percents = (count / amount) * 100;
    setPercent(percents.toFixed(0));
  }, []);

  const handlePlayAgain = () => {
    setQuestions(null);
    setIsModalOpen(false);
    setInteger(0);
  };

  const body = (
    <Paper
      style={{
        width: "90vw",
        maxWidth: "620px",
        padding: "3rem",
        textAlign: "center",
      }}
    >
      <Typography
        gutterBottom
        variant="h4"
        component="h2"
        style={{ fontWeight: "600" }}
        id="simple-modal-title"
        align="center"
      >
        Congrats!
      </Typography>
      <Typography
        gutterBottom
        paragraph
        align="center"
        variant="h6"
        component="p"
        id="simple-modal-description"
      >
        You answered {percent}% of questions correctly{" "}
      </Typography>
      <Button
        onClick={handlePlayAgain}
        size="small"
        variant="contained"
        color="secondary"
        style={{ textTransform: "none", marginTop: "1rem", width: "35%" }}
      >
        Play Again
      </Button>
    </Paper>
  );
  return (
    <Modal
      open={isModalOpen}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      {body}
    </Modal>
  );
};

export default ModalComp;
