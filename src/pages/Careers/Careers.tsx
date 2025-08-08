import { useState } from "react";
import { motion } from "framer-motion";
import "./Careers.css"; // Create this CSS file for styling

const jobOpenings = [
  {
    id: 1,
    title: "Lubrication Engineer",
    department: "Research & Development",
    location: "Shanghai, China",
    type: "Full-time",
    description:
      "Develop innovative lubrication solutions for industrial applications. Requires 5+ years experience in tribology.",
  },
  {
    id: 2,
    title: "Production Supervisor",
    department: "Manufacturing",
    location: "Berlin, Germany",
    type: "Full-time",
    description:
      "Oversee production operations and ensure quality standards. Minimum 3 years supervisory experience in manufacturing.",
  },
  {
    id: 3,
    title: "Sales Manager",
    department: "Commercial",
    location: "Remote",
    type: "Full-time",
    description:
      "Lead sales team and develop client relationships in the industrial sector. Proven track record in B2B sales required.",
  },
];

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJob = (id: any) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <div className="careers-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="careers-header"
      >
        <h1>CAREER OPPORTUNITIES</h1>
        <p>Join our team and help shape the future of industrial lubrication</p>
      </motion.div>

      <div className="jobs-list">
        {jobOpenings.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: job.id * 0.1 }}
            className="job-card"
          >
            <div className="job-summary" onClick={() => toggleJob(job.id)}>
              <div className="job-title">
                <h3>{job.title}</h3>
                <span className="job-type">{job.type}</span>
              </div>
              <div className="job-meta">
                <span>{job.department}</span>
                <span>{job.location}</span>
              </div>
              <motion.div
                animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                className="job-toggle"
              >
                ▼
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: expandedJob === job.id ? 1 : 0,
                height: expandedJob === job.id ? "auto" : 0,
              }}
              className="job-details"
            >
              <p>{job.description}</p>
              <button className="apply-button">Apply Now</button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="benefits-section">
        <h2>WHY JOIN MAXIFRT-LUBE?</h2>
        <div className="benefits-grid">
          {[
            "Competitive salaries & bonuses",
            "Global career opportunities",
            "Cutting-edge R&D environment",
            "Professional development programs",
            "Health & wellness benefits",
            "Innovation-driven culture",
          ].map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="benefit-card"
            >
              <div className="benefit-icon">✓</div>
              <p>{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
