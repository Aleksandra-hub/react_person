import { Partner } from '../Partner';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age !== undefined ? (
      <p className="Person__age">I am {person.age}</p>
    ) : (
      ''
    )}
    <Partner
      sex={person.sex}
      isMarried={person.isMarried}
      partnerName={person.partnerName}
    />
  </section>
);
