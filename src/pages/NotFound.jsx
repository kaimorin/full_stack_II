function NotFound() {
    return (
        <main>
            <section className="error">
                <h1>404</h1>
                <h2>Página no encontrada</h2>
                <p>La página que estás buscando no existe o ha sido movida.</p>
                <a href="/" className="btn-verde">Volver a la página principal</a>
            </section>
        </main>
    );
}

export default NotFound;