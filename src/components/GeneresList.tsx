import useGenres , {Genre} from '../hooks/useGenres';
import { HStack, List, ListItem, Image, Spinner, Button, Heading } from '@chakra-ui/react';import getCroppedImageUrl from '../services/image-url';

export interface Props{
  onSelectedGenre: (genre: Genre) => void;
  selectGenre: Genre | null;
}
const GeneresList = ({selectGenre,onSelectedGenre} : Props) => {
  const { data , isLoading, error} = useGenres();

  if (error) return null;
  if (isLoading === true){
    return <Spinner />
  }
  return (
    <>
    <Heading>Genres</Heading>
    <List>
      {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
        <HStack>
          <Image boxSize='32px' objectFit='cover' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
          <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectedGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
        </HStack>
      </ListItem>)}
    </List>
    </>
  )
}

export default GeneresList
