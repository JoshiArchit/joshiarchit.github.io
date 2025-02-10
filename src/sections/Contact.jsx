import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="mb-[2%]">
        <h3 className="head-text flex justify-center mb-[2%]">Reach Me At</h3>
        <div className="grid-container socials-section flex justify-center items-center">
        <div className="socials-icons flex flex-row items-center gap-5">
              <a
                href="https://www.linkedin.com/in/archit2904/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/linkedin.svg"
                  alt="linkedin"
                  className="w-8 h-8 rounded-lg"
                  title="Connect with me on LinkedIn!"
                />
              </a>
              <a
                href="https://www.github.com/JoshiArchit"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/github.svg"
                  alt="github"
                  className="w-8 h-8 rounded-lg"
                  title="Git on my GitHub!"
                />
              </a>
              <a href="mailto:joshi.archit.2904@gmail.com">
                <img
                  src="/assets/email.svg"
                  alt="email"
                  className="w-8 h-8 rounded-lg"
                  title="Email Me!"
                />
              </a>
              <a href="/assets/resume.pdf" download>
                <img
                  src="/assets/resume.svg"
                  alt="Download Resume"
                  className="w-12 h-12 cursor-pointer"
                  title="Download my Resume!"
                />
              </a>
            </div>
            </div>
    </section>
  )
}

export default Contact