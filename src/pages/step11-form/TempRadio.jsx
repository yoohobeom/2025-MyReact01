export default function TempRadio({unit, onUnitChange}) {
    return (
        <div>
            <label>
                <input type="radio" 
                    value="Celsius"
                    checked={unit === 'Celsius'}
                    onChange={(e) => onUnitChange(e.target.value)}/>
                    Celsius(섭씨)
            </label>
            <label>
                <input type="radio" 
                    value="Fahrenheit"
                    checked={unit === 'Fahrenheit'}
                    onChange={(e) => onUnitChange(e.target.value)}/>
                    Fahrenheit(화씨)
            </label>
        </div>
    )
}