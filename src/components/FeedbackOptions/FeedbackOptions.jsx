
export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
            {options.map(option => {
                return (<button onClick={() => onLeaveFeedback(option)}>{option.charAt(0).toUpperCase() + option.slice(1)}</button>)
            })}
        </div>
    )

}




