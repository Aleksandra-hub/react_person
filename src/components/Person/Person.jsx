import { Partner } from '../Partner';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    <p
      className="Person__age"
      style={{ display: person.age === undefined ? 'none' : 'block' }}
    >
      I am {person.age}
    </p>
    <Partner
      sex={person.sex}
      isMarried={person.isMarried}
      partnerName={person.partnerName}
    />
  </section>
);
