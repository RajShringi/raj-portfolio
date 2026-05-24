export default function Skills() {
  const skills = [
    {
      id: 1,
      name: "TypeScript",
    },

    {
      id: 2,
      name: "JavaScript",
    },

    {
      id: 3,
      name: "React",
    },

    {
      id: 4,
      name: "Express Js",
    },

    {
      id: 5,
      name: "Node",
    },
    {
      id: 6,
      name: "Mongo DB",
    },
    {
      id: 7,
      name: "Next JS",
    },
    {
      id: 8,
      name: "Redux",
    },
  ];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="relative flex items-center gap-2 text-xs py-1 px-2 border border-foreground rounded-lg"
        >
          <span className="font-semibold">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}
