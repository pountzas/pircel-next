type HouseHead = {
  id: string;
  firstName: string;
  lastName: string;
};

type Trait = {
  id: string;
  name: string;
};

type House = {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
  element: string;
  ghost: string;
  commonRoom: string;
  heads: HouseHead[];
  traits: Trait[];
};
