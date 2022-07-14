import './style.css'

type ShowInformationProps = {
    content?: string,
    isDisable: boolean,
    title: string
}

export const ShowInformation: React.FC<ShowInformationProps> = (props) => {
    return (
        <div className="content-item">
            <p>{props.title}</p>
            <input type="text" value={props.content} disabled={props.isDisable} />
        </div>
    )
}