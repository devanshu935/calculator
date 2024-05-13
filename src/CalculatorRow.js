export default function CalculatorRow({ buttons, onClick }) {
    return (
        <div style={{ display: "flex", width: "200px", margin: "auto" }}>
            {buttons.map(button => {
                return (
                    <div onClick={onClick} style={{ padding: "5px", backgroundColor: "orange", height: "30px", width: "40px", border: "1px solid black", textAlign: "center", verticalAlign: "center" }}>{button}</div>
                );
            })}
        </div>
    );
}
