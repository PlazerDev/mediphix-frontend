
interface Props{
    title: string,
    text: string,
}

const Alert = ({title,text}:Props) => {
    return (
        <>
            <div>{title}</div>
            <div>{text}</div>
        </>
    )
}
export default Alert;
