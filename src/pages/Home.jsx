import React from "react";
import { Box, Card, Typography } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import  DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded"

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <HomeWrapper>
        <Box p={2}>
          <Typography variant="h4" mb={2} fontWeight={"bold"}>
            Text Generator
          </Typography>
          <Card
            onClick={() => navigate("/summary")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": { border: 2, cursor: "pointer" },
            }}
          >
          <DescriptionRoundedIcon/>
          </Card>
        </Box>
      </HomeWrapper>
    </>
  );
};

const HomeWrapper = styled.div``;

export default Home;
