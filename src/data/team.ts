type TeamMember = {
  name: string;
  role: string;
  university: string;
  bio: string;
  linkedinUrl: string;
  image?: string;
};

export const executiveTeam: TeamMember[] = [
  {
    name: "Amber Lin",
    role: "CEO & Co-founder",
    university: "",
    bio: "Leads Constellate's vision and strategy, connecting student talent with organizations that need strategic support.",
    linkedinUrl: "https://linkedin.com",
    image: "/team/amber-lin.png",
  },
  {
    name: "Sophia Feng",
    role: "CEO & Co-founder",
    university: "",
    bio: "Co-leads Constellate's growth and partnerships, building an intercollegiate community of student consultants.",
    linkedinUrl: "https://linkedin.com",
    image: "/team/sophia-feng.png",
  },
  {
    name: "Taylor Ye",
    role: "CTO & Co-founder",
    university: "",
    bio: "Builds Constellate's technology and digital infrastructure to support teams, clients, and operations.",
    linkedinUrl: "https://linkedin.com",
    image: "/team/taylor-ye.png",
  },
  {
    name: "Doris Vo",
    role: "COO & Co-founder",
    university: "",
    bio: "Oversees day-to-day operations and ensures every engagement runs smoothly from kickoff to delivery.",
    linkedinUrl: "https://linkedin.com",
    image: "/team/doris-vo.png",
  },
  {
    name: "Allison Chen",
    role: "Director of Advisory Board",
    university: "",
    bio: "Guides Constellate's advisory board and connects leadership with mentors and industry expertise.",
    linkedinUrl: "https://linkedin.com",
    image: "/team/allison-chen.png",
  },
  {
    name: "Bridget Lu",
    role: "CMO",
    university: "",
    bio: "Shapes Constellate's brand and marketing, telling the story of student-led impact across communities.",
    linkedinUrl: "https://linkedin.com",
    image: "/team/bridget-lu.png",
  },
];

export function getInitials(name: string): string {
  return (
    name
      .split(" ")
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "?"
  );
}
