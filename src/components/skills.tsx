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
          className="
          rounded-md border border-white/10
          px-2.5 py-1 text-xs font-bold
          text-muted-foreground hover:bg-neutral-50/10 transition-colors"
        >
          <span className="font-semibold">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}
