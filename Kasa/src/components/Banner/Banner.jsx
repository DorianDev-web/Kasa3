import "./Banner.scss";

const Banner = ({ className, children }) => {
    return (
        <div className={className}>
            <div className="overlay"></div>
            {children}
        </div>
    );
};

export default Banner;