import { Game } from "../hooks/useGames";
import { Card, CardBody, Image, Heading, HStack } from '@chakra-ui/react'
import PlatformIconList from "./PlatformIconList";
import MetaCriticScore from "./MetaCriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoiji from "./Emoiji";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} ></Image>
            <CardBody>
                <HStack justifyContent={"space-between"} marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <MetaCriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>{game.name}<Emoiji rating={game.rating_top}/></Heading>               
            </CardBody>
        </Card>
    )
}

export default GameCard
