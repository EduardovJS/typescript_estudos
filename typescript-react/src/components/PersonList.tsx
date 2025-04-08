type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersoList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((s) => {
        return (
          <h2 key={s.first}>
            {s.first} and {s.last}
          </h2>
        );
      })}
    </div>
  );
};
