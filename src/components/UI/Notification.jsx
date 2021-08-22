import classes from "./Notification.module.css"


const Nofication = (props) => {
    let statusStyleClass = ''

    if (props.status === 'error') {
        statusStyleClass = classes.error
    } else if (props.status === 'success') {
        statusStyleClass = classes.success
    }

    const cssClasses = `${classes.notification} ${statusStyleClass}`

    return (
        <section className={cssClasses}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    )
}

export default Notification