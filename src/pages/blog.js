import React from "react";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import { posts } from "../data/posts";
import { MDXProvider } from "@mdx-js/react";
import loadable from "@loadable/component";

const Blog = () => {
	const slug = posts[0].slug;
	const MDXContent = loadable(() => import(`../posts/${slug}.mdx`));

	const date = (date) => {
		return new Date(date).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	return (
		<Page>
			<MDXProvider>
				<div className="mb-10 max-w-4xl border-b solid border-medium-blue pb-8">
					<MDXContent fallback={<p>Loading...</p>} />
				</div>
			</MDXProvider>
			<ul>
				{posts.map((post) => (
					<li
						key={post.slug}
						className="mb-8 border-b solid border-medium-blue pb-8"
					>
						<div className="heading-3">
							<Link to={`/blog/${post.slug}`}>{post.title}</Link>
						</div>
						<div className="flex mb-2">
							<div>{date(post.pubDate)}</div>
							<Link to={"/"}>{post.tag}</Link>
						</div>
						<span>{post.snippet}</span>
					</li>
				))}
			</ul>
		</Page>
	);
};

export default Blog;
