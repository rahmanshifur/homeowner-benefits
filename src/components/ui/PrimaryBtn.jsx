import { Button, styled } from "@mui/material";

const PrimaryBtn = (props) => {
  const { text, type, onClick, smButton, onSubmit, sx } = props;

  return (
    <ButtonStyle
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      size="medium"
      variant="contained"
      smButton={smButton}
      sx={sx} // ✅ Allows dynamic override
    >
      {text}
    </ButtonStyle>
  );
};

export default PrimaryBtn;

const ButtonStyle = styled(Button)(({ sx, smButton }) => ({
  ...sx, // ✅ Allows external styles
  backgroundColor: "#033E8A",
  fontSize: 14,
  fontWeight: 500,
  color: smButton ? "#033E8A" : "white",
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: smButton ? "#033E8A" : "#033E8A",
  background: smButton ? "white" : "#033E8A",
  borderRadius: "50px",
  transition: "all 0.3s ease-in-out",
  padding: smButton ? "10px 30px" : "10px 133px",
  marginLeft: "15px",
  "&:hover": {
    backgroundColor: smButton ? "#033E8A" : "white",
    color: smButton ? "white" : "black",
  },

  // ✅ Apply responsive styles using MUI's breakpoints
  "@media (max-width: 1200px)": {
    padding: smButton ? "8px 30px" : "10px 100px",
    fontSize: 13,
  },
  "@media (max-width: 900px)": {
    padding: smButton ? "10px 25px" : "10px 80px",
    fontSize: 12,
  },
  "@media (max-width: 600px)": {
    padding: smButton ? "10px 20px" : "10px 60px",
    fontSize: 11,
    borderRadius: "30px",
  },
}));
