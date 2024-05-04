import { Box, Button } from "@mui/material"
import { useSelector ,useDispatch} from "react-redux"
import { storeType } from "../Store"
import { items } from "../JSONData/data"
import { useEffect, useState } from "react"
import { addToCart } from "../Store/Grocery/GrocerySlice"
type GroceryProps = {
    filter: string
}
const Groceries = ({ filter }: GroceryProps): JSX.Element => {
    const [allData, setAllData] = useState<items[]>([])
    const { groceryData } = useSelector((state: storeType) => state.grocery)
    const dispatch=useDispatch()
    useEffect(() => {
        filterSearch()
    }, [])
    useEffect(() => {
        if (filter) {
            let allData: items[] = [];
            Object.values(groceryData).forEach((e) => allData = [...allData, ...e]);
            setAllData(allData.filter((i) => i.id?.includes(filter)))
        }
        else {
            filterSearch()
        }
    }, [filter])
    const filterSearch = (): void => {
        let allData: items[] = [];
        Object.values(groceryData).forEach((e) => allData = [...allData, ...e]);
        setAllData(allData)
    }
    const AddHandler = (operation: "add" | "buy",item:items): void => {
        if (operation === "add") {
            dispatch(addToCart(item))
        }
        if (operation === "buy") {

        }
    }
    return (
        <Box className="grocery-container">
            {allData.map((item: items) =>
                <div className="Grocery-Items">
                    <img src={item.img} className="grocery-img" />
                    <strong>{item.name}{"  "} @{item.brand}, {" "}{item.price} for {item.quantity}</strong>
                    <div>
                    <Button variant="contained" onClick={() => AddHandler("add",item)} className='item-buttons'>Add to Cart</Button>
                    <Button variant="contained" onClick={() => AddHandler("buy",item)} className='item-buttons'>Buy</Button>
                    </div>
                </div>)
            }
            {allData.length == 0 && <>No Product Available.</>}
        </Box>
    )
}
export default Groceries