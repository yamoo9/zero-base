import Icon from './Icon.js'

const Button = props => {
    const  {children, type} = props;

    return (
    <button className="upload-button" disabled={type === 'disabled' ? "disabled" : ''}>
        {children}<Icon type={type} />
    </button>
    )
}

export default Button