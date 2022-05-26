import './Thumbnail.scss'
import CircleButton from "../CircleButton/CircleButton";

const Thumbnail = (props) => {
    if (props.expanded) {
        return (
            <div className={'thumbnail '}>
                <div className={'thumbnail-box expanded-thumbnail'}>
                    <div className={'thumbnail-title-container'}>
                        <h3>{props.title}</h3>
                    </div>
                    <div className={'thumbnail-content-container'}>
                        {props.content}
                    </div>
                    <div className={'button-container'}>
                        <CircleButton />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
        <div className={'thumbnail'}>
            <div className={'thumbnail-box'}>
                <div className={'thumbnail-svg-container'}>
                    {props.svg}
                </div>
                <div className={'button-container'}>
                    <CircleButton />
                </div>
            </div>
            <div className={'compact thumbnail-title-container'}>
                <h3>{props.title}</h3>
            </div>
        </div>
    )
    }
}

export default Thumbnail