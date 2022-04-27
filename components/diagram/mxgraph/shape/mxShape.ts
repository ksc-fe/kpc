import mx from '../mx';

export default function() {
    const {mxShape} = mx;

    mxShape.prototype.getConstraints = function() {
        return null;
    };
}
