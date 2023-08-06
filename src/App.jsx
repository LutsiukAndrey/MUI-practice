import {
  Box,
  Stack,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import "./App.css";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useEffect, useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const mobile = useMediaQuery("(min-width:600px)");

  const [sideBarOpen, setSidebarOpen] = useState(true);
  useEffect(() => {
    setSidebarOpen(mobile);
  }, [mobile]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar setSidebarOpen={setSidebarOpen} sideBarOpen={sideBarOpen} />
        <Stack direction="row" spacing={2}>
          <Sidebar setMode={setMode} mode={mode} sideBarOpen={sideBarOpen} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
