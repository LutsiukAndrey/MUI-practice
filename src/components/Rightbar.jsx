import { Box } from "@mui/material";

const Rightbar = () => {
  return (
    <Box
      bgcolor="#6f6"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
};

export default Rightbar;
