import React from "react";
import Footer from "../components/Footer";
import BlogFeed from "../components/BlogFeed";
import Nav from "../components/Nav";

const Page = ({ children }) => {
	return (
		<div className="max-w-[1200px] m-auto px-6 flex flex-col min-h-screen my-8">
			<div className="sticky top-0">
				<Nav />
			</div>
			<div className="flex my-8">
				<div className="max-w-3xl mr-20">{children}</div>
				<div className="hidden lg:block">
					<BlogFeed />
				</div>
			</div>
			<div className="mt-auto">
				<Footer />
			</div>
		</div>
	);
};

export default Page;
