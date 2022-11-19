/* eslint-disable react/no-unknown-property */
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { css, IconButton } from "@mui/material";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

const ThemeToggle: FC<{}> = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
    <IconButton
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      size="large"
      color="primary"
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
      }}
    >
      {resolvedTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
