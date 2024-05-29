import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div>
				<div class="border-b solid border-medium-blue py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
					<div
						className="flex items-center cursor-pointer"
						onClick={() => navigate("/")}
					>
						<img
							src="../logo.png"
							style={{ maxWidth: "32px" }}
							alt="Logo"
						></img>
						<p className="heading-4">Journal of a Junior Dev</p>
					</div>

					<div class="mt-1 flex gap-2">
						<a href="/blog" alt="resume" className="button-secondary">
							Blog
						</a>
						{/* <a href="/about" alt="resume" className="button-secondary">
							About
						</a>
						<a href="/projects" alt="resume" className="button-secondary">
							Projects
						</a> */}
						<a
							href="../resources/resume.pdf"
							alt="resume"
							className="button-secondary"
						>
							Resume
							<span class="material-symbols-outlined ml-1">download</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
