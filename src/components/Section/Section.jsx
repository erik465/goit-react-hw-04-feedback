export const Section = (props) => {
    return(
        <section>
            <h2>{props.title}</h2>
            {props.children}
        </section>
    )
}