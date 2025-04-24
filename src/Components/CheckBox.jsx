function CheckBox() {
    return (
        <>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckIndeterminate"
                />
                <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                </label>
            </div>
        </>
    );
};

export default CheckBox;