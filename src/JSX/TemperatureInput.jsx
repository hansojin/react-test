const scaleSymbol = {
    c: "°C",
    f: "°F",
};

function TemperatureInput(props) {
    const handleChange = (e) => {
        props.onTemperatureChange(e.target.value);
    };

    return (
        <fieldset>
            <legend>
                input temperature ({scaleSymbol[props.scale]}) :
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}

export default TemperatureInput;