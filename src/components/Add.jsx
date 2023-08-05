import {
  Avatar,
  Box,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%)", md: "30px" },
          transform: "translateX(-50%)",
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={10}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            color="gray"
            textAlign="center"
            component="h2"
          >
            Create Post
          </Typography>

          <UserBox>
            <Avatar src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" />
            <Typography fontWeight={700} variant="span">
              Nick Someone
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={2}
            placeholder="Tell me something"
            variant="standard"
          />
          <Stack></Stack>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
