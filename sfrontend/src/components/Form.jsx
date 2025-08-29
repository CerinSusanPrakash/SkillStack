import React, { useState } from "react";import { Box, TextField, Button, MenuItem, Paper, Typography,Chip } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


const Form = () => {
  const [skill, setSkill] = useState("");
  const [resource, setResource] = useState("");
  const [platform, setPlatform] = useState("");
  const [goals, setGoals] = useState([]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!skill || !resource || !platform) return;

    const newGoal = { skill, resource, platform };
    setGoals([...goals, newGoal]); 
    setSkill("");
    setResource("");
    setPlatform("");
  };

  return (
    <div>
    <Box sx={{ p: 6, maxWidth: 600, mx: "auto" }}>
        <Paper sx={{ p: 4, borderRadius: "16px" }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          🎯 Add Learning Goal
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
          <Button type="submit" variant="contained" fullWidth>
            Add Goal
          </Button>
        </form>
      </Paper>
    </Box>
    
    {/*Show added goals */}
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center", mt: 3 }}>
    {goals.map((goal, i) => (
        <Card sx={{maxWidth: 360, borderRadius: 4, m: 1, p: 1 }}>
        <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "#0d47a1" }} >
                {goal.skill}
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Chip
                label={`Resource: `}
                size="small"
                sx={{ backgroundColor: "#bbdefb", color: "#0d47a1" }}
            /> {goal.resource}
            <Chip
                label={`Platform: `}
                size="small"
                sx={{ backgroundColor: "#f8bbd0", color: "#880e4f" }}
            /> {goal.platform}
            </Box>
        </CardContent>

        <CardActions>
        {/* Update Button */}
        <Button
          size="small"
          color="primary"
          onClick={() => {
            setSkill(goal.skill);
            setResource(goal.resource);
            setPlatform(goal.platform);
            // Remove the current goal to replace on submit
            setGoals(goals.filter((_, index) => index !== i));
          }}
        >
          Update
        </Button>

        {/* Delete Button */}
        <Button
          size="small"
          color="error"
          onClick={() => setGoals(goals.filter((_, index) => index !== i))}
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
