type TeamMember = {
  name: string;
  role: string;
  university: string;
  bio: string;
  linkedinUrl: string;
};

export const executiveTeam: TeamMember[] = [
  {
    name: "Taylor Ye",
    role: "Founder & CEO",
    university: "University of X",
    bio: "Leads Constellate's vision to connect student talent with organizations that need strategic support.",
    linkedinUrl: "https://linkedin.com",
  },
  {
    name: "[Name]",
    role: "COO",
    university: "University of X",
    bio: "Oversees day-to-day operations and ensures every engagement runs smoothly from kickoff to delivery.",
    linkedinUrl: "https://linkedin.com",
  },
  {
    name: "[Name]",
    role: "Head of Client Partnerships",
    university: "University of X",
    bio: "Builds relationships with small businesses and nonprofits to match them with the right consulting teams.",
    linkedinUrl: "https://linkedin.com",
  },
  {
    name: "[Name]",
    role: "Head of Recruiting",
    university: "University of X",
    bio: "Sources and develops top student talent from partner universities across the country.",
    linkedinUrl: "https://linkedin.com",
  },
  {
    name: "[Name]",
    role: "Head of Marketing",
    university: "University of X",
    bio: "Shapes Constellate's brand and tells the story of student-led impact in communities nationwide.",
    linkedinUrl: "https://linkedin.com",
  },
  {
    name: "[Name]",
    role: "Director of Operations",
    university: "University of X",
    bio: "Manages project workflows and internal systems that keep our consulting teams organized and effective.",
    linkedinUrl: "https://linkedin.com",
  },
];

export function getInitials(name: string): string {
  return name
    .replace(/\[|\]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "?";
}
