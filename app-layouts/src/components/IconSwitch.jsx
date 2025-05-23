export default function IconSwitch({ icon, onSwitch }) {
    return (
        <span
        className="material-icons"
        style={ {cursor:"pointer", fontSize: 32 }}
        onClick={onSwitch}
        title="Switch view"
        >
            {icon}
        </span>
    );
}