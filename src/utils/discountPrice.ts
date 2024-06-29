export const discountPrice = (price : number, discountPercentage : number) =>{
    const newPrice = price - ((price /100) * discountPercentage)
    return newPrice.toFixed(2)
}