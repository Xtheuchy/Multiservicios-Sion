import test from 'node:test'
import assert from 'node:assert/strict'
import { CART_KEY, parseCart, subtotal, money, cartMessage, whatsappLink } from '../src/utils/cart.ts'

test('subtotal de varios productos y formato PEN',()=>{
  assert.equal(subtotal([{id:'rally-blue',quantity:1},{id:'blocks',quantity:2}]),229.70)
  assert.equal(money(229.7),'S/ 229.70')
  assert.equal(subtotal([]),0)
})
test('restaura una selección serializada como la guardada en localStorage',()=>{
  const selection=[{id:'rally-blue',quantity:2},{id:'blocks',quantity:1}]
  const storage=new Map([[CART_KEY,JSON.stringify(selection)]])
  assert.deepEqual(parseCart(storage.get(CART_KEY)),selection)
})
test('descarta datos corruptos, productos inexistentes, duplicados y cantidades inválidas',()=>{
  for(const value of [null,'undefined','{','{}','null']) assert.deepEqual(parseCart(value),[])
  assert.deepEqual(parseCart(JSON.stringify([null,{id:'missing',quantity:1},{id:'blocks',quantity:0},{id:'blocks',quantity:1.5},{id:'blocks',quantity:1000},{id:'blocks',quantity:1}])),[{id:'blocks',quantity:99}])
})
test('WhatsApp incluye selección, cantidades, subtotal y solicitud de confirmación',()=>{
  const message=cartMessage([{id:'rally-blue',quantity:1},{id:'blocks',quantity:2}])
  const url=new URL(whatsappLink(message))
  assert.equal(url.origin,'https://wa.me')
  assert.equal(url.pathname,'/51928029815')
  assert.equal(url.searchParams.get('text'),message)
  assert.match(message,/1\. Rally RC Blue Edition - Cantidad: 1 - Precio referencial: S\/ 129.90/)
  assert.match(message,/2\. Bloques de colores - Cantidad: 2/)
  assert.match(message,/Subtotal referencial: S\/ 229.70/)
  assert.match(message,/confirmarme la disponibilidad y los precios actuales/)
})
