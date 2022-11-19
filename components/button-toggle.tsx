/* eslint-disable react/no-unknown-property */
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Button, css } from "@mui/material";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
const ButtonToggle: FC<{}> = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div
        css={css`
          min-height: 162.38px;
        `}
      ></div>
    );

  return (
    <Button
      size="large"
      variant="contained"
      sx={{ padding: "1rem" }}
      endIcon={resolvedTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      Switch to {resolvedTheme === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

export default ButtonToggle;
