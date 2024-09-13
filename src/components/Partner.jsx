export const Partner = ({ sex, isMarried, partnerName }) => {
  let message = 'I am not married';

  if (sex === 'm' && isMarried === true) {
    message = <p className="Person__partner">{`${partnerName} is my wife`}</p>;
  }

  if (sex === 'f' && isMarried === true) {
    message = (
      <p className="Person__partner">{`${partnerName} is my husband`}</p>
    );
  }

  return <p className="Person__partner">{message}</p>;
};
