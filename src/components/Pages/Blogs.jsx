import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <>
      <section className="md:px-20 py-10 space-y-4 bg-orange-300">
        <h2 className="text-center font-bold text-4xl">Questions</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold">
            Question 01 : What is an access token and refresh token? How do they
            work and where should we store them on the client-side?
          </h4>
          <p className="py-4 text-lg text-gray-700">
            <strong>Answer: </strong>
            <br />
            Refresh tokens allow you to balance your users' access needs with
            your organization's security practices. Access tokens help users get
            the resources they need to complete their tasks, but such tokens can
            also expose your organization to data compromise or other malicious
            actions if a hacker is able to steal them. The application receives
            an access token after a user successfully authenticates and
            authorizes access, then passes the access token as a credential when
            it calls the target API. You can store the access token and refresh
            token in the server-side session. The application can use web
            sessions to communicate with the server. The token is then available
            for any requests originating from server-side code.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold">
            Question 02 : Compare SQL and NoSQL databases?
          </h4>
          <p className="py-4 text-lg text-gray-700">
            <strong>Answer: </strong>
            <br />
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON. SQL databases
            use the Structured Query Language (SQL) for defining and
            manipulating data. SQL provides a standardized way to perform
            complex queries, joins, and aggregations. NoSQL databases use
            different query languages, often specific to the data model. For
            example, document-oriented NoSQL databases may use JSON-based query
            languages. SQL Database are : MySQL, Oracle Database, PostgreSQL,
            SQL Server. NoSQL Database are : MongoDB (document), Cassandra
            (columnar), Redis (key-value), Neo4j (graph).
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold">
            Question 03 : What is express js? What is Nest JS ?
          </h4>
          <p className="py-4 text-lg text-gray-700">
            <strong>Answer: </strong>
            <br />
            <strong>Express js : </strong> Express JS is a popular open-source
            web application framework for Node.js, designed to make building web
            applications easier and faster. It provides a range of features for
            web and mobile applications, including routing, middleware,
            templating engines, and more. <br /> <strong> Nest js : </strong>{" "}
            Nest. js is one of the fastest-growing Node. js frameworks for
            building efficient, scalable, and enterprise-grade backend
            applications using Node. js.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold">
            Question 04 : What is MongoDB aggregate and how does it work ?
          </h4>
          <p className="py-4 text-lg text-gray-700">
            <strong>Answer: </strong>
            <br />
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages. The
            aggregate operation works by processing data through a pipeline of
            stages. Each stage performs a specific operation on the data and
            passes the transformed data to the next stage. The pipeline stages
            can include various operators, such as $match, $group, $sort,
            $project, and many more.
          </p>
        </div>
      </section>
    </>
  );
};

export default Blogs;
