import type { Metadata } from "next";
import { CvActions } from "@/components/CvActions";
import { emphasize } from "@/components/emphasize";
import {
  also,
  education,
  experience,
  identity,
  research,
  skills,
} from "@/content/profile";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum vitae — Bibek Gyawali. Electronics engineer in Kathmandu working on closed-loop control, biomedical instrumentation, and signal processing.",
};

const projectTags: Record<string, string[]> = {
  "Low-Cost Automated Ventilator with Real-Time Patient Monitoring": [
    "Embedded C",
    "Arduino",
    "PID Control",
    "I²C / ADC",
    "MAX30100",
    "MPX5010",
  ],
  "Time-series forecasting of NEPSE equity prices with LSTMs": [
    "Python",
    "PyTorch / Keras",
    "LSTM",
    "Time-Series",
    "Pandas",
  ],
  "Fraud detection under severe class imbalance": [
    "Python",
    "scikit-learn",
    "Classification",
    "Resampling",
    "AUC-ROC",
  ],
};

const roleTags: Record<string, string[]> = {
  Kingsoft: [
    "Flutter",
    "BLoC",
    "Dart",
    "CI/CD",
    "GitHub Actions",
    "Performance Profiling",
  ],
  "CellApp / SmartPalika": [
    "Flutter",
    "Dart",
    "REST APIs",
    "GovTech (100k+ users)",
    "Retail SaaS (1k+ shops)",
  ],
};

export default function CV() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.name}>{identity.name}</h1>
        <p className={styles.titleLine}>
          Electronics &amp; Communication Engineer · Tribhuvan University
        </p>

        <div className={styles.contactRow}>
          <span className={styles.contactItem}>{identity.location}</span>
          <span>·</span>
          <span className={styles.contactItem}>
            <a href={`mailto:${identity.email}`} className={styles.contactLink}>
              {identity.email}
            </a>
          </span>
          {identity.links.map((link) => (
            <span key={link.href} className={styles.contactItem}>
              <span>·</span>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={styles.contactLink}
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>

        <CvActions email={identity.email} />

        <p className={styles.summary}>
          {identity.summary} Completed an undergraduate thesis designing a
          closed-loop ventilator from first principles while working three years
          concurrently in production software engineering.
        </p>
      </header>

      {/* Education */}
      <section className={styles.section} aria-labelledby="education-heading">
        <div className={styles.sectionHeader}>
          <h2 id="education-heading" className={styles.sectionTitle}>
            Education
          </h2>
        </div>

        <div className={styles.entriesList}>
          {education.map((item) => (
            <article key={item.degree} className={styles.entry}>
              <p className={styles.period}>{item.period}</p>
              <div className={styles.entryMain}>
                <div className={styles.entryHeading}>
                  <h3 className={styles.entryTitle}>{item.degree}</h3>
                  <span className={styles.gradeBadge}>Score: 76 / 100</span>
                </div>
                <div className={styles.entryMeta}>
                  <span className={styles.institution}>{item.institution}</span>
                </div>
                {item.body?.length ? (
                  <ul className={styles.bullets}>
                    {item.body.map((line, i) => (
                      <li key={i} className={styles.bullet}>
                        {emphasize(line)}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.note ? <p className={styles.note}>{item.note}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Research and Engineering Projects */}
      <section className={styles.section} aria-labelledby="research-heading">
        <div className={styles.sectionHeader}>
          <h2 id="research-heading" className={styles.sectionTitle}>
            Research &amp; Key Projects
          </h2>
        </div>

        <div className={styles.entriesList}>
          {research.map((item) => {
            const tags = projectTags[item.title] || [];
            return (
              <article key={item.title} className={styles.entry}>
                <p className={styles.period}>{item.period}</p>
                <div className={styles.entryMain}>
                  <div className={styles.entryHeading}>
                    <h3 className={styles.entryTitle}>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noreferrer">
                          {item.title} ↗
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                  </div>
                  {item.body?.length ? (
                    <ul className={styles.bullets}>
                      {item.body.map((line, i) => (
                        <li key={i} className={styles.bullet}>
                          {emphasize(line)}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {tags.length > 0 && (
                    <div className={styles.tags} aria-label="Technologies used">
                      {tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Professional Experience */}
      <section className={styles.section} aria-labelledby="experience-heading">
        <div className={styles.sectionHeader}>
          <h2 id="experience-heading" className={styles.sectionTitle}>
            Professional Experience
          </h2>
        </div>

        <div className={styles.entriesList}>
          {experience.roles.map((role) => {
            const tags = roleTags[role.institution] || [];
            return (
              <article key={role.institution} className={styles.entry}>
                <p className={styles.period}>{role.period}</p>
                <div className={styles.entryMain}>
                  <div className={styles.entryHeading}>
                    <h3 className={styles.entryTitle}>{role.role}</h3>
                  </div>
                  <div className={styles.entryMeta}>
                    <span className={styles.institution}>
                      {role.institution}
                    </span>
                  </div>
                  {role.body?.length ? (
                    <ul className={styles.bullets}>
                      {role.body.map((line, i) => (
                        <li key={i} className={styles.bullet}>
                          {emphasize(line)}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {tags.length > 0 && (
                    <div className={styles.tags} aria-label="Role technologies">
                      {tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Technical Skills */}
      <section className={styles.section} aria-labelledby="skills-heading">
        <div className={styles.sectionHeader}>
          <h2 id="skills-heading" className={styles.sectionTitle}>
            Technical Proficiencies
          </h2>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.term} className={styles.skillCategory}>
              <h3 className={styles.skillCategoryName}>{skill.term}</h3>
              <p className={styles.skillList}>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications, Awards & Languages */}
      <section className={styles.section} aria-labelledby="also-heading">
        <div className={styles.sectionHeader}>
          <h2 id="also-heading" className={styles.sectionTitle}>
            Honors, Certifications &amp; Languages
          </h2>
        </div>

        <dl className={styles.tabularList}>
          {also.map((item, i) => (
            <div key={i} style={{ display: "contents" }}>
              <dt className={styles.tabularKey}>{item.term}</dt>
              <dd className={styles.tabularVal}>{item.description}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
