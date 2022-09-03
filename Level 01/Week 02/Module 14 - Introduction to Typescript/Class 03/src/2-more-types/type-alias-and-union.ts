type User = {
  id: number;
  userName: string;
  password: string;
  birthday: string;
  age?: number;
};

const cesar: User = {
  id: 5685,
  userName: "CesarCanoff",
  password: "5df6v6df5",
  birthday: "06/03/2004",
  age: 18,
};

/* UNION TYPES */
type logLevel = "info" | "debug" | "error";

function logMessage(message: string, level: logLevel) {
  console.log(`${level} - ${message}`);
}

logMessage("Mensagem", "debug");

/* INTERSECTION TYPES */
type About = {
  bio: string;
  interests: string[];
};

type Profile = User & About;

const userWithProfile: Profile = {
  id: 5685,
  userName: "Caio-645",
  password: "g6f.d5gd",
  birthday: "06/03/2004",
  bio: "Hello World!",
  interests: ["games", "code", "robotic", "music", "programming"],
};

type ComposeProfile = User & {
  log: logLevel;
}