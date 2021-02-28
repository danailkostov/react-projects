import React from "react";
import {
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Input,
  Button,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const {
    difficulty,
    setDifficulty,
    category,
    setCategory,
    amount,
    setAmount,
    fetchQuestions,
  } = useGlobalContext();

  const handleDifficulty = (event) => {
    setDifficulty(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleNumber = (event) => {
    setAmount(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchQuestions();
  };
  return (
    <Paper
      component="section"
      style={{
        margin: "4rem auto",
        padding: "3rem",
        width: "90vw",
        maxWidth: "500px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Typography
          variant="h4"
          component="h1"
          style={{ fontWeight: "600" }}
          gutterBottom
          paragraph
        >
          Setup Quiz
        </Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel
            htmlFor="amount"
            margin="dense"
            style={{ fontWeight: "700" }}
          >
            Number Of Questions
          </InputLabel>
          <Input
            id="amount"
            type="number"
            name="amount"
            value={amount}
            margin="normal"
            onChange={handleNumber}
            inputProps={{ min: "1", max: "50" }}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel
            htmlFor="category"
            margin="dense"
            style={{ fontWeight: "700" }}
          >
            Category
          </InputLabel>
          <Select
            name="category"
            id="category"
            value={category}
            onChange={handleCategory}
          >
            <MenuItem value={21}>sports</MenuItem>
            <MenuItem value={23}>history</MenuItem>
            <MenuItem value={24}>politics</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel
            htmlFor="difficulty"
            margin="dense"
            style={{ fontWeight: "700" }}
          >
            Select Difficulty
          </InputLabel>
          <Select
            name="difficulty"
            id="difficulty"
            value={difficulty}
            onChange={handleDifficulty}
          >
            <MenuItem value={"easy"}>easy</MenuItem>
            <MenuItem value={"medium"}>medium</MenuItem>
            <MenuItem value={"hard"}>hard</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ textTransform: "none", marginTop: "3rem" }}
        >
          Start
        </Button>
      </form>
    </Paper>
  );
};

export default SetupForm;
