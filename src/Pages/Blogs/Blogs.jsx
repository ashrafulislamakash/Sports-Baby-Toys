import React from "react";
import useTitle from "react-dynamic-title";

const Blogs = () => {
  const posts = [
    {
      id: 1,
      title:
        "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
      answer:
        "Access Token: A credential used for authorization and accessing specific resources. Refresh Token: A long-lived credential used to obtain a new access token when the current one expires. Storage: Options include cookies (HTTP-only), local/session storage, or secure HTTP-only cookies with CSRF protection. ",
    },
    {
      id: 2,
      title: "Compare SQL and NoSQL databases?",
      answer:
        "SQL databases: Structured, predefined schemas, strong  consistency.    NoSQL databases: Flexible, schema-less, high scalability.",
    },
    {
      id: 3,
      title: "What is express js? What is Nest JS?",
      answer:
        "Express.js is a minimal web application framework for Node.js, while Nest.js is a progressive Node.js framework built on top of Express.js with additional features and architectural patterns.",
    },
    {
      id: 4,
      title: "What is MongoDB aggregate and how does it work?",
      answer:
        "MongoDB's aggregate is a feature for data processing and analysis. It uses a pipeline with stages like filtering, grouping, sorting, and joining to manipulate data. It's a powerful tool for advanced data operations within the database.",
    },
  ];
  useTitle("Q&A");
  return (
    <div className="bg-white py-24 sm:py-32" data-aos="zoom-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blogs
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Questions and Answers
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs"></div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0" />
                  {post.title}
                </h3>
                <p className="mt-5  text-sm leading-6 text-gray-600">
                  {post.answer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
