function validatePasswords(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        // Mostrar alerta con SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Las contraseñas no coinciden. Intentalo otra vez!',
            confirmButtonColor: '#0D45C6', // Color del botón de confirmación (opcional)
        });
        return false; // Evita que el formulario se envíe
    }

    // Permitir que el formulario se envíe si las contraseñas coinciden
    document.getElementById('registerForm').submit();
}