import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Chip,
  Typography,
  Box,
  Grid,
  IconButton,
  Badge,
} from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { styled } from "@mui/system";

const Title = styled("div")(() => ({
  marginBottom: "1.5px",
  color: "#666666",
}));

const SubTitle = styled("span")(() => ({
  marginBottom: "1.5px",
  color: "#333333",
  fontWeight: "bold",
}));

const Heading = styled("div")(() => ({
  color: "#333333",
  fontWeight: "bold",
  fontSize: "16px",
}));

// const rightIconAction = (
//   <>
//     <Badge
//       badgeContent={4}
//       color="error"
//       sx={{
//         "& .MuiBadge-badge": {
//           right: "1.8px",
//           top: "0.5px",
//         },
//       }}
//     >
//       <NotificationsNoneIcon color="action" />
//     </Badge>
//     <IconButton>
//       <MoreVertIcon />
//     </IconButton>
//   </>
// );

const TodoCard = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Card sx={{ minWidth: 275, m: "10px 2px", mt: "20px", background: "rgba(255, 243, 117, 1)" }}>
            {/* <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#2C5CC9" }} aria-label="recipe">
                  {item.assigned_To.charAt(0).toUpperCase()}
                </Avatar>
              }
              action={rightIconAction}
            /> */}
            <CardContent sx={{ p: "0 16px" }}>
              <Heading sx={{ my: "10px" }}>{item.assigned_To}</Heading>
              <Typography sx={{ fontSize: 18 }} color="black" gutterBottom>
                {item.task}
              </Typography>
              <Box sx={{ flexGrow: 1, color: "#333333", m: "20px 0 0" }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={4}>
                    <Title>Assignee</Title>
                    <SubTitle>{item.assignee}</SubTitle>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Title>Priority</Title>
                    <SubTitle>{item.priority}</SubTitle>
                  </Grid>
                  <Grid item xs={2} sm={4} md={4}>
                    <Title>Due Date</Title>
                    <SubTitle>{item.due_Date}</SubTitle>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
            {/* <CardActions>
              <Chip
                label={"Qty:7"}
                sx={{
                  m: 1,
                  minWidth: "70px",
                  maxHeight: "25px",
                  background: "#EEFFF3",
                  color: "#1CA13E",
                }}
                variant="outlined"
              />
            </CardActions> */}
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TodoCard;