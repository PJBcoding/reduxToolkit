import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DEMO_PRODUCT = [
  {
    id: 'q1',
    price: 7,
    title: 'Mobile realme',
    description: 'A very nice mobile with a lots of  updated fucnctionalities.'
  },
  {
    id: 'q2',
    price: 9,
    title: 'Mobile Infinix Z3',
    description: 'A new leader of smartphone industry that has fulfilled customer satisfaction '
  },
  {
    id: 'q3',
    price: 12,
    title: 'Mobile Iphone',
    description: 'An excellent phone with premium facility and build quality '
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Our Top Product List</h2>
      <ul>
        {DEMO_PRODUCT.map(item => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              price={item.price}
              title={item.title}
              description={item.description}
            />
          )

        })}

      </ul>
    </section>
  );
};

export default Products;
