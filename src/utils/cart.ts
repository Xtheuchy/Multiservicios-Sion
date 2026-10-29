import { products } from '../data/products.ts'
import { site } from '../data/site.ts'
export interface CartItem { id: string; quantity: number }
export const CART_KEY = 'sion-cart-v1'
export const money = (value: number) => 'S/ ' + new Intl.NumberFormat('es-PE', {minimumFractionDigits:2,maximumFractionDigits:2}).format(value)
export function parseCart(raw: string | null): CartItem[] {
  try { const value: unknown = JSON.parse(raw || '[]'); if (!Array.isArray(value)) return []; const result: CartItem[] = []; for (const item of value) { if (item && typeof item.id === 'string' && products.some(p=>p.id===item.id) && Number.isInteger(item.quantity) && item.quantity > 0 && !result.some(p=>p.id===item.id)) result.push({id:item.id,quantity:Math.min(item.quantity,99)}); } return result } catch { return [] }
}
export const subtotal = (items: CartItem[]) => Math.round(items.reduce((sum,item)=>sum+(products.find(p=>p.id===item.id)?.price || 0)*item.quantity,0)*100)/100
export const whatsappLink = (message: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
export const generalWhatsApp = whatsappLink('Hola, MULTISERVICIOS SION. Me gustaría conocer sus productos y disponibilidad. Gracias.')
export function cartMessage(items: CartItem[]) {
  return 'Hola, MULTISERVICIOS SION. Estoy interesado en estos productos que vi en su página:\n\n'+items.map((item,index)=>`${index+1}. ${products.find(p=>p.id===item.id)!.name} - Cantidad: ${item.quantity} - Precio referencial: ${money(products.find(p=>p.id===item.id)!.price)}`).join('\n')+`\n\nSubtotal referencial: ${money(subtotal(items))}.\n\n¿Podrían confirmarme la disponibilidad y los precios actuales? Gracias.`
}
