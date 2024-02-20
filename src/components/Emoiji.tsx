import { Image, ImageProps } from "@chakra-ui/react"
import BullEye from '../assets/bulls-eye.webp'
import Meh from '../assets/meh.webp'
import ThumbsUp from '../assets/thumbs-up.webp'

interface Props {
    rating: number;
}

const Emoiji = ({rating} : Props) => {
   if (rating < 3) return null;

   const emojiMap:{[key : number] : ImageProps} = {
    3: {src: Meh, alt:'Meh'},
    4: {src: BullEye, alt:'Recommended'},
    5: {src: ThumbsUp, alt:'Exceptional'}
   }
  return (
    <Image {...emojiMap[rating]} boxSize='25px' marginTop={3}/>
  )
}

export default Emoiji
