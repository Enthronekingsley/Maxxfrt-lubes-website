import { motion } from "framer-motion";
import "./OurTeam.css"; // Create this CSS file for styling

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    position: "CEO & Founder",
    bio: "Visionary leader with 15+ years in lubrication technology",
    img: "https://example.com/team1.jpg", // Replace with actual image path
  },
  {
    id: 2,
    name: "Sarah Chen",
    position: "Chief Engineer",
    bio: "Specializes in industrial lubrication systems design",
    img: "https://example.com/team2.jpg", // Replace with actual image path
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    position: "R&D Director",
    bio: "Leads innovation in sustainable lubrication solutions",
    img: "https://example.com/team3.jpg", // Replace with actual image path
  },
  {
    id: 4,
    name: "Emily Wong",
    position: "Operations Manager",
    bio: "Ensures seamless production and quality control",
    img: "https://example.com/team4.jpg", // Replace with actual image path
  },
];

const OurTeam = () => {
  return (
    <div className="team-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="team-header"
      >
        <h1>OUR EXPERT TEAM</h1>
        <p>The driving force behind MAXIFRT-LUBE's innovation and success</p>
      </motion.div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="team-card"
          >
            <div className="team-card-img">
              <img src={member.img} alt={member.name} />
              <div className="team-card-overlay">
                <p>{member.bio}</p>
              </div>
            </div>
            <div className="team-card-info">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
