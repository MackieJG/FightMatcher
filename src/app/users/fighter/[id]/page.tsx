import Link from "next/link";

export type Fighter = {
  id: number;
  firstName: string;
  lastName: string;
  nickName: string;
  gender: string;
  fightingWeight: number;
  weightClass: string;
  gym: string;
  city: string;
  country: string;
  professional: boolean;
  wins: number;
  losses: number;
};

export default function FighterProfilePage() {
  const fighter: Fighter = {
    id: 1,
    firstName: "James",
    lastName: "Blaney",
    nickName: "Big Boy",
    gender: "male",
    fightingWeight: 84,
    weightClass: "Middle Weight",
    gym: "MNBJJ",
    city: "Glasgow",
    country: "Scotland",
    professional: false,
    wins: 3,
    losses: 0,
  };

  const fighter2: Fighter = {
    firstName: "James",
    lastName: "Blaney",
    nickName: "Big Boy",
    gender: "male",
    fightingWeight: 84,
    weightClass: "Middle Weight",
    gym: "MNBJJ",
    city: "Glasgow",
    country: "Scotland",
    professional: false,
    wins: 3,
    losses: 0,
  };

  const professional = fighter.professional;
  const fightingWeightInLbs = Math.round(fighter.fightingWeight * 2.20462);

  return (
    <>
      <h1 className="text-4xl mb-4 border-b border-secondayColour max-w-sm">
        Fighter Profile
      </h1>
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl">
          {fighter.firstName} "{fighter.nickName}" {fighter.lastName}
        </h2>
        <div>
          {!professional ? (
            <section className="flex items-baseline gap-1">
              <h2 className="text-2xl">
                {fighter.wins} - {fighter.losses}
              </h2>
              <p>amature</p>
            </section>
          ) : (
            <section className="flex items-baseline gap-1">
              <h2 className="text-2xl">
                {fighter.wins} - {fighter.losses}
              </h2>
              <p>professional</p>
            </section>
          )}
          <h3 className="text-xl">{fighter.weightClass}</h3>
          <h3 className="text-xl">
            {fighter.fightingWeight}kgs ({fightingWeightInLbs}lbs)
          </h3>
        </div>

        <div>
          <h4>Training at {fighter.gym}</h4>
          <h4>Fighting out of {fighter.city}</h4>
        </div>
      </div>
    </>
  );
}
