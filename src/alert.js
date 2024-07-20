import Swal from 'sweetalert2';

export const showErrorMessage = (message) => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${message}`
    });
}
