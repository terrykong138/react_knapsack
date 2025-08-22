import React , { useRef } from 'react'
import { getOrderTotalItemCount ,changeCartSup} from './ContentCard';
const CartItem = ({handleItemConfigF,config, itemId, imageSourceP,  itemTitleP, themeP, priceP, itemCountP,itemsSumP}) => {


    const updateNewOrderItemCount = (productId,countP) => {
   
  
   const productsSelect = (product) => {
    return product.id === productId;
    }
    let  workOrderItem = window.myDataNewOrderdetails.find(productsSelect);
    if (workOrderItem !== undefined) {
        let index = window.myDataNewOrderdetails.indexOf(workOrderItem);
        window.myDataNewOrderdetails[index].count =countP;
        const temItemSum = window.myDataNewOrderdetails[index].price * window.myDataNewOrderdetails[index].count ;
        window.myDataNewOrderdetails[index].sum = Math.round(temItemSum * 100 )/ 100 ;
        return  window.myDataNewOrderdetails[index].count;
      } else  return -1;
    }
    const updateData = () =>{
    let taxRate = 0.18;
     let orderSum = 0;
    let orderItemCount = 0;
    let orderTax = 0;
    let temTax = orderSum * taxRate;
    let orderTotal = Math.round((orderSum - temTax)*100)/100 ;
    let orderCout = 0;

    function myCountCal(item) {
        orderCout += item.count;
        orderSum += item.sum;
    }
    window.myDataNewOrderdetails.forEach(myCountCal);
    const temOrderTax = orderSum * taxRate;

    orderTax = Math.round(temOrderTax * 100) / 100;
    const  temOrderTotal = orderSum + orderTax ;
    orderTotal = Math.round(temOrderTotal * 100)/100 ;
;    return [orderCout ,orderSum,orderTax,orderTotal];
    }

       const getItemCount = (idStrin) =>{
        const itemElement = document.getElementById(idString);
        if (itemElement !== undefined ) {
            if (itemElement.textContent !== "")
            return Number(itemElement.textContent);
        }  else return 1;
    
    }
     const changeItemCount =( idString, number) =>{
        const itemElement = document.getElementById(idString);
        itemElement.textContent = number.toString();
            
    }
 let newItemCount = itemCountP;
 let newItemsSum = itemsSumP;
 let totalItemCount = getOrderTotalItemCount();
 const minusOrderItemCount =() => {
        if (newItemCount >1) {
            newItemCount -=1;
           let temItemSum = priceP *  newItemCount;
            newItemsSum  = Math.round(temItemSum * 100) / 100 ;
            newItemCount=updateNewOrderItemCount(itemId, newItemCount);
            totalItemCount = getOrderTotalItemCount();
            changeCartSup(totalItemCount);
            // const taxRate=0.18;
            let newConfigArr = updateData();
            handleItemConfigF({orderCoutP:newConfigArr[0] ,orderSumP:newConfigArr[1] , orderTaxP:newConfigArr[2] , OrderTotalP:newConfigArr[3]})


    }

}
const pulsOrderItemCount =() =>{
            newItemCount +=1;
            let temItemSum = priceP  *  newItemCount;
            newItemsSum  = Math.round(temItemSum * 100) / 100;
            newItemCount=updateNewOrderItemCount(itemId, newItemCount);
            totalItemCount = getOrderTotalItemCount();
            changeCartSup(totalItemCount);
            // const taxRate=0.18;
            let newConfigArr = updateData();
            handleItemConfigF({orderCoutP:newConfigArr[0] ,orderSumP:newConfigArr[1] , orderTaxP:newConfigArr[2] , OrderTotalP:newConfigArr[3]})


}

// ==============handle remove============
const [isVisible, setIsVisible] = React.useState(true);
const handleRemove = () => {
    const productsSelect = (product) => {
    return product.id === itemId;
    }
    let  workOrderItem = window.myDataNewOrderdetails.find(productsSelect);
    if (workOrderItem !== undefined) {
        let index = window.myDataNewOrderdetails.indexOf(workOrderItem);
        window.myDataNewOrderdetails.splice(index,1);
    
         totalItemCount = getOrderTotalItemCount();
            changeCartSup(totalItemCount);
            // const taxRate=0.18;
            let newConfigArr = updateData();
            handleItemConfigF({orderCoutP:newConfigArr[0] ,orderSumP:newConfigArr[1] , orderTaxP:newConfigArr[2] , OrderTotalP:newConfigArr[3]})
  
    }
    
    setIsVisible(false); // "Remove" the component by not rendering
  };

if (!isVisible) return null;
  return (
    <div className='cardflex-row-between'>
        <div className="box flex-row cart-item">
            <img className='cartItemImage' src={imageSourceP} alt={itemTitleP}></img>
            <div className="box flex-column cart-item-theme">
                <h5>{itemTitleP}</h5>
                <h5>{themeP}</h5>
                <h5>${priceP}</h5>
            </div>
        </div>
        <div className='box flex-row cartItemRightBox'>
            <div className='box flex-row cartItemButtons' >
                <button onClick={minusOrderItemCount}>-</button>
                <a>{newItemCount}</a>
                <button onClick={pulsOrderItemCount}>+</button>
            </div>
            <div className='box-flex-column-cartItemSum'>
                <h5>${newItemsSum}</h5>
                <button className='btn-small' onClick={handleRemove}>Remove</button>
            </div>
            
        </div>
    </div>
  )
}

export default CartItem