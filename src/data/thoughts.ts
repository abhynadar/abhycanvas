export interface Thought {
  date: Date;
  title: string;
  content: string;
}

const thoughts: Array<Thought> = [
  {
    date: new Date("2017-03-24"),
    title: "Be fully persuaded",
    content: "Get fully persuaded by what <b>The Lord</b> has said.",
  },
  {
    date: new Date("2017-07-28"),
    title: "Analyze news in the light of the Word of God",
    content:
      "Do not analyze Word of God in the light of news but analyze news in the light of the <b>Word of God</b>.",
  },
  {
    date: new Date("2017-08-11"),
    title: "We are born sinners",
    content:
      "Human beings are born sinners, only way to be righteous is to be born again in <b>Christ Jesus</b>.",
  },
  {
    date: new Date("2017-10-29"),
    title: "Absolute truth",
    content:
      'Some say - "There is no absolute truth" ok, so how about what you just said?',
  },
  {
    date: new Date("2018-02-05"),
    title: "Beast or not confused?",
    content:
      'On one hand they say "do not act like a beast", and on the other hand they teach that their ancestors were beast. They sure need some help.',
  },
];

export { thoughts };
