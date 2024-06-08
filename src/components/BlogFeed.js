import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";

const date = (date) => {
	return new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};

const BlogFeed = () => {
	return (
		<div className="max-w-xs">
			<h3 className="heading-3 text-light-blue">Blog</h3>
			<ul>
				{posts.map((post) => (
					<li
						key={post.title}
						className="border-b solid border-medium-blue py-4"
					>
						<div className="pb-1">
							<Link to={`/blog/${post.slug}`}>{post.title}</Link>
						</div>
						<div className="text-xs flex gap-4">
							<span>{date(post.pubDate)}</span>
							<span>{post.tag}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default BlogFeed;
