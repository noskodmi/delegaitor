import { FC, useState } from "react";
import { Box, Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import axios from "axios";

interface SurveyProps {
  onSurveySubmit: () => void;
}

const Survey: FC<SurveyProps> = ({ onSurveySubmit }) => {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: ""
  });

  const handleChange = (question: string, value: string) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post("/api/submit-survey", answers);
      onSurveySubmit();
    } catch (error) {
      console.error("Error submitting survey:", error);
    }
  };

  return (
    <Box>
      <Box mb={4}>
        <Box mb={2}>What is your primary focus when evaluating a DAO proposal?</Box>
        <RadioGroup onChange={(value: string) => handleChange("q1", value)} value={answers.q1}>
          <Stack direction="column">
            <Radio value="A">Financial return on investment</Radio>
            <Radio value="B">Long-term sustainability and impact</Radio>
            <Radio value="C">Community growth and engagement</Radio>
            <Radio value="D">Innovation and technological advancement</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box mb={4}>
        <Box mb={2}>How do you prefer to vote on proposals that have high potential but also high risk?</Box>
        <RadioGroup onChange={(value: string) => handleChange("q2", value)} value={answers.q2}>
          <Stack direction="column">
            <Radio value="A">Always vote yes, high risk equals high reward</Radio>
            <Radio value="B">Vote yes, but only if there is substantial supporting evidence</Radio>
            <Radio value="C">Vote no, too risky for my preference</Radio>
            <Radio value="D">Neutral, evaluate each case individually</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box mb={4}>
        <Box mb={2}>What time frame do you usually consider for the expected outcomes of a proposal?</Box>
        <RadioGroup onChange={(value: string) => handleChange("q3", value)} value={answers.q3}>
          <Stack direction="column">
            <Radio value="A">Short-term (0-6 months)</Radio>
            <Radio value="B">Medium-term (6-12 months)</Radio>
            <Radio value="C">Long-term (1-3 years)</Radio>
            <Radio value="D">Very long-term (3+ years)</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box mb={4}>
        <Box mb={2}>Which aspect of a proposal do you find most crucial?</Box>
        <RadioGroup onChange={(value: string) => handleChange("q4", value)} value={answers.q4}>
          <Stack direction="column">
            <Radio value="A">Financial projections and budget allocation</Radio>
            <Radio value="B">Team credentials and previous experience</Radio>
            <Radio value="C">Strategic alignment with the DAO's mission</Radio>
            <Radio value="D">Community feedback and endorsements</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box mb={4}>
        <Box mb={2}>How much weight do you give to the opinions of other DAO members when voting?</Box>
        <RadioGroup onChange={(value: string) => handleChange("q5", value)} value={answers.q5}>
          <Stack direction="column">
            <Radio value="A">A lot, I follow majority consensus</Radio>
            <Radio value="B">Significant, but I also consider my own analysis</Radio>
            <Radio value="C">Minimal, I rely mostly on my own judgement</Radio>
            <Radio value="D">None, I always vote independently</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Button onClick={handleSubmit}>Submit Survey</Button>
    </Box>
  );
};

export default Survey;
