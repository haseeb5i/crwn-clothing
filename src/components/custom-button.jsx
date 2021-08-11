import './custom-button.scss'

const CustomButton = ({children, isGoogleBtn, ...otherProps}) => {
    return (
        <button className={`${isGoogleBtn ? 'google-btn' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;