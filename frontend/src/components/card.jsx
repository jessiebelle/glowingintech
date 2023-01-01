import cardstyles from "./cards.css";

const HoverCard = ({title}, {href}) => {
    return (
        <div className={cardstyles.container}>
            <a className={cardstyles.card2} href={href}>
                <h3>{title}</h3>
                <p className={cardstyles.small}>Card description with lots of great facts and interesting details.</p>

                <div className={cardstyles.goCorner}>
                    <div className={cardstyles.goArrow}>
                        →
                    </div>
                </div>
            </a>
            </div>
    );
};
export default HoverCard;

