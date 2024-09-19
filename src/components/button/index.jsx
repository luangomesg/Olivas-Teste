import { Container } from './styles'
import PropTypes from 'prop-types';

export function Button({ children, variant = "header", ...props }) {
    return (
        <Container {...props} $variant={variant}>{children}</Container>
    )

}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ]),
    variant: PropTypes.string
}