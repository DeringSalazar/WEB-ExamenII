const Buttons = ([onAgregar, onEliminar]) => {
    return (
            <div className="d-flex justify-content-center">
                <button class="btn btn-primary" type="submit" onClick={() => {
                    onAgregar();

                }}>
                    Agregar Lista</button>


                <button class="btn btn-primary" type="submit" onClick={() => {
                    onEliminar();

                }}>
                    Eliminar Lista</button>
            </div>

    );
}

export default Buttons;