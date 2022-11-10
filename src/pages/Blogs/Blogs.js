import React from "react";
import { DynamicTitle } from "../../DynamicTitle/DynamicTitle";

const Blog = () => {
  DynamicTitle("Blog");
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl mb-4">
            Interview Questions
          </h2>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                1. Difference between SQL and NoSQL
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                When choosing a modern database, one of the biggest decisions is
                picking a relational (SQL) or non-relational (NoSQL) data
                structure. While both are viable options, there are key
                differences between the two that users must keep in mind when
                making a decision. Here, we break down the most important
                distinctions and discuss the best SQL and NoSQL database systems
                available. The five critical differences between SQL vs NoSQL
                are: <br /> SQL databases are relational, NoSQL databases are
                non-relational. <br />
                SQL databases use structured query language and have a
                predefined schema. NoSQL databases have dynamic schemas for
                unstructured data. <br /> SQL databases are vertically scalable,
                while NoSQL databases are horizontally scalable. <br />
                SQL databases are table-based, while NoSQL databases are
                document, key-value, graph, or wide-column stores. <br />
                SQL databases are better for multi-row transactions, while NoSQL
                is better for unstructured data like documents or JSON.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                2. What is JWT, and how does it work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                JWT, or JSON Web Token, is an open standard used to share
                security information between two parties — a client and a
                server. Each JWT contains encoded JSON objects, including a set
                of claims. JWTs are signed using a cryptographic algorithm to
                ensure that the claims cannot be altered after the token is
                issued.
                <br />
                <br />
                JWTs differ from other web tokens in that they contain a set of
                claims. Claims are used to transmit information between two
                parties. What these claims are depends on the use case at hand.
                For example, a claim may assert who issued the token, how long
                it is valid for, or what permissions the client has been
                granted. A JWT is a string made up of three parts, separated by
                dots (.), and serialized using base64. In the most common
                serialization format, compact serialization, the JWT looks
                something like this: xxxxx.yyyyy.zzzzz.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                3.What is the difference between javascript and NodeJS?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                1. JavaScript is a client-side scripting language that is
                lightweight, cross-platform, and interpreted. Both Java and HTML
                include it. Node.js, on the other hand, is a V8-based
                server-side programming language. As a result, it is used to
                create network-centric applications. It's a networked system
                made for data-intensive real-time applications. If we compare
                node js vs. python, it is clear that node js will always be the
                preferred option.
                <br /> 2. JavaScript is a simple programming language that can
                be used with any browser that has the JavaScript Engine
                installed. Node.js, on the other hand, is an interpreter or
                execution environment for the JavaScript programming language.
                It requires libraries that can be conveniently accessed from
                JavaScript programming to be more helpful.
                <br /> 3. Any engine may run JavaScript. As a result, writing
                JavaScript is incredibly easy, and any working environment is
                similar to a complete browser. Node.js, on the other hand, only
                enables the V8 engine. Written JavaScript code, on the other
                hand, can run in any context, regardless of whether the V8
                engine is supported.
                <br /> 4. A specific non-blocking operation is required to
                access any operating system. There are a few essential objects
                in JavaScript, but they are entirely OS-specific. Node.js, on
                the other hand, can now operate non-blocking software tasks out
                of any JavaScript programming. It contains no OS-specific
                constants. Node.js establishes a strong relationship with the
                system files, allowing companies to read and write to the hard
                drive.
                <br /> 5. The critical benefits of JavaScript include a wide
                choice of interfaces and interactions and just the proper amount
                of server contact and direct visitor input. Node.js, on the
                other hand, offers node package management with over 500 modules
                and the capacity to handle many requests at the same time. It
                also offers the unique ability to enable microservice
                architecture and the Internet of Things. Even when comparing
                node js vs. react js, node js always wins.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                4. How does NodeJS handle multiple requests at the same time?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                We know NodeJS application is single-threaded. Say, if
                processing involves request A that takes 10 seconds, it does not
                mean that a request which comes after this request needs to wait
                10 seconds to start processing because NodeJS event loops are
                only single-threaded. The entire NodeJS architecture is not
                single-threaded. How NodeJS handle multiple client requests?
                NodeJS receives multiple client requests and places them into
                EventQueue. NodeJS is built with the concept of event-driven
                architecture. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them. EventLoop is the
                listener for the EventQueue. If NodeJS can process the request
                without I/O blocking then the event loop would itself process
                the request and sends the response back to the client by itself.
                But, it is possible to process multiple requests parallelly
                using the NodeJS cluster module or worker_threads module.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
