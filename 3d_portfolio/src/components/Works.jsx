/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-card md:shadow-indigo-700/20">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl" />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
            <div onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center
             cursor-pointer">
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name}
              className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}>
        <p className={styles.heroSubText}>
          My work
        </p>
        <h2 className={styles.heroHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[18px] max-w-5xl leading-[30px]">
          In software development, I specialize in android programming, object-oriented programming, web programming and database programming. Using these skills, I have been able to create user-friendly and effective software solutions.

          In IT, I have worked as a help desk and system administrator, where I honed my skills in solving technical problems and managing systems efficiently.

          In the field of cyber security, I played an important role in ensuring the security of systems by conducting analysis and penetration tests. These experiences made me more prepared against cyber threats and increased my security awareness.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}
            index={index}
            {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");