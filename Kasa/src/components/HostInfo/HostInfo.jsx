import "./HostInfo.scss";

function HostInfo({ host }) {
    return (
        <div className="host-info">
            <span>{host.name}</span>
            <img src={host.picture} alt={host.name} className="host-image" />
        </div>
    );
};

export default HostInfo