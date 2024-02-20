import { useState } from 'react'
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GeneresList from './components/GeneresList'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from "./hooks/useGames";
import SortSelector from './components/SortSelector'
import GamesHeading from './components/GamesHeading'

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const[gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr' 
      }}
      >
        
        <GridItem area="nav"><NavBar onSearch={(searchText)=> setGameQuery({...gameQuery, searchText})}></NavBar></GridItem>
        <Show above='lg'>
          <GridItem area="aside"><GeneresList  selectGenre={gameQuery.genre}  onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})}/></GridItem>
        </Show> 
        <GridItem area="main">
          <GamesHeading gameQuery={gameQuery}/>
          <HStack >
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} />
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
          </HStack>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
