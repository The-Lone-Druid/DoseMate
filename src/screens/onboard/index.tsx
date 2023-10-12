import React from "react";
import { Button, Typography } from "@mui/material";

import { TextLogo } from "../../components";
// images
import { PharmacistBro, CalendarAmico, VoiceControlBro } from "../../assets";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    id: 1,
    stepsHeading: "A mate that cares for your health",
    stepsImg: PharmacistBro,
  },
  {
    id: 2,
    stepsHeading: "Set Reminders for your medicine",
    stepsImg: CalendarAmico,
  },
  {
    id: 3,
    stepsHeading: "Get Reminded Verbally on time",
    stepsImg: VoiceControlBro,
  },
];
const TOTAL_STEPS = 2;

const OnBoard: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const navigate = useNavigate();
  const currentStep = steps[activeStep];

  const handleStepperInc = () => {
    if (activeStep < TOTAL_STEPS) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleStepperDec = () => {
    if (activeStep !== 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const handleOnboarding = () => {
    localStorage.setItem("onBoarding", "true");
    navigate("auth/login");
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="flex items-center justify-center my-6">
        <TextLogo />
      </div>
      <div className="max-w-[200px] w-full flex items-center gap-2  mt-10">
        <div className="w-full h-1 bg-white rounded-full"></div>
        <div
          className={`w-full h-1 bg-white rounded-full ${
            activeStep > 0 ? "" : "opacity-20"
          } `}
        ></div>
        <div
          className={`w-full h-1 bg-white rounded-full ${
            activeStep > 1 ? "" : "opacity-20"
          } `}
        ></div>
      </div>
      <div className="my-6">
        <Typography
          variant="h4"
          component="h1"
          textAlign="center"
          fontWeight={700}
        >
          {currentStep.stepsHeading}
        </Typography>
      </div>
      <div className="my-6">
        <img src={currentStep.stepsImg} alt="stepsImg" />
      </div>
      {activeStep === TOTAL_STEPS ? (
        <div className="w-full max-w-[200px]">
          <Button
            color="primary"
            className="!rounded-full"
            variant="contained"
            size="large"
            type="submit"
            fullWidth
            onClick={handleOnboarding}
          >
            Submit
          </Button>
        </div>
      ) : (
        <div className="w-full flex items-center justify-evenly">
          <Button
            className="!rounded-full"
            variant="contained"
            size="large"
            sx={{
              padding: "10px 30px",
              backgroundColor: "#ffffff",
              opacity: "20%",
              color: "#ffffff",
            }}
            onClick={handleStepperDec}
          >
            Skip
          </Button>
          <Button
            color="primary"
            className="!rounded-full"
            variant="contained"
            size="large"
            sx={{
              padding: "10px 30px",
            }}
            onClick={handleStepperInc}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default OnBoard;
