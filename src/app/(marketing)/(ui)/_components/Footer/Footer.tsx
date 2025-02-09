import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-dark-200 space-y-2 p-6 text-center text-sm">
      <p>Made with 💝 by Md. Shahidul Islam</p>

      <div className="flex items-center justify-center gap-3">
        Find me on{" "}
        <div className="flex items-center gap-3 text-xl">
          <a href="https://github.com/dev-mdshahid">
            <FaGithub />{" "}
          </a>
          <a href="https://www.linkedin.com/in/dev-mdshahid/">
            <FaLinkedin />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}
