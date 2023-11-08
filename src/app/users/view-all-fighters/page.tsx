import Link from "next/link";
import { Fighter } from "../fighter/[id]/page";

export default function FightersListPage() {
  const fighter1: Fighter = {
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
    id: 2,
    firstName: "Josh",
    lastName: "Mackie",
    nickName: "Blaster",
    gender: "male",
    fightingWeight: 84,
    weightClass: "Middle Weight",
    gym: "YSL Street Fighters",
    city: "East Kilbride",
    country: "Scotland",
    professional: false,
    wins: 17,
    losses: 5,
  };

  const fighter3: Fighter = {
    id: 3,
    firstName: "Wully",
    lastName: "McGoldrick",
    nickName: "Handsome",
    gender: "male",
    fightingWeight: 84,
    weightClass: "Middle Weight",
    gym: "Aberdeen Combat Club",
    city: "Aberdeen",
    country: "Scotland",
    professional: false,
    wins: 2,
    losses: 10,
  };

  const fighter4: Fighter = {
    id: 4,
    firstName: "Derek",
    lastName: "Donaldson",
    nickName: "Smelly",
    gender: "male",
    fightingWeight: 84,
    weightClass: "Middle Weight",
    gym: "East End Scrappers",
    city: "Glasgow",
    country: "Scotland",
    professional: false,
    wins: 27,
    losses: 59,
  };

  const fighterList: Fighter[] = [fighter1, fighter2, fighter3, fighter4];

  return (
    <>
      <h1 className="text-4xl mb-4">Fighters List</h1>
      <div className="flex flex-col gap-2">
        {fighterList.map((fighter) => {
          return (
            <div
              key={fighter.id}
              className="w-96 h-auto border-2 border-themeBlack rounded bg-mainBackground text-mainText p-4 flex gap-4 items-center"
            >
              <section className="w-60">
                {fighter.firstName} "{fighter.nickName}" {fighter.lastName}
              </section>
              <section className="text-lg">
                {fighter.wins} - {fighter.losses}
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
}
