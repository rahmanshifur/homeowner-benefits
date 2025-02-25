import { styled, Typography } from "@mui/material";

const sizes = {
  small: "14px",
  medium: "15px",
  large: "18px",
  xl: "34px",
};

const Heading = ({ text, size = "large", color = "#000", sx }) => {
  const HeadingStyle = styled(Typography)(({ theme }) => ({
    ...sx,
    color: color,
    fontSize: sizes[size],
    fontWeight: size === "small" ? 400 : 600,
    margin: "10px 0px",
  }));

  return <HeadingStyle>{text}</HeadingStyle>;
};

export default Heading;
