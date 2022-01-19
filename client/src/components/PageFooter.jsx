import React from "react";

export default function PageFooter() {
  const scrollTopOfPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-col">
          <h3>© 2021-2022</h3>
        </div>
        <div className="footer-col">
          <h2>Developer</h2>
          <h3>Ivan Ivanov</h3>
        </div>
        <div className="footer-col">
          <h2>About</h2>
          <div className="footer-content">
            <h3>
              <a href="https://github.com/ivanivanov-github">GitHub   </a>
              <a href="https://www.linkedin.com/in/ivan-ivanov-931b87225">
                LinkedIn
              </a>
            </h3>
          </div>
        </div>
        <div className="footer-col">
          <h2>Features</h2>
          <div className="footer-content">
            <button onClick={scrollTopOfPage}>Jump to top of page</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}
