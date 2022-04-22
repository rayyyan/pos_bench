interface Props {
  src: string
  title: string
  price: string
}
const Product = (props: Props) => {
  return (
    <div className="product">
      <img src={props.src} alt="" width={132} height={132} />
      <p className="title">{props.title}</p>
      <p className="price">
        {'$'}
        {props.price}
      </p>
    </div>
  )
}
export default Product
