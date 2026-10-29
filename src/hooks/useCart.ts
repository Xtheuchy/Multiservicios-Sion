import { useState } from 'react'
import { CART_KEY, parseCart, type CartItem } from '../utils/cart'
export function useCart() {
  const [items,setItems] = useState<CartItem[]>(()=>{try{return parseCart(localStorage.getItem(CART_KEY))}catch{return []}})
  const [storageError,setStorageError] = useState(false)
  function update(next:CartItem[]) {
    setItems(next)
    try { localStorage.setItem(CART_KEY,JSON.stringify(next));setStorageError(false) } catch { setStorageError(true) }
  }
  return {items,storageError,count:items.reduce((n,i)=>n+i.quantity,0),add:(id:string)=>update(items.some(i=>i.id===id)?items.map(i=>i.id===id?{...i,quantity:Math.min(99,i.quantity+1)}:i):[...items,{id,quantity:1}]),change:(id:string,delta:number)=>update(items.map(i=>i.id===id?{...i,quantity:Math.min(99,i.quantity+delta)}:i).filter(i=>i.quantity>0)),remove:(id:string)=>update(items.filter(i=>i.id!==id)),clear:()=>update([])}
}
