import React, { useState } from "react";
import { Box, Typography, Grid, Paper, List, ListItem, ListItemText } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Form from "./Form";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
//   const [goals, setGoals] = useState([]);
  const location = useLocation();
  const name = location.state?.name || "User"; 

  const stats = [
    { title: "Total Skills", value: 12, icon: <SchoolIcon />, color: "#1e88e5" },
    { title: "In Progress", value: 5, icon: <HourglassTopIcon />, color: "#fb8c00" },
    { title: "Completed", value: 3, icon: <DoneAllIcon />, color: "#43a047" },
    { title: "Hours Spent", value: 42, icon: <AccessTimeIcon />, color: "#8e24aa" },
  ];

  const completed = ["React Basics (Udemy)", "Git & GitHub Crash Course"];
  const started = ["Django REST API (YouTube)", "Docker Essentials"];
  const inProgress = ["ML with Python (Coursera)", "Data Structures (GeeksforGeeks)"];
 
//   const handleAddGoal = (newGoal) => {
//     setGoals([...goals, newGoal]);
//   };

  return (
    <div>
        <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #e3f2fd, #fce4ec)",
          p: 4,
        }}
        >
        <br />
         
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 6,
            color: "#0d47a1",
            letterSpacing: "1px",
          }}
        >
          🚀 SkillStack Dashboard
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#0d47a1" }}>
        👋 Hi, {name}!
        </Typography> 
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  backdropFilter: "blur(10px)",
                  background: "rgba(255, 255, 255, 0.7)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Box sx={{ fontSize: 50, color: stat.color, mb: 2 }}>{stat.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {stat.title}
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: stat.color }}>
                  {stat.value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Recent Activities */}
        <Box sx={{ maxWidth: "1200px", mx: "auto", textAlign: "center", mt: 6 }}>
          <Typography
            variant="h5"
            sx={{ mb: 3, fontWeight: "bold", color: "#0d47a1" }}
          >
            📝 Recent Activities
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {/* Completed */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, borderRadius: "16px", background: "rgba(232, 245, 233, 0.9)" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#2e7d32", mb: 2 }}>
                  ✅ Completed
                </Typography>
                <List>
                  {completed.map((item, i) => (
                    <ListItem key={i} sx={{ py: 0.5 }}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            {/* Started */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, borderRadius: "16px", background: "rgba(227, 242, 253, 0.9)" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1565c0", mb: 2 }}>
                  ▶️ Started
                </Typography>
                <List>
                  {started.map((item, i) => (
                    <ListItem key={i} sx={{ py: 0.5 }}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            {/* In Progress */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, borderRadius: "16px", background: "rgba(255, 249, 196, 0.9)" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#f57f17", mb: 2 }}>
                  ⏳ In Progress
                </Typography>
                <List>
                  {inProgress.map((item, i) => (
                    <ListItem key={i} sx={{ py: 0.5 }}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Form Section */}
        <Box sx={{ mt: 6 }}>
          <Form  />
        </Box>

        {/* <Box sx={{ mt: 6 }}>
        <Form onAddGoal={handleAddGoal} />
        </Box> */}

        {/* Display Added Goals as Cards
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {goals.map((goal, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                  background: "#fff",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {goal.skill}
                </Typography>
                <Typography variant="body2"> Type: {goal.type}</Typography>
                <Typography variant="body2"> Platform: {goal.platform}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid> */}
      </Box>
    </div>
  );
};

export default Dashboard;
