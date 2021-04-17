export default function Alert(props) {
    return (
        <div className={'alert w-full alert-'+props.type}>
            {props.msg}
        </div>
    )
}