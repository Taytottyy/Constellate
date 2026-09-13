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
    role: "CEO & Co-Founder",
    university: "",
    bio: "Leads Constellate's vision and strategy, connecting student talent with organizations that need strategic support.",
    linkedinUrl: "https://linkedin.com",
    image: "/team/amber-lin.png",
  },
  {
    name: "Sophia Feng",
    role: "CEO & Co-Founder",
    university: "",
    bio: "Co-leads Constellate's growth and partnerships, building an intercollegiate community of student consultants.",
    linkedinUrl: "https://linkedin.com",
    image: "/team/sophia-feng.png",
  },
  {
    name: "Taylor Ye",
    role: "CTO & Co-Founder",
    university: "",
    bio: "Builds Constellate's technology and digital infrastructure to support teams, clients, and operations.",
    linkedinUrl: "https://linkedin.com",
    image: "/team/taylor-ye.png",
  },
  {
    name: "Doris Vo",
    role: "COO & Co-Founder",
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
    role: "Director of Product & Innovation",
    university: "",
    bio: "Shapes Constellate's brand and marketing, telling the story of student-led impact across communities.",
    linkedinUrl: "https://linkedin.com",
    image: "/team/bridget-lu.png",
  },
  {
    name: "Trisha Liu",
    role: "Director of Client Relations",
    university: "",
    bio: "Builds and maintains relationships with Constellate's clients, ensuring every partnership is set up for success.",
    linkedinUrl: "https://linkedin.com",
    image: "/team/trisha-liu.png",
  },
  {
    name: "Hafsa Sheikh",
    role: "Director of Management Consulting",
    university: "",
    bio: "Leads Constellate's management consulting practice, guiding teams through strategy and organizational engagements.",
    linkedinUrl: "https://linkedin.com",
    image: "/team/hafsa-sheikh.png",
  },
  {
    name: "Ananya Karthik",
    role: "Director of Marketing Consulting",
    university: "",
    bio: "Leads Constellate's marketing consulting practice, helping clients sharpen their brand and reach the right audiences.",
    linkedinUrl: "https://linkedin.com",
    image: "/team/ananya-karthik.png",
  },
  {
    name: "Celine Shin",
    role: "Director of Research & Insights",
    university: "",
    bio: "Leads Constellate's research and insights work, turning market and client data into actionable recommendations.",
    linkedinUrl: "https://linkedin.com",
    image: "/team/celine-shin.png",
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
