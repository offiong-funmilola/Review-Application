import {PropTypes} from 'prop-types';

function Button(props) {
    const {children, type, version, isDisable} = props;
  return (
    <>
      <button type={type} version={version} disabled={isDisable} className={`form-btn form-btn-${version}`} >
        {children}
      </button>
    </>
  )
}

Button.defaultProps = {
    type: 'button',
    version: 'primary',
    isDisable: true
}
Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}
export default Button
