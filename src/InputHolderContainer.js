import { connect } from 'react-redux';
import { InputHolder } from './InputHolder';
import { changeInputComponentValue, setInputComponentParameter, setOutputComponentParameter } from './Actions';

const mapStateToProps = function(state, ownProps) {
    return {
        inputs: state.inputs,
        outputs: state.outputs,
        result: state.result,
        inputArgs: Object.keys(state.args.input),
        outputArgs: Object.keys(state.args.output),
        childHeight: state.componentHeight,
    }
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        handleInputValueChange: function(id, value) {
            dispatch(changeInputComponentValue(id, value));
        },
        setInputComponentParameter: function(componentName, parameterName, parameter) {
            dispatch(setInputComponentParameter(componentName, parameterName, parameter));
        },
        setOutputComponentParameter: function(componentName, parameterName, parameter) {
            dispatch(setOutputComponentParameter(componentName, parameterName, parameter));
        }
    }
}

export const InputHolderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(InputHolder);

export default InputHolderContainer;
