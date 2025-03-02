import React from "react";
import Page from "../../components/Page";

const BitesizeAppPage = () => {
	return (
		<Page>
			<h1>BiteSize App</h1>
			<div className="md:flex gap-4">
				<div>
					<p>
						BiteSize is a pantry management system designed to simplify grocery
						shopping and streamline meal planning.
					</p>
					<p>
						I’ve always valued home-cooked meals, but meal planning? Not my
						strong suit. Coming up with ideas, making sure I have every
						ingredient on hand, and avoiding last-minute grocery runs—it all
						adds up to more hassle than I’d like.
					</p>
					<p>
						While plenty of apps aim to solve this problem, none quite fit my
						needs. So, I decided to build my own solution.
					</p>
					<p>
						BiteSize started as a simple set of linked Notion databases to help
						me track what ingredients I had, staple pantry items, recipes I
						love, and new ones to try. It worked well, but it still wasn’t the
						seamless experience I was looking for.
					</p>
					<p>That’s when BiteSize came to life.</p>
				</div>
				<img
					src="../../../../images/bitesize-portfolio-screenshot.png"
					alt="Bitesize App home screen"
					className="h-fit md:w-1/3 object-fit border border-none rounded-sm"
				></img>
			</div>
			<div className="mt-4 md:mt-0">
				<p>
					Right now, the app is in its early stages, primarily focused on pantry
					management. There’s still a long way to go, but I have big plans and
					work on it whenever I can.
				</p>
				<p>
					My ultimate goal is to develop BiteSize into a powerful, user-friendly
					tool—not just for me, but for anyone looking to make meal planning
					easier.
				</p>
				<a
					href="https://hartnetthq.notion.site/bitesizeroadmap?v=173dd6f8ff8480009f73000c9643cf72&pvs=73"
					className="button-secondary"
				>
					View roadmap
					<span class="material-symbols-outlined ml-1">arrow_forward</span>
				</a>
				<a
					href="https://github.com/abigailhartnett/bitesize-app"
					className="button-secondary"
				>
					View codebase
					<span class="material-symbols-outlined ml-1">arrow_forward</span>
				</a>
			</div>
		</Page>
	);
};

export default BitesizeAppPage;
