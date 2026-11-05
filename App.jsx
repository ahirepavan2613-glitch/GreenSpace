import { useState } from 'react'
import './App.css'

const products = [
  {
    id: 1,
    name: 'Snake Plant',
    category: 'Indoor',
    price: 499,
    rating: 4.8,
    image: 'photo-1501004318641-b39e6451bec6',
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Monstera Deliciosa',
    category: 'Indoor',
    price: 799,
    rating: 4.9,
    image: 'photo-1614594975525-e45190c55d0b',
    badge: 'Popular'
  },
  {
    id: 3,
    name: 'Peace Lily',
    category: 'Indoor',
    price: 599,
    rating: 4.7,
    image: 'photo-1497250681960-ef046c08a56e',
    badge: 'New'
  },
  {
    id: 4,
    name: 'Money Plant',
    category: 'Outdoor',
    price: 299,
    rating: 4.8,
    image: 'photo-1509423350716-97f9360b4e09',
    badge: 'Popular'
  }
]

function App() {
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === 'All' || product.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <div className="website">

      <div className="topbar">
        Free delivery on orders above ₹999
      </div>

      <header className="navbar">

        <a href="#home" className="logo">
          Green<span>Space</span>.
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </nav>

        <div className="nav-actions">
          <input
            type="text"
            placeholder="Search plants..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              document.getElementById('shop')?.scrollIntoView()
            }}
          />

          <a href="#cart" className="cart">
            Cart ({cart.length})
          </a>
        </div>

      </header>

      <main>

        <section className="hero" id="home">

          <div className="hero-text">
            <span className="eyebrow">WELCOME TO GREENSPACE</span>

            <h1>
              Bring Nature
              <br />
              Into Your <span>Home.</span>
            </h1>

            <p>
              Discover beautiful indoor and outdoor plants.
              Make your home greener, healthier and happier.
            </p>

            <a href="#shop" className="primary-btn">
              Shop Plants →
            </a>

            <div className="hero-stats">
              <div>
                <strong>100+</strong>
                <small>Plant Varieties</small>
              </div>
              <div>
                <strong>5K+</strong>
                <small>Happy Customers</small>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1000"
              alt="Beautiful indoor plants"
            />
            <div className="image-label">
              <strong>Grow Your Happiness</strong>
              <span>Make every corner greener.</span>
            </div>
          </div>

        </section>

        <section className="benefits" id="about">
          <div>
            <span>🚚</span>
            <h3>Free Delivery</h3>
            <p>On orders above ₹999</p>
          </div>

          <div>
            <span>🌱</span>
            <h3>Healthy Plants</h3>
            <p>Carefully selected plants</p>
          </div>

          <div>
            <span>💚</span>
            <h3>Quality Assured</h3>
            <p>Fresh and healthy products</p>
          </div>

          <div>
            <span>📦</span>
            <h3>Secure Packaging</h3>
            <p>Safe delivery to your home</p>
          </div>
        </section>

        <section className="shop-section" id="shop">

          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR COLLECTION</span>
              <h2>Find Your Perfect Plant</h2>
              <p>Bring home something green today.</p>
            </div>
          </div>

          <div className="filters" id="categories">
            {['All', 'Indoor', 'Outdoor'].map((item) => (
              <button
                key={item}
                className={category === item ? 'filter active' : 'filter'}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="product-grid">

            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>

                <div className="product-image">
                  <img
                    src={`https://images.unsplash.com/${product.image}?w=600&q=85`}
                    alt={product.name}
                  />
                  <span className="badge">{product.badge}</span>
                </div>

                <div className="product-info">
                  <div className="rating">
                    ★★★★★ <span>{product.rating}</span>
                  </div>

                  <h3>{product.name}</h3>

                  <div className="product-bottom">
                    <strong>₹{product.price}</strong>

                    <button onClick={() => addToCart(product)}>
                      + Add
                    </button>
                  </div>
                </div>

              </article>
            ))}

          </div>

          {filteredProducts.length === 0 && (
            <p className="empty-message">
              No plants found. Try another search.
            </p>
          )}

        </section>

        <section className="newsletter">
          <h2>Make Your World Greener</h2>
          <p>Join our community and discover the joy of plants.</p>
          <a href="#shop" className="primary-btn">
            Explore Collection
          </a>
        </section>

      </main>

      <footer className="footer" id="cart">
  <h2>GreenSpace.</h2>

  <p>Bringing nature closer to your everyday life.</p>

  <p>Items in cart: {cart.length}</p>

  <div className="footer-owner">
    <p>Website Owner & Creator</p>
    <h3>Pavan Ahire</h3>
  </div>

  <p>© 2026 GreenSpace. All rights reserved.</p>
</footer>

    </div>
  )
}

export default App