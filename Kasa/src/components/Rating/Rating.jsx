import "./Rating.scss";

function Rating ({ rating }) {
    const maxStars = 5;
    const stars = Array(maxStars)
        .fill(null)
        .map((_, index) => (index < rating ? "★" : "☆"));

    return (
        <div className="rating">
            {stars.map((star, index) => (
                <span
                key={index}
                className={index < rating ? "filled-star" : "empty-star"}
                >
                    {star}
                </span>
            ))}
        </div>
    )
}

export default Rating;