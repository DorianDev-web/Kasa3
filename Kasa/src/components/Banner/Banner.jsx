import "./Banner.scss";

function Banner({ title, image }) {
  return (
    <section className="banner">
      <img src={image} alt={title} className="banner_image" />

      <div className="banner_overlay">
        <h1>{title}</h1>
      </div>
    </section>
  )
}

export default Banner;