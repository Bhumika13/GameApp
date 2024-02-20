import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props{
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder:string;
}

const SortSelector = ({onSelectSortOrder, sortOrder} : Props) => {
    const SortOrder = [
        {value:'', label:'Relevance'},
        {value:'-added', label:'Date added'},
        {value:'-name', label:'Name'},
        {value:'-released', label:'Release date'},
        {value:'-metacritic', label:'Popularity'},
        {value:'-rating', label:'Average Rating'}
    ];
    const currentSortOrder = SortOrder.find(order => order.value === sortOrder);

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order By: {currentSortOrder?.label || 'Relevance'}</MenuButton>
        <MenuList>
           {SortOrder.map((order) => <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.label}>{order.label}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default SortSelector
