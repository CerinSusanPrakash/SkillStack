import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Paper,
  Typography,
  Chip,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const Form = () => {
  const [skill, setSkill] = useState("");
  const [resource, setResource] = useState("");
  const [platform, setPlatform] = useState("");
  const [status, setStatus] = useState("");
  const [goals, setGoals] = useState([]);

  // for update
  const [editingId, setEditingId] = useState(null);

  // fetch goals from backend
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/goals/")
      .then((res) => setGoals(res.data))
      .catch((err) => console.error("Error fetching goals:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!skill || !resource || !platform || !status) {
      alert("Please fill all fields");
      return;
    }

    const goalData = { skill, resource, platform, status };

    try {
      if (editingId) {
        // ✅ Update
        const res = await axios.put(
          `http://localhost:8000/api/goals/${editingId}/`,
          goalData
        );
        setGoals(
          goals.map((g) => (g.id === editingId ? res.data : g))
        );
        setEditingId(null);
      } else {
        // Create
        const res = await axios.post(
          "http://localhost:8000/api/goals/",
          goalData
        );
        setGoals([...goals, res.data]);
      }

      // reset form
      setSkill("");
      setResource("");
      setPlatform("");
      setStatus("");
    } catch (error) {
      console.error(
        "Error saving goal:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to save goal, check console for details");
    }
  };

  const handleEdit = (goal) => {
    setSkill(goal.skill);
    setResource(goal.resource);
    setPlatform(goal.platform);
    setStatus(goal.status);
    setEditingId(goal.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/goals/${id}/`);
      setGoals(goals.filter((g) => g.id !== id));
    } catch (err) {
      console.error("Error deleting goal:", err);
    }
  };

  return (
    <div>
      <Box sx={{ p: 6, maxWidth: 600, mx: "auto" }}>
        <Paper sx={{ p: 4, borderRadius: "16px" }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            🎯 {editingId ? "Update Goal" : "Add Learning Goal"}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Skill Name"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              select
              label="Resource Type"
              value={resource}
              onChange={(e) => setResource(e.target.value)}
              sx={{ mb: 2 }}
            >
              <MenuItem value="Video">Video</MenuItem>
              <MenuItem value="Course">Course</MenuItem>
              <MenuItem value="Article">Article</MenuItem>
            </TextField>
            <TextField
              fullWidth
              label="Platform"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              select
              label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              sx={{ mb: 2 }}
            >
              <MenuItem value="Started">Started</MenuItem>
              <MenuItem value="In-Progress">In-Progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </TextField>
            <Button type="submit" variant="contained" fullWidth>
              {editingId ? "Update Goal" : "Add Goal"}
            </Button>
          </form>
        </Paper>
      </Box>

      {/* Show added goals */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          mt: 3,
        }}
      >
        {goals.map((goal) => (
          <Card
            key={goal.id}
            sx={{ maxWidth: 360, borderRadius: 4, m: 1, p: 1 }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 1, color: "#0d47a1" }}
              >
                {goal.skill}
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Chip
                  label={`Resource: ${goal.resource}`}
                  size="small"
                  sx={{ backgroundColor: "#bbdefb", color: "#0d47a1" }}
                />
                <Chip
                  label={`Platform: ${goal.platform}`}
                  size="small"
                  sx={{ backgroundColor: "#f8bbd0", color: "#880e4f" }}
                />
                <Chip
                  label={`Status: ${goal.status}`}
                  size="small"
                  sx={{ backgroundColor: "#c8e6c9", color: "#1b5e20" }}
                />
              </Box>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => handleEdit(goal)}
              >
                Edit
              </Button>
              <Button
                size="small"
                color="error"
                onClick={() => handleDelete(goal.id)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Form;
