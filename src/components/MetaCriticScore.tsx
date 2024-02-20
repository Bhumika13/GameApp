import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

const MetaCriticScore = ({score}: Props) => {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
  return (
    <div>
      <Badge colorScheme={color} paddingX={2} borderRadius='5px'>{score}</Badge>
    </div>
  )
}

export default MetaCriticScore
