import { ArrowUpRight, Plus } from 'lucide-react'
import type { Product } from '../data/products'
import { money, whatsappLink } from '../utils/cart'
export function ProductCard({product:p,onAdd}:{product:Product;onAdd:(id:string)=>void}) {
  return <article className="product-card"><div className="product-image">{p.badge && <span className="product-badge">{p.badge}</span>}<img src={p.image} alt={`Ilustración de demostración: ${p.name}`} loading="lazy" width="500" height="340"/><span className="illustration-label">Imagen ilustrativa</span></div><div className="product-body"><span className="eyebrow">{p.category}</span><h3>{p.name}</h3><p>{p.description}</p><div className="price-row"><strong>{money(p.price)}</strong><span>Precio referencial</span></div><button className="button primary add-button" onClick={()=>onAdd(p.id)}><Plus size={17}/> Agregar al carrito</button><a className="product-consult" href={whatsappLink(`Hola, MULTISERVICIOS SION. Me interesa ${p.name}, que vi en su catálogo demostrativo. ¿Podrían confirmarme la disponibilidad y el precio actual? Gracias.`)} target="_blank" rel="noreferrer">Consultar por WhatsApp <ArrowUpRight size={15}/></a></div></article>
}
