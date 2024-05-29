import React from "react";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import Page from "../components/Page";
import loadable from "@loadable/component";

const BlogPost = () => {
	const { slug } = useParams();
	const MDXContent = loadable(() => import(`../posts/${slug}.mdx`));

	return (
		<Page>
			<MDXProvider>
				<div className="my-8 max-w-2xl">
					<MDXContent fallback={<p>Loading...</p>} />
				</div>
			</MDXProvider>
		</Page>
	);
};

export default BlogPost;
