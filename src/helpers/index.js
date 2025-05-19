import Swal from "sweetalert2";

export const vote = (rating) => (rating * 10).toFixed(2);

export const color = (rating) => {
  const percent = vote(rating);
  let color;

  if (percent < 50) {
    color = "bg-danger text-white";
  } else if (percent >= 80) {
    color = "bg-success text-white";
  } else {
    color = "bg-warning text-black";
  }

  return color;
};

export const alert = (title, text, icon, confirmButtonText) =>
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
  });

export const age = (birthday) =>
  new Date().getFullYear() - new Date(birthday).getFullYear();
