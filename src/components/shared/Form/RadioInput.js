const RadioInputAccount = ({labelText, name, value}) => {
    return (
        <label className="mna-radio-input">
            <input name={name} type="radio" value={value} />
            <span className="bp3-control-indicator"></span>
            {labelText}
        </label>
    )
};

export default RadioInputAccount;
