import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

export default function renderRating(rate) {
  const arrayRating = (ratingPar, element) =>
    Array(ratingPar)
      .fill()
      .map(() => element);
      
  if (rate === 5) {
    return arrayRating(5, <StarIcon />);
  } else {
    const newArray = [
      ...arrayRating(rate, <StarIcon />),
      ...arrayRating(5 - rate, <StarOutlineIcon />),
    ];
    return newArray;
  }
}
