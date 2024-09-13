export const Partner = ({ sex, isMarried, partnerName }) => {
  let message = 'I am not married';

  if (sex === 'm' && isMarried === true) {
    message = `${partnerName} is my wife`;
  }

  if (sex === 'f' && isMarried === true) {
    message = `${partnerName} is my husband`;
  }

  return <p className="Person__partner">{message}</p>;
};
