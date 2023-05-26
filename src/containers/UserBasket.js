import BasketItem from "../components/BasketItem"

const Basket = ({basket, handleDelFromBasket}) => {

    const userBasket = basket.map((item, index) => {return <BasketItem handleDelFromBasket={handleDelFromBasket} key= {index} index={index} item={item} />
    })

    const totalValue = basket.reduce((total, item)=>{return total + item.price},0)

    return(
        <div>
        <h5>The total value of your basket of baskets is ${totalValue}</h5>
        <button value={0} onClick={handleDelFromBasket}>Delete All From Basket</button>
        <ul>
        {userBasket}
        </ul>
        </div>
    )
}

export default Basket