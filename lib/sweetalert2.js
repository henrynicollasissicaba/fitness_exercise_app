import Swal from "sweetalert2"

export const showCustomAlert = async (title) => {
    const result = await Swal.fire({
        title: `${title}`,
        text: `Essa é uma ação irreversível!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Excluir`
    })

    if(result.isConfirmed) return true
    return false
}

export const errorAlert = async (title) => {
    await Swal.fire({
        icon: "error",
        title: `${title}`
    })
}