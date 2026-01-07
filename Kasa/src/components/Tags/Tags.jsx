import Tag from "../Tag/Tag";
import "./Tags.scss";

function Tags ({ tags }) {
    return (
        <div className="tags">
            {tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
            ))}
        </div>
    )
}

export default Tags;