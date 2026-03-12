import { motion } from 'framer-motion';
import './Menu.css';

const menuItems = [
  {
    id: 1,
    title: 'Frango Grelhado Premium',
    description: 'Acompanha purê de batata baroa e brócolis na manteiga de ervas.',
    price: 'R$ 28,00',
    img: '/assets/images/43fcb1dd-26f1-46ee-ba74-a512cdb92621_20260304_005713_0000.png',
  },
  {
    id: 2,
    title: 'Salmão ao Molho Maracujá',
    description: 'File de salmão fresco com risoto de quinoa e aspargos.',
    price: 'R$ 45,00',
    img: '/assets/images/7951a584-aace-4479-ab73-ab7e4dbd50e4_20260304_005848_0000.png',
  },
  {
    id: 3,
    title: 'Strogonoff Mignon Light',
    description: 'Feito com creme de ricota, acompanha arroz integral e batata doce assada.',
    price: 'R$ 38,00',
    img: '/assets/images/IMG-20260307-WA0014.jpg',
  },
  {
    id: 4,
    title: 'Escondidinho de Carne Seca',
    description: 'Purê de abóbora cabotiá com carne seca desfiada e queijo coalho.',
    price: 'R$ 32,00',
    img: '/assets/images/IMG-20260307-WA0015.jpg',
  },
  {
    id: 5,
    title: 'Vegano: Moqueca de Banana',
    description: 'Moqueca de banana da terra com arroz de couve-flor e farofa amarela.',
    price: 'R$ 30,00',
    img: '/assets/images/IMG-20260307-WA0016.jpg',
  },
  {
    id: 6,
    title: 'Fit: Tilápia Parmegiana',
    description: 'Tilápia assada com molho de tomate rústico, queijo light e legumes.',
    price: 'R$ 35,00',
    img: '/assets/images/IMG-20260307-WA0017.jpg',
  }
];

export default function Menu() {
  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <motion.div 
          className="menu-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2>Cardápio da Semana</h2>
          <p>Escolha a perfeição servida na medida certa para você.</p>
        </motion.div>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="menu-card glass-panel"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 15px 40px rgba(0,0,0,0.5)', borderColor: 'rgba(255, 87, 34, 0.4)' }}
            >
              <div className="card-img-wrapper">
                <img src={item.img} alt={item.title} className="card-img" />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p className="card-desc">{item.description}</p>
                <div className="card-footer">
                  <span className="price">{item.price}</span>
                  <button className="btn btn-sm">Adicionar</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
